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

const programs = [
  {
    title: "Beginner Program",
    description:
      "Learn basic swimming techniques and water safety in a fun environment.",
  },
  {
    title: "Intermediate Program",
    description:
      "Improve your strokes, endurance, and introduce competitive swimming.",
  },
  {
    title: "Advanced Program",
    description:
      "Train with our elite coaches to compete at local and national levels.",
  },
];

const ProgramsSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#2D3748" : "#EDF2F7";
  const color = theme === "dark" ? "#CBD5E0" : "#2D3748";
  return (
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
        <Heading fontFamily="Raleway, sans-serif" mb={8} textAlign="center">
          Our Programs
        </Heading>
        <SimpleGrid columnGap={3} columns={{ base: 1, md: 3 }}>
          {programs.map(({ title, description }) => (
            <VStack
              key={title}
              p={6}
              borderWidth="1px"
              borderRadius="md"
              align="start"
              bg={theme === "dark" ? "#1A202C" : "white"}
            >
              <Heading color={color} fontFamily="Raleway, sans-serif" size="md">
                {title}
              </Heading>
              <Text color={color} fontFamily="Roboto Slab, serif">
                {description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProgramsSection;
