import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";

const images = [
  "/swim1.jpg",
  "/swim2.jpg",
  "/swim3.jpg",
  "/swim4.jpg",
  "/swim5.jpg",
  "/swim6.jpg",
];

const GallerySection = () => (
  <Box id="gallery" py={20} px={6} maxW="1000px" mx="auto">
    <Heading fontFamily="Raleway, sans-serif" mb={8} textAlign="center">
      Gallery
    </Heading>
    <SimpleGrid columnGap={3} rowGap={2} columns={{ base: 1, sm: 2, md: 3 }}>
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
  </Box>
);

export default GallerySection;
