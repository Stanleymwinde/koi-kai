import { marginX } from "@/utils/constants";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Kui = () => {
  return (
    <>
      <Box pt={20} pb={20} textAlign="center" marginX={marginX}>
        <Heading fontSize={"4xl"} color={"black"} py={4}>
          Proffesional Profile
        </Heading>
        <Text
          fontSize={"lg"}
          color={"gray.600"}
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
          fontStyle="italic"
        >
          Priscilla Ngirichi - Principal Officer - Kai Insurance Agency
        </Text>

        <Grid templateColumns="1fr 1fr 1fr" gap={6} alignItems="center">
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Image
              src="/images/Koi.jpeg"
              alt="Left"
              width={400}
              height={300}
              style={{
                objectFit: "cover",
              }}
            />
          </GridItem>
          <GridItem>
            <Text lineHeight={"2rem"} fontSize={"16px"} color={"black"}>
              A seasoned Insurance Consultant with 10+ years’ experience in
              insurance advisory, risk management, compliance, and client
              portfolio leadership. Recognized for delivering high-integrity,
              client-focused solutions across Individual, SME, Corporate, and
              Hospitality sectors. Skilled in insurance tendering, compliance
              preparation, proposal development, documentation review, and
              contract execution. Valued for strong stakeholder engagement,
              accurate claims oversight, and consistently ethical, timely
              service. Trusted by clients for strategic guidance, efficient
              claims management, and unwavering professionalism.
            </Text>
          </GridItem>
          <GridItem>
            <Image
              src="/images/policies.jpeg"
              alt="Right"
              width={400}
              height={300}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Kui;
