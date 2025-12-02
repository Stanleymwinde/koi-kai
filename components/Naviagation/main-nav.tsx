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
  IconButton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { LuChevronDown } from "react-icons/lu";
import { useState } from "react";
import MobileNav from "./mobile-nav";
import { useColorMode } from "../ui/color-mode";

const MainNav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      py={2}
      justify="space-between"
      px={{ base: 4, md: 10 }}
      align="center"
      boxShadow="sm"
      wrap="wrap"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      // bg="rgba(0,0,0,0.4)"
      bgGradient={"to-r"}
      gradientFrom={"#000000ff"}
      gradientTo={"#510101ff"}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      borderBottomWidth="1px"
      borderBottomColor="rgba(255,255,255,0.1)"
    >
      {/* Logo */}
      <ChakraLink as={NextLink} href="/">
        <Image src={"/images/logo.png"} alt="Logo" width={80} height={50} />
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
                      bg="rgba(255,255,255,0.15)"
                      style={{
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                      fontWeight="semibold"
                      fontSize={{ base: "sm", md: "md" }}
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

                {/* Dropdown */}
                {hasChildren && (
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content
                        rounded="md"
                        py={2}
                        minW="200px"
                        shadow="md"
                      >
                        {item.children.map((child: any, j: number) => (
                          <Menu.Item
                            asChild
                            key={j}
                            value={child.label}
                            cursor="pointer"
                          >
                            <ChakraLink
                              as={NextLink}
                              href={child.href}
                              px={4}
                              py={2}
                              display="block"
                              fontSize="sm"
                              fontWeight="medium"
                              mb={1}
                              _hover={{ bg: "gray.100" }}
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
        <ChakraLink as={NextLink} href="/#contact">
          <Button
            borderRadius="xl"
            fontWeight="semibold"
            size={{ base: "sm", lg: "md" }}
            bgGradient="to-r"
            gradientFrom={"#000000ff"}
            gradientTo={"#e60000ff"}
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
