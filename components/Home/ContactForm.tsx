"use client";
import {
  Button,
  Field,
  Heading,
  Input,
  Portal,
  Select,
  Stack,
  Textarea,
  createListCollection,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Stack
      w="full"
      border="1px solid"
      borderColor="gray.200"
      p={8}
      borderRadius="xl"
      boxShadow="lg"
      bg="white"
    >
      <Heading fontSize="2xl" mb={6} color="gray.800">
        Request a Quote
      </Heading>

      <Stack gap={4}>
        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="medium" color="gray.700">
            Full Name
          </Field.Label>
          <Input
            type="text"
            placeholder="John Doe"
            borderColor="gray.300"
            _focus={{
              borderColor: "#114180",
              boxShadow: "0 0 0 1px #114180",
            }}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="medium" color="gray.700">
            Email
          </Field.Label>
          <Input
            type="email"
            placeholder="john@example.com"
            borderColor="gray.300"
            _focus={{
              borderColor: "#114180",
              boxShadow: "0 0 0 1px #114180",
            }}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="medium" color="gray.700">
            Phone
          </Field.Label>
          <Input
            type="tel"
            placeholder="+254 7XX XXX XXX"
            borderColor="gray.300"
            _focus={{
              borderColor: "#114180",
              boxShadow: "0 0 0 1px #114180",
            }}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="medium" color="gray.700">
            Insurance Type
          </Field.Label>
          <Select.Root collection={insuranceTypes} size="md">
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select insurance type" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {insuranceTypes.items.map((insurance) => (
                    <Select.Item item={insurance} key={insurance.value}>
                      {insurance.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="medium" color="gray.700">
            Message
          </Field.Label>
          <Textarea
            placeholder="Tell us about your insurance needs..."
            rows={4}
            borderColor="gray.300"
            _focus={{
              borderColor: "#114180",
              boxShadow: "0 0 0 1px #114180",
            }}
          />
        </Field.Root>

        <Button
          bg="#114180"
          color="white"
          size="lg"
          fontSize="md"
          fontWeight="semibold"
          _hover={{
            bg: "#0d3366",
            transform: "translateY(-1px)",
          }}
          _active={{
            bg: "#0a284d",
          }}
          transition="all 0.2s"
        >
          Send Message
        </Button>
      </Stack>
    </Stack>
  );
};

const insuranceTypes = createListCollection({
  items: [
    { label: "Health Insurance", value: "health" },
    { label: "Auto Insurance", value: "auto" },
    { label: "Home Insurance", value: "home" },
    { label: "Life Insurance", value: "life" },
    { label: "Business Insurance", value: "business" },
    { label: "Travel Insurance", value: "travel" },
  ],
});

export default ContactForm;
