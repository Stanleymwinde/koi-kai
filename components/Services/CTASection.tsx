"use client";

import { Box, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";

const CTASection: React.FC = () => {
  return (
    <Box
      w="100%"
      h={{ base: "380px", md: "450px", lg: "500px" }} // Reduced height
      px={{ base: 6, md: 12 }}
      bgImage="url('/images/ct5.jpeg')"
      bgSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      borderRadius="0"
      overflow="hidden"
      display="flex"          // Centers content vertically
      alignItems="center"     // Centers vertically
      justifyContent="center" // Centers horizontally
    >
      {/* Overlay */}
      <Box
        position="absolute"
        inset="0"
        bg="rgba(0, 0, 0, 0.55)"
        backdropFilter="blur(6px)"
      />

      <VStack
        position="relative"
        maxW="700px"
        mx="auto"
        gap={6}
        textAlign="center"
        color="white"
      >
        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
          Ready to Get Covered?
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
          Take the first step towards comprehensive protection. Our expert
          advisors are ready to help you find the perfect insurance solution.
        </Text>

        <HStack gap={{ base: 4, md: 6 }} pt={2} flexWrap="wrap" justify="center">
          <Button
            px={8}
            py={6}
            bg="#e60000ff"
            _hover={{ bg: "#000000ff" }}
            color="white"
            fontSize="md"
            borderRadius="lg"
            boxShadow="lg"
          >
            Get a Free Quote
          </Button>

          <Button
            px={8}
            py={6}
            bg="#000000ff"
            color="white"
            _hover={{ bg: "#e60000ff" }}
            fontSize="md"
            borderRadius="lg"
            boxShadow="lg"
            variant="outline"
          >
            Talk to an Advisor
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CTASection;
