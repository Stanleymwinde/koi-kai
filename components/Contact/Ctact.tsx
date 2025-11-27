"use client";
import { contactsData, MarginX } from "@/utils/constants";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Cform from "./Cform";
import { useColorMode } from "../ui/color-mode";

const Ctact = () => {
  const { setColorMode, colorMode } = useColorMode();
  return (
   <Box mt={{ base: 20, md: 24 }} mb={{ base: 8, md: 6 }} as={"section"}>

      {" "}
      <Box textAlign="center">
        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={4}>
          Get In Touch
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={8}>
          Contact us for inquiries, partnerships, and instant assistance
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={12}
        my="4rem"
        marginX={MarginX}
        alignItems="start"
      >
        {/* Left Side - Contact Details */}
        <Stack
          gap="1.5rem"
          w="full"
          p={8}
          borderRadius="xl"
          bgGradient="to-r"
          gradientFrom={"#000000ff"}
          gradientTo={"#e60000ff"}
          _hover={{
            transform: "translateY(-6px)",
          }}
          transition="transform 0.2s ease"
          color="white"
          boxShadow="lg"
        >
          <Box>
            <Heading fontSize="3xl" mb={4}>
              Let's Work Together
            </Heading>
            <Text fontSize="lg">
              Ready to secure your future? Get in touch with us today for a
              personalized insurance solution.
            </Text>
          </Box>

          {contactsData.map((d, i) => (
            <Flex
              key={i}
              p={4}
              borderRadius="lg"
              gap={4}
              align="center"
              transition="all 0.3s"
              color={colorMode === "light" ? "white" : "black"}
              _hover={{
                bg: "white",
                color: "#114180",
                boxShadow: "md",
                cursor: "pointer",
                transform: "translateY(-2px)",
              }}
            >
              <Stack
                p={3}
                bg="white"
                h="fit-content"
                borderRadius="full"
                minW="50px"
              >
                <Box as={d.icon} color={"#114180"} boxSize={6} />
              </Stack>
              <Stack>
                <Heading fontSize="md" fontWeight="semibold">
                  {d.title}
                </Heading>
                <Link href={d.link}>
                  <Text fontSize="md" fontWeight="medium">
                    {d.label}
                  </Text>
                </Link>
              </Stack>
            </Flex>
          ))}
        </Stack>

        {/* Right Side - Contact Form */}
        <Cform />
      </SimpleGrid>
    </Box>
  );
};

export default Ctact;
