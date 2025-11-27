"use client";

import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every interaction, ensuring transparency and trust in all our work.",
  },
  {
    title: "Client Focus",
    description:
      "Our clients are at the heart of everything we do, and we work tirelessly to deliver solutions that meet their unique needs.",
  },
  {
    title: "Competence",
    description:
      "We help our clients prepare for the unexpected by offering robust coverage and reliable risk management strategies.",
  },
  {
    title: "Expertise",
    description:
      "Our team combines years of industry experience with innovative thinking to provide top-tier insurance services.",
  },
];

const CoreValuesSection = () => {
  return (
    <Box
      pb={{ base: 12, md: 20 }} // keep nice bottom spacing
      px={{ base: 6, md: 20 }}
      bg="white"
      fontFamily="'Poppins', sans-serif"
    >
      {/* Heading */}
      <VStack gap={4} mb={{ base: 10, md: 16 }}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          color="black"
          textAlign="center"
          fontFamily="poppins"
        >
          Our Core Values
        </Heading>

        <Text
          textAlign="center"
          maxW="700px"
          color="gray.600"
          fontSize={{ base: "lg", md: "xl" }}
          fontFamily="poppins"
        >
          The foundation of Kai Insurance is built on these values that guide
          how we serve our clients every day.
        </Text>
      </VStack>

      {/* Values Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={{ base: 6, md: 10 }}>
        {coreValues.map((value, i) => (
          <Box
            key={i}
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            background="linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
            boxShadow="#e60000ff"
            border="1px solid"
            borderColor="gray.100"
            position="relative"
            overflow="hidden"
            transition="all 0.35s ease"
            _hover={{
              transform: "translateY(-8px) scale(1.02)",
              boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.12)",
              borderColor: "#e60000ff",
            }}
          >
            {/* Accent top bar */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="5px"
              bg="linear-gradient(90deg, #e41919ff, #f00707ff)"
              borderTopRadius="2xl"
            />

            {/* Subtle gradient glow */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="radial-gradient(circle at top right, rgba(236, 18, 18, 0.12), transparent 60%)"
              pointerEvents="none"
            />

            {/* Content */}
            <Text
              fontWeight="bold"
              fontSize={{ base: "lg", md: "xl" }}
              mb={3}
              color="#0A2233"
              fontFamily="poppins"
            >
              {value.title}
            </Text>

            <Text
              color="gray.600"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="1.75"
              fontFamily="poppins"
            >
              {value.description}
            </Text>

            {/* Hover glow border */}
            <Box
              position="absolute"
              inset="0"
              borderRadius="2xl"
              border="2px solid transparent"
              transition="all 0.35s ease"
              _groupHover={{
                borderColor: "rgba(239, 16, 16, 1)",
              }}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CoreValuesSection;
