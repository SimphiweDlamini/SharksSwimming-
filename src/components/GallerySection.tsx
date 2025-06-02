import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Container,
  Text,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const images = [
  "/swim1.jpg",
  "/swim2.jpg",
  "/swim3.jpg",
  "/swim4.jpg",
  "/swim5.jpg",
  "/swim6.jpg",
];

const GallerySection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";
  return (
    <>
      <section id="gallery" aria-labelledby="gallery-heading">
        <Helmet>
          <meta
            name="description"
            content="View photos of our swimmers, events, and training sessions at Sharks Swimming Club Eswatini."
          />
        </Helmet>

        <Box
          id="gallery"
          py={20}
          px={6}
          //maxW="1000px"
          mx="auto"
          bg={bg}
          color={color}
        >
          <Container maxW="1000px" px={6}>
            <Heading
              as="h2"
              fontFamily="Raleway, sans-serif"
              mb={8}
              textAlign="center"
              color={color}
            >
              Gallery
            </Heading>
            <Text paddingBottom={4} fontSize="lg">
              Explore photos from our swimming lessons, competitions, and
              community events in Eswatini. See our swimmers in action and get
              inspired to join Sharks Swimming Club!
            </Text>
            <SimpleGrid
              columnGap={3}
              rowGap={2}
              columns={{ base: 1, sm: 2, md: 3 }}
            >
              {images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  borderRadius="md"
                  objectFit="cover"
                  boxShadow="md"
                  maxH="200px"
                  w="100%"
                />
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default GallerySection;
