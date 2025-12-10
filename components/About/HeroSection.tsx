"use client";

import { Box, VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";

const HeroSection: React.FC = () => {
  return (
    <Box
      position="relative"
      w="100%"
      minH={{ base: "85vh", sm: "90vh", md: "100vh" }}
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/images/about1-bg.jpeg')"
        bgSize="cover"
        // style={{
        //   backgroundPosition:{{ base: "top center", md: "center" }}
        //  }}
        backgroundPosition={{ base: "top center", md: "center" }} // ✅ prevents top cut
        zIndex={0}
      />

      {/* Overlay */}
      <Box position="absolute" inset={0} bg="rgba(2, 2, 2, 0.45)" zIndex={1} />

      {/* Content */}
      <VStack
        position="relative"
        zIndex={2}
        minH="100%"
        justify="center" // ✅ avoids overlap
        align="center"
        textAlign="center"
        px={{ base: 4, sm: 6, md: 10 }}
        color="white"
        fontFamily="Poppins"
        gap={{ base: 4, md: 6 }}
      >
        <Heading
          maxW="900px" // ✅ prevents text stretch
          fontSize={{ base: "xl", sm: "2xl", md: "5xl", lg: "6xl" }}
          lineHeight={{ base: "1.3", md: "1.15" }} // ✅ mobile-safe
          textShadow="0 2px 8px rgba(0,0,0,0.6)"
        >
          About KAI Insurance Agency
        </Heading>

        <Text
          maxW="650px"
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          lineHeight="tall"
          opacity={0.95}
          textShadow="0 1px 4px rgba(0,0,0,0.4)"
        >
          Dedicated to educating and empowering our clients with knowledge on
          insurance matters while offering solutions for all.
        </Text>

        {/* Buttons */}
        <HStack
          gap={4}
          flexDirection={{ base: "column", sm: "row" }}
          w={{ base: "full", sm: "auto" }}
          pt={{ base: 2, md: 4 }}
        >
          <Button
            w={{ base: "full", sm: "auto" }}
            bg="white"
            color="black"
            size={{ base: "md", sm: "lg" }}
            px={8}
            py={4}
            borderRadius="lg"
            fontWeight="semibold"
            transition="all 0.3s ease"
            _hover={{
              bg: "#cc0000",
              color: "white",
              transform: "translateY(-2px)",
            }}
            onClick={() =>
              document
                .getElementById("section2")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Meet Our Team
          </Button>

          <Button
            w={{ base: "full", sm: "auto" }}
            bg="#e60000"
            color="white"
            size={{ base: "md", sm: "lg" }}
            px={8}
            py={4}
            borderRadius="lg"
            fontWeight="semibold"
            transition="all 0.3s ease"
            _hover={{
              bg: "#cc0000",
              transform: "translateY(-2px)",
            }}
            onClick={() =>
              document
                .getElementById("section3")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HeroSection;
