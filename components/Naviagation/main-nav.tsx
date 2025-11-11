"use client";
import { navItems } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link as ChakraLink,
  Menu,
  Portal,
  ClientOnly,
  Skeleton,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

import { LuChevronDown, LuMoon, LuSun } from "react-icons/lu";
import { useState } from "react";
import MobileNav from "./mobile-nav";
import { useColorMode } from "../ui/color-mode";

const MainNav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      py={4}
      justify="space-between"
      px={{ base: 4, md: 10 }}
      align="center"
      boxShadow="sm"
      wrap="wrap"
      bg={colorMode === "light" ? "white" : "black"}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={5}
    >
      {/* Logo */}
      <ChakraLink as={NextLink} href="/">
        <Text
          fontSize="xl"
          fontWeight="bold"
          color={colorMode === "light" ? "#043a7b" : "white"}
        >
          KAI
        </Text>
        <Text>Insurance Agency</Text>
      </ChakraLink>

      {/* Desktop Nav Links */}
      <HStack
        as="nav"
        gap={3}
        align="center"
        display={{ base: "none", md: "flex" }}
      >
        {(navItems as any[]).map((item, i) => {
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openIndex === i;

          return (
            <Menu.Root
              key={i}
              open={isOpen}
              onOpenChange={(open) => setOpenIndex(open ? i : null)}
            >
              <Box
                position="relative"
                onMouseEnter={() => hasChildren && setOpenIndex(i)}
                onMouseLeave={() => hasChildren && setOpenIndex(null)}
              >
                <Menu.Trigger asChild>
                  <ChakraLink
                    as={NextLink}
                    href={item.href || "#"}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="ghost"
                      fontWeight="semibold"
                      fontSize={{ base: "sm", md: "md" }}
                      transition="color 0.15s"
                    >
                      {item.label}
                      {hasChildren && (
                        <Box as="span" ml={1} display="inline-flex">
                          <LuChevronDown />
                        </Box>
                      )}
                    </Button>
                  </ChakraLink>
                </Menu.Trigger>

                {hasChildren && (
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content
                        rounded="md"
                        py={2}
                        minW="200px"
                        shadow="md"
                      >
                        {item.children.map((child: any, j: any) => (
                          <Menu.Item
                            asChild
                            key={j}
                            value={child.label}
                            cursor="pointer"
                          >
                            <ChakraLink
                              as={NextLink}
                              href={child.href}
                              px={4} // horizontal padding
                              py={2} // vertical padding
                              display="block"
                              fontSize="sm"
                              fontWeight="medium"
                              mb={1} // spacing between links
                              _hover={{ bg: "gray.100" }} // hover effect
                              onClick={(e) => {
                                if (typeof window !== "undefined") {
                                  const currentPath = window.location.pathname;
                                  const [targetPath, hash] = (
                                    child.href || ""
                                  ).split("#");

                                  if (currentPath === targetPath && hash) {
                                    e.preventDefault();
                                    const el = document.getElementById(hash);
                                    if (el) {
                                      el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                      });
                                    }
                                  }
                                }
                              }}
                            >
                              {child.label}
                            </ChakraLink>
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                )}
              </Box>
            </Menu.Root>
          );
        })}
      </HStack>

      {/* Desktop Buttons */}
      <HStack gap={3} display={{ base: "none", md: "flex" }}>
        <ClientOnly fallback={<Skeleton boxSize="8" />}>
          <IconButton onClick={toggleColorMode} variant="outline" size="sm">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </ClientOnly>

        <ChakraLink
          as={NextLink}
          href="https://invest.nabocapital.com"
          target="_blank"
        >
          <Button
            borderRadius="xl"
            fontWeight="semibold"
            size={{ base: "sm", lg: "md" }}
            _hover={{ bg: "cyan.600" }}
          >
            GET A QUOTE
          </Button>
        </ChakraLink>
      </HStack>

      {/* Mobile Nav */}
      <Box display={{ base: "flex", md: "none" }}>
        <MobileNav />
      </Box>
    </Flex>
  );
};

export default MainNav;
