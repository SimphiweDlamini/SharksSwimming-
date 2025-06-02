import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  HStack,
  Icon,
  Container,
  Spacer,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const ContactSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#2D3748" : "#EDF2F7";
  const color = theme === "dark" ? "#CBD5E0" : "#2D3748";

  return (
    <>
      <section id="contact" aria-labelledby="contact-heading">
        <Helmet>
          <title>Contact Us - Sharks Swimming Club Eswatini</title>
          <meta
            name="description"
            content="Contact Sharks Swimming Club Eswatini for membership, training, or event inquiries."
          />
        </Helmet>

        <Box
          id="contact"
          py={20}
          px={6}
          //maxW="600px"
          mx="auto"
          bg={bg}
          color={color}
          // bg="gray.50"
          // _dark={{ bg: "gray.900" }} // dark mode background
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
        >
          <Container maxW="600px" px={6}></Container>
          <Heading
            fontFamily="Raleway, sans-serif"
            mb={6}
            color="gray.800"
            _dark={{ color: "gray.100" }}
          >
            Contact Us
          </Heading>
          <VStack
            alignItems="center"
            color="gray.700"
            _dark={{ color: "gray.300" }}
          >
            <HStack>
              <Icon as={FaPhone} color="teal.500" boxSize={5} />
              <Spacer />
              <Text fontSize="lg">+268 7647 0463</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} color="teal.500" boxSize={5} />
              <Spacer />
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
              <Spacer />
              <Text fontSize="lg">
                123 Ocean Drive, Cape Town, South Africa
              </Text>
            </HStack>
          </VStack>
        </Box>
      </section>
    </>
  );
};

export default ContactSection;
