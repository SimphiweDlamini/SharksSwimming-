import { Box, Heading, SimpleGrid, Image, Container } from "@chakra-ui/react";
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
      <Helmet>
        <title>Gallery - Sharks Swimming Club Eswatini</title>
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
            fontFamily="Raleway, sans-serif"
            mb={8}
            textAlign="center"
            color={color}
          >
            Gallery
          </Heading>
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
    </>
  );
};

export default GallerySection;
