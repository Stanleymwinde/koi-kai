"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      as="section"
      id="home"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        bgImage="url('/images/hero-bg.jpg')"
        bgSize="cover"
        bgPos="center"
        bgBlendMode={"multiply"}
        bgColor={"blue.200"}
      >
        {/* Gradient Overlay
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-r, red.200, blue.200)"
        /> */}
      </Box>

      {/* Content */}
      <VStack gap={4} textAlign="center" px={4} zIndex={4} maxW="900px">
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          color="white"
          mb={4}
        >
          WE MAKE INSURANCE EASY!
        </Heading>

        <Text fontSize={{ base: "lg", md: "2xl" }} color="whiteAlpha.900">
          Need Insurance?
        </Text>

        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="semibold"
          color="yellow.300"
          mb={2}
        >
          Ask Me - I CAN HELP!
        </Text>

        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="whiteAlpha.800"
          maxW="650px"
        >
          Transforming insurance accessibility in Kenya. Everyone deserves
          access to the insurance covers they need.
        </Text>

        {/* Buttons */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={4}
          justify="center"
          mt={4}
        >
          <Button
            size="lg"
            colorScheme="yellow"
            onClick={() => scrollToSection("contact")}
            fontSize="lg"
            px={8}
          >
            <ArrowRight /> Get a Quote
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("services")}
            fontSize="lg"
            px={8}
            borderColor="whiteAlpha.600"
            color="whiteAlpha.900"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            Our Services
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Hero;
