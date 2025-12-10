import { FaqsData, marginX } from "@/utils/constants";
import { Accordion, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Faqs = () => {
  return (
    <Box marginX={marginX} py={8}>
      <Heading
        fontFamily="poppins"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        mb={10}
        textAlign="center"
        lineHeight={{ base: "short", md: "shorter", lg: "short" }}
        letterSpacing="tight"
      >
        Frequently Asked Questions
      </Heading>
      <Accordion.Root
        collapsible
        defaultValue={["a"]}
        bgGradient={"to-r"}
        gradientFrom={"#000000ff"}
        gradientTo={"#510101ff"}
        p={{ base: 4, md: 6 }}
        py={{ base: 6, md: 8 }}
        borderRadius="md"
      >
        {FaqsData.map((item, index) => (
          <Box mb={4} key={index}>
            <Accordion.Item value={item.value}>
              <Accordion.ItemTrigger>
                <Text
                  flex="1"
                  fontWeight="bold"
                  fontSize={"xl"}
                  color="white"
                  fontFamily={"poppins"}
                >
                  {item.title}
                </Text>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Text color="white" fontFamily={"cursive"}>
                    {item.text}
                  </Text>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Box>
        ))}
      </Accordion.Root>
    </Box>
  );
};

export default Faqs;
