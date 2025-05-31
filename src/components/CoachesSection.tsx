import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";

const coaches = [
  {
    name: "Chris Stapley",
    bio: "Specializes in technique and endurance training.",
    photo: "/coach1.jpg",
  },
];

const CoachesSection = () => (
  <Box id="coach" py={20} px={6} maxW="600px" mx="auto">
    <Heading fontFamily="Raleway, sans-serif" mb={8} textAlign="center">
      Meet Our Coach
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 1 }}>
      {coaches.map(({ name, bio, photo }) => (
        <VStack
          key={name}
          borderWidth="1px"
          borderRadius="md"
          p={6}
          align="center"
        >
          <Image
            borderRadius="full"
            boxSize="150px"
            src={photo}
            alt={name}
            objectFit="cover"
          />
          <Heading fontFamily="Raleway, sans-serif" size="md">
            {name}
          </Heading>
          <Text fontFamily="Roboto Slab, serif" textAlign="center">
            {bio}
          </Text>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default CoachesSection;
