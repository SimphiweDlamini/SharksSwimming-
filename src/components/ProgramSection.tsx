import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

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

const ProgramsSection = () => (
  <Box id="programs" py={20} px={6} maxW="900px" mx="auto">
    <Heading mb={8} textAlign="center">
      Our Programs
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }}>
      {programs.map(({ title, description }) => (
        <VStack
          key={title}
          p={6}
          borderWidth="1px"
          borderRadius="md"
          align="start"
        >
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default ProgramsSection;
