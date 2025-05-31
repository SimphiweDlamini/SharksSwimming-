import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  HStack,
  Icon,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => (
  <Box
    id="contact"
    py={20}
    px={6}
    maxW="600px"
    mx="auto"
    bg="gray.50"
    _dark={{ bg: "gray.900" }} // dark mode background
    borderRadius="md"
    boxShadow="md"
    textAlign="center"
  >
    <Heading
      fontFamily="Raleway, sans-serif"
      mb={6}
      color="gray.800"
      _dark={{ color: "gray.100" }}
    >
      Contact Us
    </Heading>
    <VStack align="start" color="gray.700" _dark={{ color: "gray.300" }}>
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
          _dark={{ color: "teal.300" }}
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
