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
} from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";
import { Heart, Car, Users, Briefcase, Shield, TrendingUp } from "lucide-react";
import { useColorMode } from "../ui/color-mode";

const services = [
  {
    title: "Medical Insurance",
    desc: "Corporate, individual, and SME medical covers tailored to your needs.",
    icon: <Heart size={22} color="#1A365D" />,
    items: [
      "Corporate Medical Covers",
      "Individual Medical Covers",
      "SME Medical Covers",
    ],
  },
  {
    title: "Motor Vehicle Insurance",
    desc: "Comprehensive coverage for all types of vehicles.",
    icon: <Car size={22} color="#1A365D" />,
    items: [
      "Motor Private Insurance",
      "Motor Commercial Insurance",
      "Special Types (Plant Machinery)",
    ],
  },
  {
    title: "W.I.B.A & E.L Covers",
    desc: "Work Injury Benefits Act and Employer's Liability protection.",
    icon: <Users size={22} color="#1A365D" />,
    items: [
      "Cover against employment-related liabilities",
      "Comprehensive workplace protection",
    ],
  },
  {
    title: "Business/Asset Insurance",
    desc: "Protect your business assets and operations.",
    icon: <Briefcase size={22} color="#1A365D" />,
    items: [
      "SME / Enterprise Covers",
      "Commercial Property Covers",
      "Office & Equipment Covers",
    ],
  },
  {
    title: "Life Insurance",
    desc: "Secure your family's future with comprehensive life coverage.",
    icon: <Shield size={22} color="#1A365D" />,
    items: [
      "Term Life Insurance",
      "Education Policies",
      "Long-term Savings Plans",
    ],
  },
  {
    title: "Pension Covers",
    desc: "Plan for a secure retirement with our pension solutions.",
    icon: <TrendingUp size={22} color="#1A365D" />,
    items: [
      "Personal Pension Plans",
      "Corporate Pension Solutions",
      "Retirement Savings",
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
            <CardBody>
              <Flex
                bg="gray.100"
                w="48px"
                h="48px"
                borderRadius="md"
                align="center"
                justify="center"
                mb={4}
              >
                {srv.icon}
              </Flex>

              <VStack align="start" gap={3}>
                <Heading fontSize="xl" fontWeight="semibold">
                  {srv.title}
                </Heading>

                <Text color="gray.600" fontSize="sm">
                  {srv.desc}
                </Text>

                <Box as="ol" gap={1}>
                  {srv.items.map((item, idx) => (
                    <Box key={idx} display="flex" alignItems="center" gap={2}>
                      <CheckCircle color="green.400" />
                      <Text fontSize="sm" lineHeight={"tall"}>
                        {item}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </VStack>
            </CardBody>
          </Card.Root>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
