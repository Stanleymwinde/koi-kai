import { MarginX, TeamMates } from "@/utils/constants";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

const Team = () => {
  return (
    <Box as={"section"} py={8}>
      <Box marginX={MarginX}>
        <Box textAlign={"center"}>
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            my={8}
            fontWeight="bold"
          >
            Meet Our Team
          </Heading>
          <Text fontSize="lg" mb={16} color={"gray.600"}>
            Experienced professionals dedicated to your insurance needs.
          </Text>
        </Box>
        <Flex flexWrap="wrap" justifyContent="center" gap={{ base: 8, md: 4 }}>
          {(TeamMates as any[]).map((member, index) => (
            <Card.Root
              key={index}
              overflow="hidden"
              w={{ base: "260px", md: "300px" }} // fixed width for uniformity
              minH="200px" // equal card height
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              mx="auto"
              boxShadow="lg"
              borderRadius="2xl"
              p={4}
              bg="white"
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                objectFit="cover"
                borderRadius="full"
                boxSize="100px"
                mx="auto"
                mt={4}
              />

              <Card.Body
                gap="2"
                textAlign="center"
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Card.Title fontWeight="bold" color={"black"}>
                  {member.name}
                </Card.Title>
                <Card.Description color="gray.600">
                  {member.role}
                </Card.Description>
              </Card.Body>

              <Card.Footer
                textAlign="center"
                color="gray.600"
                fontSize="xs"
                mb={4}
              >
                {member.qualifications?.length ? (
                  <Box as="ul" listStyleType="circle" pl={4} textAlign="left">
                    {member.qualifications.map((q: string, i: number) => (
                      <Box as="li" key={i}>
                        {q}
                      </Box>
                    ))}
                  </Box>
                ) : null}
              </Card.Footer>
            </Card.Root>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Team;
