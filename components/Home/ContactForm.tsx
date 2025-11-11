"use client";
import {
  Button,
  Field,
  Fieldset,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Stack>
      <Heading fontSize="xl">Leave us a message</Heading>
      <Stack>
        <Field.Root>
          <Field.Label>Full Name</Field.Label>
          <Input
            className="custom-input"
            type="text"
            placeholder="Your full name"
          />
        </Field.Root>
        <Fieldset.Content>
          <Field.Label>Email</Field.Label>
          <Input
            type="email"
            className="custom-input"
            placeholder="Your email address"
          />
          <Field.Root>
            <Field.Label>Subject</Field.Label>
            <Input
              type="text"
              className="custom-input"
              placeholder="Subject**"
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Message</Field.Label>
            <Textarea className="custom-input" placeholder="Your full name" />
          </Field.Root>{" "}
        </Fieldset.Content>
        <Button
          bg="purple.500"
          color="brand.white"
          _hover={{
            bg: "gray.700",
          }}
        >
          Send Message
        </Button>
      </Stack>
    </Stack>
  );
};

export default ContactForm;
