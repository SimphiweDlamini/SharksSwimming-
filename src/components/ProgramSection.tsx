import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const programs = [
  {
    title: "Beginner Program",
    description:
      "Learn basic swimming techniques and water safety in a fun environment.",
  },
  {
    title: "Intermediate Program",
    description:
      "Improve your strokes, endurance, and introduction to competitive swimming.",
  },
  {
    title: "Advanced Program",
    description:
      "Train with our elite coach to compete at local and International level.",
  },
];

const ProgramsSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";
  return (
    <>
      <section id="programs" aria-labelledby="programs-heading">
        <Helmet>
          <meta
            name="description"
            content="Explore our swimming programs for all ages and skill levels in Eswatini"
          />
        </Helmet>

        <Box
          id="programs"
          py={20}
          px={6}
          //maxW="900px"
          mx="auto"
          bg={bg}
          color={color}
        >
          <Container maxW="900px" px={6}>
            <Heading
              as="h2"
              fontFamily="Raleway, sans-serif"
              mb={8}
              textAlign="center"
            >
              Our Swimming Programs
            </Heading>
            <Text paddingBottom={3} fontSize="lg">
              We offer a range of swimming programs in Eswatini, including
              beginner classes, advanced training, and competitive squads.
              Whether you are looking for{" "}
              <strong>swimming lessons for children</strong>, adult classes, or
              elite coaching, Sharks Swimming Club has a program for you.
            </Text>
            <SimpleGrid
              paddingBottom={10}
              columnGap={3}
              rowGap={2}
              columns={{ base: 1, md: 3 }}
            >
              {programs.map(({ title, description }) => (
                <VStack
                  key={title}
                  p={6}
                  borderWidth="1px"
                  borderRadius="md"
                  align="start"
                  bg={theme === "dark" ? "#2D3748" : "#EDF2F7"}
                >
                  <Heading
                    color={theme === "dark" ? "#CBD5E0" : "#2D3748"}
                    fontFamily="Raleway, sans-serif"
                    size="md"
                  >
                    {title}
                  </Heading>
                  <Text color={color} fontFamily="Roboto Slab, serif">
                    {description}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
            <Text
              paddingTop={5}
              fontSize="lg"
              bg={theme === "dark" ? "teal.900" : "teal.100"}
              color={theme === "dark" ? "teal.200" : "teal.800"}
              p={4}
              borderRadius="md"
              fontWeight="medium"
              boxShadow="sm"
              lineHeight="1.6"
              display="flex"
              alignItems="center"
              gap={3}
              borderLeft="4px solid"
              borderColor={theme === "dark" ? "teal.300" : "teal.500"}
            >
              <Box as="span" fontSize="2xl" aria-hidden="true">
                🏊‍♂️
              </Box>
              Lesson's are on offer Monday - Saturdays, and classes cater for
              all age groups and skill levels. Days and time's can be arranged
              to fit all, making it easy for everyone to join and improve their
              swimming ability
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default ProgramsSection;
