import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";

const coaches = [
  {
    name: "Alice Johnson",
    bio: "Head Coach with 15 years of experience in competitive swimming.",
    photo: "/images/coaches/alice.jpg",
  },
  {
    name: "Mark Smith",
    bio: "Specializes in technique and endurance training.",
    photo: "/images/coaches/mark.jpg",
  },
  {
    name: "Sofia Lee",
    bio: "Youth program coordinator and former national swimmer.",
    photo: "/images/coaches/sofia.jpg",
  },
];

const CoachesSection = () => (
  <Box id="coach" py={20} px={6} maxW="900px" mx="auto">
    <Heading mb={8} textAlign="center">
      Meet Our Coaches
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }}>
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
          <Heading size="md">{name}</Heading>
          <Text textAlign="center">{bio}</Text>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default CoachesSection;
