"use client";

import {
  Box,
  Text,
  Heading,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiBadgeCheck, BiLineChart } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";

const features = [
  {
    icon: <BsShieldCheck size={28} />,
    title: "Experienced Advisors",
    description:
      "A knowledgeable team dedicated to guiding you through every step.",
  },
  {
    icon: <BiBadgeCheck size={28} />,
    title: "Reliable Support",
    description:
      "Swift communication and responsive assistance when you need it most.",
  },
  {
    icon: <FaUniversity size={28} />,
    title: "Streamlined Claims",
    description:
      "Fast, transparent, and efficient claims processing.",
  },
  {
    icon: <BiLineChart size={28} />,
    title: "Strong Partnerships",
    description:
      "Works with top insurers to provide secure, affordable coverage options.",
  },
];

export default function WhyChooseUs() {
  return (

    <Box
      bgGradient={"to-r"}
      gradientFrom={"#000000ff"}
      gradientTo={"#e60000ff"}
      color="white"
      py={10}
      px={6}
      textAlign="center"
      mt={20}
      mb={16}
      fontFamily="Poppins"
    >
    
      {/* Heading + Subtext */}
      <VStack gap={6}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="extrabold"
          color="white"
        >
          Why Choose Kai Insurance Agency
        </Heading>

        <Text maxW="3xl" fontSize="md" color="gray.200">
          Your trusted partner in securing what matters most.
        </Text>
      </VStack>

      {/* Feature Grid */}
      <SimpleGrid
        columns={[1, 2, 4]}
        gap={10}
        mt={12}
        justifyContent="center"
      >
        {features.map((feature, index) => (
          <Box key={index} textAlign="center">
            <VStack gap={4}>
              <Box
                bg="rgba(255,255,255,0.1)"
                p={5}
                borderRadius="xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {feature.icon}
              </Box>

              <Text fontWeight="bold" fontSize="lg" color="white">
                {feature.title}
              </Text>

              <Text
                color="gray.300"
                fontSize="sm"
                maxW="250px"
                mx="auto"
                lineHeight="1.6"
              >
                {feature.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
