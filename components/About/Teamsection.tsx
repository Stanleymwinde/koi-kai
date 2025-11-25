"use client";

import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { TeamMemberCard } from "@/components/About";

const TeamSection: React.FC = () => {
  return (
    <Box
      id="section2"
      bg="gray.50"
      pt={{ base: 6, md: 10 }}
      pb={{ base: 10, md: 16 }}
    >
      <Container maxW="8xl" textAlign="center">
        {/* Section Heading */}
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          mb={{ base: 2, md: 4 }}
          fontFamily="poppins"
          color="#043a7b"
        >
          Meet Our Team
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.600"
          mb={{ base: 8, md: 12 }}
          fontWeight="medium"
          lineHeight="tall"
          textAlign="center"
          fontFamily="poppins"
        >
          Our dedicated professionals bring expertise, passion, and integrity to
          every client relationship.
        </Text>

        {/* Board Section */}
        <Box mb={{ base: 8, md: 16 }}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            gap={{ base: 6, md: 10 }}
            justifyItems="center"
          >
            <TeamMemberCard
              name="Priscilla Ngirichi"
              title="Chief Executive Officer"
              image="/images/Kui-bw.jpg"
              linkedin="#"
            />
            <TeamMemberCard
              name="Priscilla Ngirichi"
              title="Chief Executive Officer"
              image="/images/DEE.png"
              linkedin="#"
            />
            <TeamMemberCard
              name="John Smith"
              title="Head of Operations"
              image="/images/CEE.png"
              linkedin="https://www.linkedin.com/in/pius-muchiri-cfa-0619392a/"
            />
            <TeamMemberCard
              name="Mary Johnson"
              title="Client Relations Manager"
              image="/images/BEE.png"
              linkedin="#"
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
