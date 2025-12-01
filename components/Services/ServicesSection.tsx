"use client";

import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

import {
  FaHeart,
  FaCar,
  FaShieldAlt,
  FaBuilding,
  FaUsers,
  FaPiggyBank,
  FaHardHat,
} from "react-icons/fa";

const services = [
  {
    icon: FaHeart,
    title: "Medical Insurance",
    image: "/images/med.jpeg",
    description:
      "We offer flexible and comprehensive medical insurance plans that protect individuals, families, and organizations from unexpected healthcare costs. Our covers are designed to provide peace of mind with reliable access to quality medical services.",
    includes: ["Individual Medical Cover", "Group Medical Cover"],
  },
  {
    icon: FaCar,
    title: "Motor Vehicle Insurance",
    image: "/images/motor.jpg",
    description:
      "Whether for private or commercial use, our motor insurance plans safeguard your vehicle against accidents, theft, and unforeseen risks. Enjoy fast claims processing and dependable support whenever you're on the road.",
    includes: ["Private Motor", "Commercial Motor", "Special Motor Vehicles"],
  },
  {
    icon: FaShieldAlt,
    title: "WIBA & Employers' Liability",
    image: "/images/wiba.jpg",
    description:
      "Ensure the safety and well-being of your workforce with statutory and additional protections. Our WIBA and EL covers shield employers from financial liabilities arising from workplace injuries or occupational illnesses—helping you remain compliant and secure.",
    includes: null,
  },
  {
    icon: FaBuilding,
    title: "Business & Asset Insurance",
    image: "/images/business.jpeg",
    description:
      "Protect your business assets, property, and operations from risks that could interrupt your growth. Our business covers are designed for both SMEs and large enterprises, ensuring your investments remain secure.",
    includes: ["Fire & Special Perils", "Burglary", "All Risks", "Public Liability"],
  },
  {
    icon: FaUsers,
    title: "Life Insurance",
    image: "/images/life-ins.jpg",
    description:
      "Preserve your family's future with life insurance solutions built for long-term security. Whether you're planning for your child's education or ensuring loved ones are protected, we offer plans that grow and support your financial goals.",
    includes: ["Whole Life Cover", "Education Plans", "Family Protection"],
  },
  {
    icon: FaPiggyBank,
    title: "Pension Covers",
    image: "/images/pension.jpg",
    description:
      "Our pension solutions ensure you retire with confidence and dignity. Choose between regular income options or lump-sum benefits designed to support a comfortable life after work.",
    includes: null,
  },
  {
    icon: FaHardHat,
    title: "Contractors' All Risks",
    image: "/images/business.jpeg",
    description:
      "Secure your construction projects from start to finish. Our CAR cover protects against damage to works, machinery, and materials on-site while also covering third-party liabilities, ensuring your projects run smoothly and safely.",
    includes: null,
  },
];

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
          Comprehensive coverage solutions designed to protect what matters most to you.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={10}>
        {services.map((service, index) => (
          <Box
            key={index}
            borderRadius="2xl"
            p={8}
            boxShadow="md"
            bg="white"
            transition="all 0.35s ease"
            _hover={{
              transform: "translateY(-10px) scale(1.03)",
              boxShadow: "dark-lg",
            }}
          >
            <VStack gap={4} align="start">
              
              <Image
                src={service.image}
                alt={service.title}
                borderRadius="full"
                boxSize="70px"
                objectFit="cover"
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

              {/* Learn More Button */}
              <Button
                mt={4}
                bg="#e60000"
                color="white"
                borderRadius="full"
                px={6}
                py={2}
                fontSize="sm"
                _hover={{ bg: "#b80000" }}
              >
                Learn More
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServicesSection;
