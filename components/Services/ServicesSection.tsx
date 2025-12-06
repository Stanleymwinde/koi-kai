"use client";

import { services } from "@/utils/constants";
import { Box, SimpleGrid, VStack, Heading, Text, Link } from "@chakra-ui/react";

import {
  FaHeart,
  FaCar,
  FaShieldAlt,
  FaBuilding,
  FaUsers,
  FaPiggyBank,
  FaHardHat,
} from "react-icons/fa";

const ServicesSection = () => {
  return (
    <Box
      w="100%"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 10 }}
      bgGradient="linear(to-r, #000000ff, #e60000ff)"
      fontFamily="Poppins"
    >
      <VStack gap={4} textAlign="center" mb={12}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          color="black"
        >
          Our Services
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} maxW="700px" color="black">
          Comprehensive coverage solutions designed to protect what matters most
          to you.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={10}>
        {services.map((service, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="2xl"
            p={8}
            boxShadow="md"
            position="relative"
            overflow="hidden"
            transition="all 0.35s ease"
            _before={{
              content: '""',
              position: "absolute",
              inset: 0,
              bg: "linear-gradient(135deg, rgba(230,0,0,0.12), rgba(0,0,0,0.08))",
              opacity: 0,
              transition: "0.4s",
            }}
            _hover={{
              _before: { opacity: 1 },
              transform: "translateY(-10px) scale(1.03)",
              boxShadow: "dark-lg",
            }}
          >
            <VStack gap={4} align="start" position="relative" zIndex={2}>
              <Box
                as={service.icon}
                boxSize="50px"
                color="#e60000"
                p={3}
                borderRadius="full"
                bg="rgba(230,0,0,0.15)"
                transition="0.3s ease"
                _hover={{ bg: "#e60000", color: "white" }}
              />

              <Heading fontSize="xl" color="black">
                {service.title}
              </Heading>

              <Text fontSize="md" color="gray.700" lineHeight="1.6">
                {service.description}
              </Text>

              {service.includes && (
                <VStack align="start" gap={1} mt={2}>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray.600"
                    textTransform="uppercase"
                  >
                    Coverage Includes:
                  </Text>

                  {service.includes.map((item, i) => (
                    <Text
                      key={i}
                      fontSize="sm"
                      color="gray.700"
                      pl={4}
                      position="relative"
                      _before={{
                        content: '"•"',
                        position: "absolute",
                        left: 0,
                        color: "#e60000",
                        fontWeight: "bold",
                      }}
                    >
                      {item}
                    </Text>
                  ))}
                </VStack>
              )}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServicesSection;
