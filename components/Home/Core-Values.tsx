import { MarginX } from "@/utils/constants";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { AwardIcon, ShieldIcon, TargetIcon, UsersIcon } from "lucide-react";
import React from "react";

const CoreValues = () => {
  return (
    <Box as="section" id="core-values" my={2} marginX={MarginX}>
      <Box
        bg="gray.50"
        borderRadius="2xl"
        py={{ base: 10, md: 12 }}
        // px={{ base: 6, md: 12 }}
      >
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="center"
          mb={{ base: 8, md: 12 }}
          fontWeight="bold"
        >
          Core Values
        </Heading>

        <Grid
          templateColumns={{
            base: "1fr 1fr",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: 10, md: 6 }}
          placeItems="center"
        >
          {/* Competence */}
          <VStack gap={3}>
            <Box
              w={20}
              h={20}
              bg="gray.200"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <AwardIcon /> {/* replace with your icon */}
            </Box>
            <Text fontWeight="medium">Competence</Text>
          </VStack>

          {/* Client Focus */}
          <VStack gap={3}>
            <Box
              w={20}
              h={20}
              bg="gray.200"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <UsersIcon /> {/* replace with your icon */}
            </Box>
            <Text fontWeight="medium">Client Focus</Text>
          </VStack>

          {/* Expertise */}
          <VStack gap={3}>
            <Box
              w={20}
              h={20}
              bg="gray.200"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <TargetIcon /> {/* replace with your icon */}
            </Box>
            <Text fontWeight="medium">Expertise</Text>
          </VStack>

          {/* Integrity */}
          <VStack gap={3}>
            <Box
              w={20}
              h={20}
              bg="gray.200"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <ShieldIcon /> {/* replace with your icon */}
            </Box>
            <Text fontWeight="medium">Integrity</Text>
          </VStack>
        </Grid>
      </Box>
    </Box>
  );
};

export default CoreValues;
