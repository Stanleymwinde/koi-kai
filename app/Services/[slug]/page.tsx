import { marginX, services } from "@/utils/constants";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return null;

  return (
    <VStack gap={8} align="stretch" marginX={marginX} my={12}>
      {/* {service.image && (
        <Box borderRadius="lg" overflow="hidden" boxShadow="md">
          <Image
            src={service.image}
            alt={service.title}
            layout="responsive"
            width={100}
            height={100}
            objectFit="contain"
          />
        </Box>
      )} */}
      <Box position={"relative"}>
        <Image
          style={{
            display: "block",
            margin: "0 auto",
            borderRadius: "12px",
            objectFit: "cover",
          }}
          src={service.image || "/images/default-service.jpeg"}
          alt={service.title}
          width={800}
          height={200}
          // style={{ width: "100%", height: "auto", borderRadius: "12px" }}
        />
      </Box>

      <VStack align="start" gap={4} my={10}>
        <Heading as="h1" size="2xl" color="brand.500">
          {service.title}
        </Heading>
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          {service.description}
        </Text>
      </VStack>

      {service.includes && (
        <Box
          bg="gray.50"
          p={6}
          borderRadius="lg"
          borderLeft="4px solid"
          borderColor="brand.500"
        >
          <Heading size="md" mb={4}>
            Coverage Includes
          </Heading>
          <VStack align="start" gap={2}>
            {service.includes.map((item) => (
              <Text key={item} fontSize="md" color="gray.700">
                ✓ {item}
              </Text>
            ))}
          </VStack>
        </Box>
      )}
    </VStack>
  );
}
