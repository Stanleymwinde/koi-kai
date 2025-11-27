"use client";

import { Box, VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";

const HeroS: React.FC = () => {
  return (
    <Box
      position="relative"
      w="100%"
      h={{ base: "60vh", sm: "75vh", md: "100vh" }}
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgImage="url('/images/cu.jpeg')"

        bgSize="cover"
        bgPos="center"
        zIndex={0}
      />

      {/* Black overlay for better text contrast */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.45)"
        zIndex={1}
      />
      {/* Hero Content */}
      <VStack
        position="relative"
        zIndex={2}
        h="100%"
        justify={{ base: "flex-end", sm: "center", md: "center" }} // push down on mobile
        align="center"
        gap={{ base: 3, md: 4 }}
        textAlign="center"
        px={{ base: 4, sm: 6, md: 8 }}
        pb={{ base: 10, sm: 0 }} // extra bottom padding for mobile
        color="white"
        fontFamily="Poppins"
      >
        <Heading
          fontSize={{ base: "xl", sm: "2xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          textAlign="center"
          color="#FFFFFF"
          letterSpacing="tight"
          lineHeight="shorter"
          textShadow="0 2px 8px rgba(0, 0, 0, 0.5)"
          mb={4}
        >
         Contact Us
        </Heading>

        <Text
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          maxW={{ base: "90%", md: "600px" }}
          lineHeight="tall"
          mb={8}
          textShadow="0 1px 4px rgba(0, 0, 0, 0.4)"
          opacity={0.95}
        >
         Have questions about our insurance plans? Our team is here to help. Get in touch with us today. We look forward to assisting you!
        </Text>

        {/* Buttons: stacked on mobile */}
        <HStack
          gap={4}
          mt={4}
          flexDirection={{ base: "column", sm: "row" }}
          w={{ base: "full", sm: "auto" }}
        >
          <Button
            color="white"
            w={{ base: "full", sm: "auto" }}
            bg="black"
            _hover={{ bg: "#cc0000", transform: "translateY(-2px)", boxShadow: "0 8px 16px rgba(230, 0, 0, 0.3)" }}
            _active={{ transform: "translateY(0)" }}
            size={{ base: "md", sm: "lg" }}
            py={{ base: 3, sm: 4 }}
            px={{ base: 6, sm: 8 }}
            borderRadius="lg"
            fontWeight="semibold"
            letterSpacing="wide"
            transition="all 0.3s ease"
            onClick={() => {
              const section = document.getElementById("section2");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get in Touch
          </Button>

        </HStack>
      </VStack>
    </Box>
  );
};

export default HeroS;