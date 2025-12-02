"use client";

import { MarginX } from "@/utils/constants";
import {
  Box,
  Grid,
  Heading,
  Text,
  VStack,
  Flex,
  List,
  ListItem,
  Card,
  CardBody,
  Image,
  Button,
} from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";
import { Heart, Car, Users, Briefcase, Shield, TrendingUp } from "lucide-react";
import { useColorMode } from "../ui/color-mode";
import { FaHelmetSafety } from "react-icons/fa6";

const services = [
  {
    image: "/images/health.jpeg",
    title: "Medical Insurance",
    desc: "Corporate, individual, and SME medical covers tailored to your needs.",
    icon: <Heart size={26} color="#1A365D" />,
    items: [
      "Corporate Medical Covers",
      "Individual Medical Covers",
      "SME Medical Covers",
    ],
  },
  {
    image: "/images/hero-bg2.jpeg",
    title: "Marine Insurance",
    desc: "Comprehensive marine insurance solutions for all your shipping needs.",
    icon: <Shield size={26} color="#1A365D" />,
    items: ["Cargo Insurance", "Hull Insurance", "Liability Insurance"],
  },
  {
    image: "/images/car.jpeg",
    title: "Motor Vehicle Insurance",
    desc: "Comprehensive coverage for all types of vehicles.",
    icon: <Car size={26} color="#1A365D" />,
    items: [
      "Motor Private Insurance",
      "Motor Commercial Insurance",
      "Special Types (Plant Machinery)",
    ],
  },
  {
    image: "/images/wiba.jpeg",
    title: "W.I.B.A & E.L Covers",
    desc: "Work Injury Benefits Act and Employer's Liability protection.",
    icon: <Users size={26} color="#1A365D" />,
    items: [
      "Cover against employment-related liabilities",
      "Comprehensive workplace protection",
    ],
  },
  {
    image: "/images/business.jpeg",
    title: "Business/Asset Insurance",
    desc: "Protect your business assets and operations.",
    icon: <Briefcase size={26} color="#1A365D" />,
    items: [
      "SME / Enterprise Covers",
      "Commercial Property Covers",
      "Office & Equipment Covers",
    ],
  },
  {
    image: "/images/life.jpeg",
    title: "Life Insurance",
    desc: "Secure your family's future with comprehensive life coverage.",
    icon: <Shield size={26} color="#1A365D" />,
    items: [
      "Term Life Insurance",
      "Education Policies",
      "Long-term Savings Plans",
    ],
  },
  {
    image: "/images/pension.jpeg",
    title: "Pension Covers",
    desc: "Plan for a secure retirement with our pension solutions.",
    icon: <TrendingUp size={26} color="#1A365D" />,
    items: [
      "Personal Pension Plans",
      "Corporate Pension Solutions",
      "Retirement Savings",
    ],
  },
  {
    image: "/images/contractors.jpeg",
    title: "Contractor All Risks",
    desc: "Comprehensivre coverage for construction projects and contract works.",
    icon: <FaHelmetSafety size={26} color="#1A365D" />,
    items: [
      "Contract Works Coverage",
      "Machinery & Materials",
      "Site Liabilities & Employee Protection",
    ],
  },
];

const Services = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      py={20}
      marginX={MarginX}
      id="services"
      bg={colorMode === "light" ? "#fafbfd" : "black"}
    >
      {/* Title */}
      <VStack gap={3} textAlign="center" mb={12}>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
          Our Services
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Comprehensive insurance solutions tailored to your unique needs
        </Text>
      </VStack>

      {/* GRID */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
      >
        {services.map((srv, i) => (
          <Card.Root
            key={i}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            shadow="sm"
            transition="0.2s"
            _hover={{
              shadow: "md",
              transform: "translateY(-4px)",
              cursor: "pointer",
            }}
          >
            <CardBody
              position="relative"
              overflow="hidden"
              minH={"350px"}
              borderRadius={"xl"}
            >
              {/* Background Image Layer */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                backgroundImage={`url(${srv.image})`}
                backgroundSize="cover"
                backgroundPosition="center"
                filter="blur(0.4px)"
                transform="scale(1.1)"
                zIndex={0}
              />

              {/* Dark Overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="blackAlpha.600"
                zIndex={0}
              />

              {/* Foreground Content */}
              <Box position="relative" zIndex={1} color="white" h="100%">
                <VStack align="start" gap={3} pb="60px">
                  <Heading fontSize="2xl" fontWeight="semibold">
                    {srv.title}
                  </Heading>

                  <Text fontSize="lg" opacity={0.8}>
                    {srv.desc}
                  </Text>

                  <Box as="ol" gap={1}>
                    {srv.items.map((item, idx) => (
                      <Box key={idx} display="flex" alignItems="center" gap={2}>
                        <CheckCircle color="green.300" />
                        <Text fontSize="lg" lineHeight="tall">
                          {item}
                        </Text>
                      </Box>
                    ))}
                  </Box>
                </VStack>

                {/* Bottom-left Button */}
                <Box position="absolute" bottom="20px" left="20px">
                  <Button variant="solid" colorScheme="yellow">
                    Read More
                  </Button>
                </Box>
              </Box>
            </CardBody>
          </Card.Root>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
