import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Image,
  Text,
  Container,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const coaches = [
  {
    name: "Chris Stapley",
    bio: "Specializes in technique and endurance training.",
    photo: "/coach1.jpg",
  },
];

const CoachesSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#2D3748" : "#EDF2F7";
  const color = theme === "dark" ? "#CBD5E0" : "#2D3748";
  return (
    <>
      <section id="coach" aria-labelledby="coaches-heading">
        <Helmet>
          <meta
            name="description"
            content="Meet the experienced coach for Sharks Swimming Club Eswatini."
          />
        </Helmet>

        <Box id="coach" py={20} px={6} mx="auto" bg={bg} color={color}>
          <Container maxW="600px" px={6}>
            <Heading
              as="h2"
              fontFamily="Raleway, sans-serif"
              mb={8}
              textAlign="center"
            >
              Meet Our Coach
            </Heading>
            <Text paddingBottom={4} fontSize="lg">
              Years of experience teaching{" "}
              <strong>swimming lessons in Eswatini</strong>. Dedicated to
              helping each swimmer reach their full potential in a safe and
              supportive environment.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 1 }}>
              {coaches.map(({ name, bio, photo }) => (
                <VStack
                  key={name}
                  borderWidth="1px"
                  borderRadius="md"
                  p={6}
                  align="center"
                  bg={theme === "dark" ? "#1A202C" : "white"}
                >
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={photo}
                    alt={name}
                    objectFit="cover"
                    objectPosition="left"
                  />
                  <Heading
                    color={color}
                    fontFamily="Raleway, sans-serif"
                    size="md"
                  >
                    {name}
                  </Heading>
                  <Text
                    color={color}
                    fontFamily="Roboto Slab, serif"
                    textAlign="center"
                  >
                    {bio}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default CoachesSection;
