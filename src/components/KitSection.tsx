import { Box, Heading, Container, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const KitSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  return (
    <>
      <section id="kit" aria-labelledby="kit-heading">
        <Helmet>
          <meta
            name="description"
            content="Check the Sharks Swimming Club Eswatini Kit and Uniform."
          />
        </Helmet>

        <Box
          id="kit"
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
              Kit and Uniform
            </Heading>
            <Text paddingBottom={5} fontSize="lg">
              Swim Caps, T-shirt's, Shorts, Long pants and Long Sleeve
              T-shirt's, Towels for Sharks Swim Club
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default KitSection;
