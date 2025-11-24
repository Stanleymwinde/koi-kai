"use client";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";

import { useColorMode } from "../ui/color-mode";
import { MarginX } from "@/utils/constants";
import { Eye, Target } from "lucide-react";

const About = () => {
  const { setColorMode, colorMode } = useColorMode();
  return (
    <Box marginX={MarginX} p={6} as="section" id="about" mt={2}>
      <Box textAlign="center">
        <Heading fontSize="4xl" fontWeight="bold">
          About KAI Insurance Agency
        </Heading>
        <Text mt={4} fontSize="md" lineHeight="tall">
          Dedicated to educating and empowering our clients with knowledge on
          insurance matters while offering solutions for all
        </Text>
      </Box>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={6}
        mt={6}
      >
        <Box
          _hover={{
            transform: "translateY(-6px)",
          }}
          transition="transform 0.2s ease"
          bgGradient="to-r"
          gradientFrom={"#000000ff"}
          gradientTo={"#e60000ff"}
          p={8} // consistent padding
          color={colorMode === "light" ? "white" : "black"}
          borderRadius="xl"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap={6}
        >
          <Eye size={50} />
          <Heading fontSize="3xl" fontWeight="semibold">
            Our Mission
          </Heading>
          <Text fontSize="md" lineHeight="tall">
            To provide accessible, reliable, and tailored insurance solutions
            that meet the unique needs of individuals and businesses in Kenya.
          </Text>
        </Box>

        <Box
          _hover={{
            transform: "translateY(-6px)",
          }}
          transition="transform 0.2s ease"
          bgGradient="to-r"
          gradientFrom={"#e60000ff"}
          gradientTo={"#000000ff"}
          p={10} // match padding
          color={colorMode === "light" ? "white" : "white"}
          borderRadius="xl"
          display="flex"
          flexDirection="column"
          gap={6}
          alignItems="flex-start"
        >
          <Target size={50} />
          <Heading fontSize="3xl" fontWeight="semibold">
            Our Vision
          </Heading>
          <Text fontSize="md" lineHeight="tall">
            To be the leading insurance agency in Kenya, recognized for our
            commitment to customer education, exceptional service, and
            innovative insurance solutions.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default About;
