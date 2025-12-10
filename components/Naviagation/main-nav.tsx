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
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { LuChevronDown } from "react-icons/lu";
import { useState } from "react";
import MobileNav from "./mobile-nav";

const NAV_HEIGHT = { base: "64px", md: "80px" };

const MainNav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Flex
      h={NAV_HEIGHT}
      px={{ base: 4, md: 10 }}
      align="center"
      justify="space-between"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bgGradient="to-r"
      gradientFrom="#000000ff"
      gradientTo="#510101ff"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      borderBottom="1px solid rgba(255,255,255,0.1)"
    >
      {/* Logo */}
      <ChakraLink as={NextLink} href="/" flexShrink={0}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={72}
          height={44}
          style={{ objectFit: "contain" }}
        />
      </ChakraLink>

      {/* Desktop Navigation */}
      <HStack
        as="nav"
        gap={2}
        display={{ base: "none", md: "flex" }}
        align="center"
      >
        {navItems.map((item, i) => {
          // const hasChildren = item.children?.length > 0;
          const isOpen = openIndex === i;

          return (
            <Menu.Root
              key={i}
              open={isOpen}
              onOpenChange={(open) => setOpenIndex(open ? i : null)}
            >
              <Box
              // onMouseEnter={() => hasChildren && setOpenIndex(i)}
              // onMouseLeave={() => hasChildren && setOpenIndex(null)}
              >
                <Menu.Trigger asChild>
                  <ChakraLink as={NextLink} href={item.href || "#"}>
                    <Button
                      size="sm"
                      fontWeight="medium"
                      bg="rgba(255,255,255,0.12)"
                      color="white"
                      _hover={{ bg: "rgba(255,255,255,0.25)" }}
                    >
                      {item.label}
                      {/* {hasChildren && (
                        <Box as="span" ml={1} display="inline-flex">
                          <LuChevronDown />
                        </Box>
                      )} */}
                    </Button>
                  </ChakraLink>
                </Menu.Trigger>

                {/* {hasChildren && (
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content
                        minW="200px"
                        py={2}
                        rounded="md"
                        shadow="lg"
                      >
                        {item.children.map((child, j) => (
                          <Menu.Item key={j} asChild value={child.label}>
                            <ChakraLink
                              as={NextLink}
                              href={child.href}
                              px={4}
                              py={2}
                              display="block"
                              fontSize="sm"
                              _hover={{ bg: "gray.100" }}
                            >
                              {child.label}
                            </ChakraLink>
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                )} */}
              </Box>
            </Menu.Root>
          );
        })}
      </HStack>

      {/* Desktop CTA */}
      <HStack display={{ base: "none", md: "flex" }}>
        <ChakraLink as={NextLink} href="/#contact">
          <Button
            size="sm"
            px={6}
            fontWeight="semibold"
            borderRadius="xl"
            bgGradient="to-r"
            gradientFrom="#000000ff"
            gradientTo="#e60000ff"
            _hover={{ opacity: 0.9 }}
          >
            GET A QUOTE
          </Button>
        </ChakraLink>
      </HStack>

      {/* Mobile Menu */}
      <Box display={{ base: "flex", md: "none" }}>
        <MobileNav />
      </Box>
    </Flex>
  );
};

export default MainNav;
