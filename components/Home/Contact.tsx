"use client";
import { contactsData, MarginX } from "@/utils/constants";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactDetails = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={8}
      my="4rem"
      marginX={MarginX}
      alignItems="center"
    >
      <Stack gap="1rem">
        <Heading fontSize="xl">Send Direct Message</Heading>
        {contactsData.map((d, i) => (
          <Flex
            key={i}
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            gap={4}
            align="center"
            bgGradient={`linear(to-r,primary.200, purple.200)`}
            color="brand.black"
            transition="background-color 0.3s"
            _hover={{
              bg: "brand.black",
              color: "brand.white",
            }}
          >
            <Stack
              data-aos="fade-right"
              p={3}
              bg="brand.white"
              h="fit-content"
              borderRadius="full"
            >
              <Box as={d.icon} color="brand.black" boxSize={7} />
            </Stack>
            <Stack data-aos="fade-right" data-aos-delay={i * 80}>
              <Heading fontSize="lg">{d.title}</Heading>
              <Link href={d.link}>
                <Text fontSize="lg">{d.label}</Text>
              </Link>
            </Stack>
          </Flex>
        ))}
      </Stack>
      <ContactForm />
    </SimpleGrid>
  );
};

export default ContactDetails;
