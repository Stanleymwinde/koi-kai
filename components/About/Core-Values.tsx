"use client";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";

import { useState } from "react";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every interaction, ensuring transparency and trust in all our work.",
    details: `At Kai Insurance Agency, integrity is the cornerstone of our business. We are unwavering in our commitment to doing what’s right—consistently, transparently, and ethically—regardless of pressure or personal gain.

What It Looks Like in Practice:
• Honesty in communication in all interactions
• Ethical decision-making even when it's hard
• Accountability and transparency
• Consistency between words and actions`,
  },
  {
    title: "Client Focus",
    description:
      "Our clients are at the heart of everything we do—every solution is tailored to their unique needs.",
    details: `Client focus means we prioritize understanding and responding to our clients' needs with care and dedication.

What It Looks Like in Practice:
• Active listening
• Timely responses
• Value-driven solutions
• Continuous improvement
• Professionalism & respect`,
  },
  {
    title: "Expertise",
    description:
      "Our team combines years of industry experience with innovative thinking to provide top-tier insurance services.",
    details: `We commit to mastery, attention to detail, collaboration, mentorship, and constant innovation.

What It Looks Like in Practice:
• Continued learning
• Data-driven decisions
• High standards of excellence`,
  },
  {
    title: "Risk Resilience",
    description:
      "We help our clients prepare for the unexpected with strong risk mitigation and recovery strategies.",
    details: `Risk resilience means embracing adaptability and guiding clients through uncertainty.

What It Looks Like in Practice:
• Proactive risk assessments
• Strong recovery strategies
• Agility during challenges`,
  },
];

const CoreValuesSection = () => {
  const { open, onOpen, onClose } = useDisclosure();

  const [selectedValue, setSelectedValue] = useState<any>(null);

  const handleOpen = (value: any) => {
    setSelectedValue(value);
    onOpen();
  };

  return (
    <Box
      pb={{ base: 12, md: 20 }}
      px={{ base: 6, md: 20 }}
      bg="white"
      fontFamily="'Poppins', sans-serif"
    >
      {/* Heading */}
      <VStack gap={4} mb={{ base: 10, md: 16 }}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          color="black"
          textAlign="center"
          fontFamily="poppins"
        >
          Our Core Values
        </Heading>

        <Text
          textAlign="center"
          maxW="700px"
          color="gray.600"
          fontSize={{ base: "lg", md: "xl" }}
          fontFamily="poppins"
        >
          The foundation of Kai Insurance is built on these values that guide
          how we serve our clients every day.
        </Text>
      </VStack>

      {/* Values Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={{ base: 6, md: 10 }}>
        {coreValues.map((value, i) => (
          <Box
            key={value.title ?? i}
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            background="linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
            border="1px solid"
            borderColor="gray.100"
            position="relative"
            overflow="hidden"
            transition="all 0.35s ease"
            _hover={{
              transform: "translateY(-8px) scale(1.02)",
              boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.12)",
              borderColor: "#e60000ff",
            }}
          >
            {/* Accent top bar */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="5px"
              bg="linear-gradient(90deg, #e41919ff, #f00707ff)"
              borderTopRadius="2xl"
            />

            {/* Glow */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="radial-gradient(circle at top right, rgba(236, 18, 18, 0.12), transparent 60%)"
              pointerEvents="none"
            />

            {/* Content */}
            <Text
              fontWeight="bold"
              fontSize={{ base: "lg", md: "xl" }}
              mb={3}
              color="#0A2233"
              fontFamily="poppins"
            >
              {value.title}
            </Text>

            <Text
              color="gray.600"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="1.75"
              fontFamily="poppins"
            >
              {value.description}
            </Text>

            <Button
              mt={4}
              size="sm"
              colorScheme="red"
              variant="outline"
              onClick={() => handleOpen(value)}
            >
              Read More
            </Button>
          </Box>
        ))}
      </SimpleGrid>
      {/* Modal */}
      <Modal isOpen={open} onClose={onClose} size="lg" isCentered>
        <ModalOverlay bg="blackAlpha.700" zIndex={1400} />
        <ModalContent bg="transparent" boxShadow="none" p={0} zIndex={1500}>
          {/* Gradient border wrapper */}
          <Box bgGradient="linear(to-r, #e60000, #000)" p="2px" borderRadius="xl">
            <Box bg="white" borderRadius="xl" p={{ base: 4, md: 6 }}>
              <ModalCloseButton />
              <ModalHeader fontFamily="poppins" fontWeight="bold" pt={2} pb={2}>
                {selectedValue?.title}
              </ModalHeader>
              <ModalBody>
                <Text
                  whiteSpace="pre-line"
                  fontSize="md"
                  color="gray.800"
                  lineHeight="1.8"
                  fontFamily="poppins"
                >
                  {selectedValue?.details ?? selectedValue?.description}
                </Text>
              </ModalBody>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CoreValuesSection;