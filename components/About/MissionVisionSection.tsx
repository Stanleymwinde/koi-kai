"use client";

import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Circle,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { missionVisionData } from "@/utils/constants";

const MissionVisionSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState(missionVisionData[0]);
  const circleSize = useBreakpointValue({
    base: "16px",
    sm: "20px",
    md: "24px",
  });

  return (
    <Box
      id="section-mission"
      fontFamily="'Poppins', sans-serif"
      pt={{ base: 10, md: 16 }} // RAISED SECTION (was 8,12)
      pb={{ base: 12, md: 20 }}
      px={{ base: 6, md: 20 }}
      bg="white"
      w="100%"
    >
      {/* Section Heading */}
      <VStack gap={3} mb={{ base: 4, md: 6 }}>
        {" "}
        {/* REDUCED GAP TO RAISE CONTENT */}
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          color="black"
          textAlign="center"
          fontFamily="poppins"
        >
          Our Mission & Vision
        </Heading>
        {/* Subheading */}
        <Text
          textAlign="center"
          maxW="700px"
          color="gray.600"
          fontSize={{ base: "lg", md: "xl" }}
          mt={2}
          fontFamily="poppins"
        >
          Guiding everything we do with purpose, clarity, and commitment.
        </Text>
      </VStack>

      {/* Content Container */}
      <Box bg="#FFFFFF" py={{ base: 6, md: 12 }} w="100%">
        {" "}
        {/* MOVED UP SLIGHTLY */}
        <Box
          bgGradient={"to-r"}
          gradientFrom={"#000000ff"}
          gradientTo={"#e60000ff"}
          p={{ base: 4, md: 8 }}
          borderRadius="2xl"
          boxShadow="lg"
          maxW="100%"
          mx="auto"
        >
          {/* Tabs */}
          <HStack justify="space-evenly" px={{ base: 2, md: 6 }} mb={10}>
            {missionVisionData.map((item) => (
              <VStack
                key={item.id}
                gap={2}
                cursor="pointer"
                onClick={() => setActiveItem(item)}
              >
                <Circle
                  size={circleSize}
                  bg={activeItem.id === item.id ? "#e60000ff" : "white"}
                  border="2px solid white"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "scale(1.2)",
                    bg: "#e60000ff",
                  }}
                />
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "14px", md: "18px" }}
                  color="white"
                  fontFamily="poppins"
                >
                  {item.title}
                </Text>
              </VStack>
            ))}
          </HStack>

          {/* Active item content */}
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gap={6}
            px={{ base: 2, md: 6 }}
          >
            {/* Left side text */}
            <Box flex={1}>
              <Text
                fontSize={{ base: "md", md: "20px" }}
                color="whiteAlpha.900"
                fontWeight="bold"
                mb={3}
                textTransform="uppercase"
                fontFamily="poppins"
              >
                {activeItem.title}
              </Text>

              <Box
                fontSize={{ base: "16px", md: "18px" }}
                color="whiteAlpha.900"
                lineHeight="2"
              >
                {activeItem.description.map((para, idx) => (
                  <Text key={idx} mb={4} fontFamily="poppins">
                    {para}
                  </Text>
                ))}
              </Box>
            </Box>

            {/* Right side image */}
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                borderRadius="xl"
                w="100%"
                h="auto"
                objectFit="cover"
                boxShadow="lg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MissionVisionSection;
