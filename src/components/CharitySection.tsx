import { Box, Heading, Container, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const CharitySection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  return (
    <>
      <section id="charity" aria-labelledby="charity-heading">
        <Helmet>
          <meta
            name="description"
            content="Check the Sharks Swimming Club Eswatini Community and Charity Events."
          />
        </Helmet>

        <Box
          id="charity"
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
              Community/Charity Development
            </Heading>
            <Text paddingBottom={5} fontSize="lg">
              Sharks club has initiated both charity and community events aimed
              at helping out those less fortunate in our society. These include
              kids coming to the pool for lessons as well as charity swims
              raising funds for OVC's, orphanages, SAWS etc. Giving back to and
              supporting other's is a strong ethos of Sharks Swimming Club.
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default CharitySection;
