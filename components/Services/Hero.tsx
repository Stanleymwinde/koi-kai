"use client";

import { Box, VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Box
      position="relative"
      w="100%"
      minH={{ base: "60vh", md: "100vh" }}
      overflow="hidden"
      mt={{ base: 0, md: 18 }}
    >
      {/* Background Image */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/images/risk.jpeg')"
        bgSize="cover"
        backgroundPosition={{ base: "top center", md: "center" }}
        zIndex={0}
      />

      {/* Overlay */}
      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.45)" zIndex={1} />

      {/* Hero Content */}
      <VStack
        mt={4}
        position="relative"
        zIndex={2}
        minH="100%"
        justify={{ base: "flex-start", md: "center" }} // ✅ key fix
        align="center"
        px={{ base: 4, sm: 6, md: 12 }}
        pt={{ base: "38vh", sm: "34vh", md: 0 }} // ✅ pushes text DOWN on mobile
        gap={{ base: 4, md: 6 }}
        color="white"
        fontFamily="Poppins"
        maxW={{ base: "100%", md: "60%" }}
      >
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          lineHeight={{ base: "1.35", md: "1.15" }}
          maxW="640px"
        >
          Protecting What Matters Most
        </Heading>

        <Text
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          maxW="520px"
          opacity={0.95}
        >
          From health to business assets, we provide comprehensive and reliable
          insurance solutions tailored to your needs.
        </Text>

        {/* Buttons */}
        <HStack
          gap={4}
          flexDirection={{ base: "column", sm: "row" }}
          w={{ base: "full", sm: "auto" }}
          pt={{ base: 2, md: 4 }}
        >
          <Button
            bg="#e60000ff"
            color="white"
            w={{ base: "full", sm: "auto" }}
            size={{ base: "md", sm: "lg" }}
            py={4}
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Our Services
          </Button>

          <Button
            bg="#000000ff"
            color="white"
            border="1px solid #ffffff"
            w={{ base: "full", sm: "auto" }}
            size={{ base: "md", sm: "lg" }}
            py={4}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Talk to an Advisor
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Hero;
