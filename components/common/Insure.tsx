import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import React from "react";

const Insure = () => {
  return (
    <Box
      bgGradient="to-r"
      gradientFrom={"#000000ff"}
      gradientTo={"#e60000ff"}
      py={{ base: 12, md: 20 }}
      px={4}
      textAlign="center"
      fontFamily="Poppins"
    >
      {/* Button as link */}

      <Link href="#" target="_blank" _hover={{ textDecoration: "none" }}>
        <Button
          bg={"#000000ff"}
          color="white"
          fontWeight="bold"
          fontSize={{ base: "md", md: "xl" }}
          px={10}
          py={8}
          borderRadius="xl"
          mb={8}
          _hover={{ bg: "#e60000ff" }}
          fontFamily="Poppins"
        >
          Start Insuring With Purpose
        </Button>
      </Link>

      {/* Heading */}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="extrabold"
        color="white"
        mb={4}
        fontFamily="Poppins"
      >
        Investing for everything it’s worth
      </Heading>

      {/* Description */}
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="gray.200"
        fontFamily="Poppins"
      >
        Whether you are saving for smaller moments or the big ones... <br />
        we are here for you
      </Text>
    </Box>
  );
};

export default Insure;
