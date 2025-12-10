"use client";

import { MarginX, services } from "@/utils/constants";
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
  Link,
} from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";
import { Heart, Car, Users, Briefcase, Shield, TrendingUp } from "lucide-react";
import { useColorMode } from "../ui/color-mode";
import { FaHelmetSafety } from "react-icons/fa6";
import { info } from "console";

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
                    {srv.description}
                  </Text>

                  <Box as="ol" gap={1}>
                    {srv.includes.map((item, idx) => (
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
                <Link
                  href={`/Services/${srv.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <Box position="absolute" bottom="20px" left="20px">
                    <Button variant="solid" colorScheme="yellow">
                      Read More
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardBody>
          </Card.Root>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
