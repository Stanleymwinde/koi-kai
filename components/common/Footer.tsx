"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Box as="footer" bg="#043a7b" color="white" py={10}>
      <Container maxW="6xl">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={10}
          pb={10}
          borderBottom="1px solid"
          borderColor="whiteAlpha.300"
        >
          {/* Column 1: Brand */}
          <Box>
            <Heading as="h3" size="md" mb={4}>
              KAI Insurance Agency
            </Heading>
            <Text>
              Making insurance easy and accessible for everyone in Kenya.
            </Text>
          </Box>

          {/* Column 2: Quick Links */}
          <Box>
            <Heading as="h3" size="sm" mb={4}>
              Quick Links
            </Heading>
            <Stack gap={2}>
              {["Home", "Services", "About", "Team", "Contact"].map((item) => (
                <Link
                  color={"white"}
                  as={NextLink}
                  key={item}
                  href={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  _hover={{ color: "blue.200", textDecoration: "none" }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Column 3: Contact Info */}
          <Box>
            <Heading as="h3" size="sm" mb={4}>
              Contact Info
            </Heading>
            <Stack gap={2}>
              <Text>+254 710 653375</Text>
              <Link
                color={"white"}
                href="mailto:info@kaiinsuranceagency.com"
                _hover={{ color: "blue.200" }}
              >
                info@kaiinsuranceagency.com
              </Link>
              <Text>Millennium Business Park</Text>
              <Text>Langata–Karen Rd, 2nd Floor</Text>
            </Stack>
          </Box>
        </Grid>

        {/* Bottom section */}
        <Box textAlign="center" pt={6}>
          <Text fontSize="sm" color="whiteAlpha.800">
            © {new Date().getFullYear()} KAI Insurance Agency. All rights
            reserved.
          </Text>
          <Text mt={2} fontStyle="italic" color="whiteAlpha.700">
            "Insurance is the hope you have when you need it the most."
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
