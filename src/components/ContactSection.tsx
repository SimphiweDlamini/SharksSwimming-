import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => (
  <Box
    id="contact"
    py={20}
    px={6}
    maxW="600px"
    mx="auto"
    bg="gray.50"
    borderRadius="md"
    boxShadow="md"
    textAlign="center"
  >
    <Heading mb={6}>Contact Us</Heading>
    <VStack align="start">
      <HStack>
        <Icon as={FaPhone} color="teal.500" boxSize={5} />
        <Text fontSize="lg">+268 7647 0463</Text>
      </HStack>
      <HStack>
        <Icon as={FaEnvelope} color="teal.500" boxSize={5} />
        <Link
          href="mailto:stapleychris67@gmail.com"
          fontSize="lg"
          color="teal.600"
          _hover={{ textDecoration: "underline" }}
        >
          stapleychris67@gmail.com
        </Link>
      </HStack>
      <HStack>
        <Icon as={FaMapMarkerAlt} color="teal.500" boxSize={5} />
        <Text fontSize="lg">123 Ocean Drive, Cape Town, South Africa</Text>
      </HStack>
    </VStack>
  </Box>
);

export default ContactSection;
