import { Box, Container, Heading, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const AboutSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#2D3748" : "#EDF2F7";
  const color = theme === "dark" ? "#CBD5E0" : "#2D3748";

  return (
    <>
      <section id="about" aria-labelledby="about-heading">
        <Helmet>
          <meta
            name="description"
            content="Learn about Sharks Swimming Club's history, mission, and coaching team in Eswatini"
          />
        </Helmet>

        <Box
          id="about"
          py={20}
          px={6}
          mx="auto"
          bg={bg}
          color={color}
          width="100%"
        >
          <Container maxW="800px" px={6}>
            <Heading
              as="h2"
              fontSize="3xl"
              justifySelf="center"
              fontFamily="Raleway, sans-serif"
              mb={4}
            >
              About Sharks Swimming Club Eswatini
            </Heading>
            <Heading
              as="h3"
              justifySelf="center"
              fontFamily="Raleway, sans-serif"
              mb={4}
            >
              Profile
            </Heading>
            <Text
              fontFamily="Roboto Slab, serif"
              fontSize="lg"
              lineHeight="tall"
            >
              Founded in the early 1990's,{" "}
              <strong>Sharks swimming club </strong> is dedicated to nurturing
              both children and adults in the art of swimming. Our mission is to{" "}
              <strong>promote water safety and swimming</strong> as a life skill
              and competitive sport, offering coaching, safe heated facilities,
              and a welcoming environment for everyone interested in swimming
              lessons and keeping fit.
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default AboutSection;
