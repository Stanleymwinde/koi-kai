"use client";

import { Box, VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Box
      position="relative"
      w="100%"
      h={{ base: "70vh", sm: "80vh", md: "100vh" }}
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgImage="url('/images/hero-bg.jpg')" 
        bgSize="cover"
        bgPos="center"
        zIndex={0}
      />

      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0,0,0,0.45)"
        zIndex={1}
      />

      {/* Hero Content */}
      <VStack
        position="relative"
        zIndex={2}
        h="100%"
        justify={{ base: "flex-end", sm: "center", md: "center" }}
        align="flex-start"
        gap={{ base: 3, md: 4 }}
        textAlign="left"
        px={{ base: 4, sm: 6, md: 12 }}
        pb={{ base: 12, sm: 0 }}
        color="white"
        fontFamily="Poppins"
        maxW={{ base: "100%", md: "60%" }}
      >
         <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          color="#FFFFFF"
          textAlign="center"
          fontFamily="poppins"
        >
          Protecting What Matters Most
        </Heading>

        <Text
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          maxW={{ base: "100%", md: "520px" }}
        >
          From health to business assets, we provide comprehensive and reliable
          insurance solutions tailored to your needs.
        </Text>

        {/* Buttons */}
        <HStack
          gap={4}
          mt={4}
          flexDirection={{ base: "column", sm: "row" }}
          w={{ base: "full", sm: "auto" }}
        >
          <Button
            bg="#e60000ff"
            color="white"
            _hover={{ bg: "#000000ff" }}
            w={{ base: "full", sm: "auto" }}
            size={{ base: "md", sm: "lg" }}
            py={{ base: 2, sm: 4 }}
            onClick={() => {
              const section = document.getElementById("services");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Our Services
          </Button>

          <Button
            bg="#000000ff"
            color="white"
            border="1px solid #ffffff"
            w={{ base: "full", sm: "auto" }}
            size={{ base: "md", sm: "lg" }}
            py={{ base: 2, sm: 4 }}
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Talk to an Advisor
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Hero;
