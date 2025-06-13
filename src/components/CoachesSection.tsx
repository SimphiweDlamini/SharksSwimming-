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
    bio: "Sharks Coach With Over 30 Years Experience.",
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
          <Container maxW="900px" px={6}>
            <Heading
              as="h2"
              fontFamily="Raleway, sans-serif"
              mb={8}
              textAlign="center"
            >
              Meet Our Coach
            </Heading>
            <SimpleGrid
              maxW="600px"
              justifySelf="center"
              columns={{ base: 1, md: 1 }}
              paddingBottom={5}
            >
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
            <Text paddingBottom={4} fontSize="lg">
              With{" "}
              <strong>over 30 years of coaching and teaching experience</strong>
              , Chris has instructed adults and children of all ages and
              abilities. He represented eSwatini in swimming at the{" "}
              <strong>1986 Commonwealth Games</strong> and has{" "}
              <strong>never stopped competing</strong>, remaining active,
              especially in the 'Open Water' arena.
              <br />
              <br />
              Over the years, Sharks swimmers have thrived, competing in local
              and regional competitions, as well as global events like the{" "}
              <strong>
                Olympics, World Championships, Commonwealth Games, and
                All-Africa Games
              </strong>
              .
              <br />
              <br />
              In 1997, Coach Chris made a pivotal decision: to dedicate himself
              fully to teaching the sport he loves. That was{" "}
              <strong>28 years ago</strong>, and {""}
              <strong>
                countless children and adults have since benefited
              </strong>{" "}
              from his unwavering dedication and expertise.
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default CoachesSection;
