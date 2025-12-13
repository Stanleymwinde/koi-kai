import { marginX } from "@/utils/constants";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Kui = () => {
  return (
    <Box pt={20} pb={20} textAlign="center" marginX={marginX}>
      <Heading fontSize="4xl" color="black" py={4}>
        Professional Profile
      </Heading>

      <Text
        fontSize="lg"
        color="gray.600"
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
        fontStyle="italic"
        mb={10}
      >
        Priscilla Ngirichi - Principal Officer - Kai Insurance Agency
      </Text>

      <Grid
        templateColumns={{
          base: "1fr 1fr",
          md: "1fr 1fr 1fr",
        }}
        templateAreas={{
          base: `
            "left right"
            "text text"
          `,
          md: `"left text right"`,
        }}
        gap={6}
        alignItems="center"
      >
        {/* Left Image */}
        <GridItem area="left" display="flex" justifyContent="center">
          <Image
            src="/images/Koi.jpeg"
            alt="Priscilla Ngirichi"
            width={350}
            height={250}
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </GridItem>

        {/* Text */}
        <GridItem area="text" textAlign="center">
          <Text
            lineHeight="2rem"
            fontSize="16px"
            color="black"
            maxW="600px"
            mx="auto"
          >
            A seasoned Insurance Consultant with 10+ years’ experience in
            insurance advisory, risk management, compliance, and client
            portfolio leadership. Recognized for delivering high-integrity,
            client-focused solutions across Individual, SME, Corporate, and
            Hospitality sectors. Skilled in insurance tendering, compliance
            preparation, proposal development, documentation review, and
            contract execution. Valued for strong stakeholder engagement,
            accurate claims oversight, and consistently ethical, timely service.
            Trusted by clients for strategic guidance, efficient claims
            management, and unwavering professionalism.
          </Text>
        </GridItem>

        {/* Right Image */}
        <GridItem area="right" display="flex" justifyContent="center">
          <Image
            src="/images/policies.jpeg"
            alt="Insurance Policies"
            width={350}
            height={250}
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Kui;
