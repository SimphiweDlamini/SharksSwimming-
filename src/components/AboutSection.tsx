import { Box, Container, Heading, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const AboutSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  return (
    <>
      <section id="about" aria-labelledby="about-heading">
        <Helmet>
          <title>About Us - Sharks Swimming Club Eswatini</title>
          <meta
            name="description"
            content="Learn about Sharks Swimming Club's history, mission, and coaching team in Eswatini"
          />
        </Helmet>

        <Box
          id="about"
          py={20}
          px={6}
          //maxW="800px"
          mx="auto"
          bg={bg}
          color={color}
          width="100%"
        >
          <Container maxW="800px" px={6}>
            <Heading fontFamily="Raleway, sans-serif" mb={4}>
              About Us
            </Heading>
            <Text
              fontFamily="Roboto Slab, serif"
              fontSize="lg"
              lineHeight="tall"
            >
              Sharks Swimming Club is dedicated to nurturing swimmers of all
              ages and skill levels. Founded in 2005, we pride ourselves on
              fostering a supportive and competitive environment where every
              swimmer can thrive.
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default AboutSection;
