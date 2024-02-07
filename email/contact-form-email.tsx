import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black font-sans">
          <Container>
            <Section className="bg-white border-black my-10 p-8 rounded-md shadow-md">
              <Heading className="text-2xl font-bold mb-4">
                New Message from Contact Form
              </Heading>
              <Text className="text-gray-700">{message}</Text>
              <Hr className="my-4" />
              <Text className="text-gray-800">
                Sender's Email: {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
