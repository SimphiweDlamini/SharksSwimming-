import { Box, Heading, Container, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const TeachersSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#2D3748" : "#EDF2F7";
  const color = theme === "dark" ? "#CBD5E0" : "#2D3748";

  return (
    <>
      <section id="teacher" aria-labelledby="teacher-heading">
        <Helmet>
          <meta
            name="description"
            content="Check the Sharks Swimming Club Eswatini training for upcoming teachers of Swimming."
          />
        </Helmet>

        <Box
          id="teacher"
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
              Teacher's Swimming Course's
            </Heading>
            <Text paddingBottom={5} fontSize="lg">
              Coach Chris has been running the '
              <strong>Elementary Swim Course</strong>' in eSwatini for over 25
              years. Many of today's swim teacher's and coaches have at some
              time been tutored by him. This course is aimed at those club's,
              school's , individuals who want to{" "}
              <strong>learn how to teach swimming</strong>. This course is
              hosted at Sharks Swim Club pool, and is recognised by the{" "}
              <strong>Eswatini Swimming Association</strong>.
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default TeachersSection;
