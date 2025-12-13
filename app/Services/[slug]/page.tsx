import { CTAsection } from "@/components/Services";
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
    <Box
      as="section"
      bgGradient="to-r"
      gradientFrom="#000000ff"
      gradientTo="#510101ff"
      color={"white"}
    >
      {" "}
      <VStack gap={8} align="stretch" marginX={marginX} my={12}>
        <Box
          position="relative"
          w="100%"
          aspectRatio={16 / 9}
          borderRadius="12px"
          overflow="hidden"
        >
          <Image
            src={service.image || "/images/default-service.jpeg"}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </Box>

        <VStack align="start" gap={4} my={10}>
          <Heading as="h1" size="2xl" color="brand.500">
            {service.title}
          </Heading>
          <Text fontSize="lg" lineHeight="tall">
            {service.description}
          </Text>
        </VStack>

        {service.includes && (
          <Box
            bg="gray.50"
            p={6}
            borderRadius="lg"
            borderLeft="4px solid"
            color={"black"}
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
        {service.details && (
          <VStack align="stretch" gap={6}>
            <Heading size="lg" color={"white"}>
              Service Breakdown
            </Heading>

            {service.details.map((detail, idx) => (
              <Box
                key={idx}
                bg="white"
                p={6}
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
              >
                <Heading
                  size="xl"
                  color={"black"}
                  mb={2}
                  fontFamily={"cursive"}
                >
                  {detail.name}
                </Heading>

                <Text fontWeight="semibold" color="gray.800">
                  Value Proposition
                </Text>
                <Text mb={3} color="gray.700">
                  {detail.valueProposition}
                </Text>

                <Text fontWeight="semibold" color="gray.800">
                  Importance
                </Text>
                <Text color="gray.700">{detail.importance}</Text>
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
      <CTAsection />
    </Box>
  );
}
