import { MarginX } from "@/utils/constants";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ValueProposition = () => {
  return (
    <Box as="section" id="value-proposition" my={8}>
      <Box
        bgGradient="to-r"
        gradientFrom={"green.50"}
        gradientTo={"green.100"}
        borderRadius="2xl"
        border="1px solid"
        borderColor="green.400"
        p={{ base: 6, md: 10 }}
        marginX={MarginX}
      >
        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color="green.600"
          mb={4}
        >
          Value Proposition
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          lineHeight="tall"
          mb={4}
        >
          What sets KAI Insurance Agency apart is our innovative, educative and
          solution-based approach as an intermediary; harnessing the power of
          great working relationships with underwriting partners to create a
          seamless, accessible, and efficient experience for our mutual clients.
        </Text>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          lineHeight="tall"
        >
          We are more than an insurance intermediary – we are a movement towards
          a knowledgeable and more connected client base.
        </Text>
      </Box>
    </Box>
  );
};

export default ValueProposition;
