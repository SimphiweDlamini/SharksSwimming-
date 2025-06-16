import { Box, Heading, Container, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const OpenWaterSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  return (
    <>
      <section id="openwater" aria-labelledby="openwater-heading">
        <Helmet>
          <meta
            name="description"
            content="Check the Sharks Swimming Club Eswatini Open Water Activities and Events."
          />
        </Helmet>

        <Box
          id="openwater"
          py={20}
          px={6}
          //maxW="600px"
          mx="auto"
          bg={bg}
          color={color}
        >
          <Container maxW="600px" px={6}>
            <Heading
              as="h2"
              fontFamily="Raleway, sans-serif"
              mb={6}
              textAlign="center"
            >
              Open Water Swimming
            </Heading>
            <Text paddingBottom={5} fontSize="lg">
              Shark's Coach Chris has over 15 years experience in both training
              for and competing in open water events from South Africa to
              Australia, Mozambique to Malawi. Luphohlo dam located 15 minutes
              from Mbabane is the ideal place for open water swimming.
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default OpenWaterSection;
