import { Box, Heading, Text, VStack, Spacer } from "@chakra-ui/react";
import "@fontsource/raleway/400.css"; // Import the regular weight for heading
import "@fontsource/roboto-slab/400.css"; // Import the regular weight for body
import { useEffect, useState } from "react";

const images = [
  "/swim1.jpg",
  "/swim2.jpg",
  "/swim3.jpg",
  "/swim4.jpg",
  "/swim5.jpg",
  "/swim6.jpg",
];

const HomeSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="home"
      minH="100vh"
      bgImage={`url(${images[bgIndex]})`}
      //bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
      transition="background-image 1s ease-in-out"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(0, 0, 0, 0.4)", // dark overlay for text readability
        zIndex: 0,
      }}
    >
      <VStack
        maxW="1200px"
        textAlign="center"
        //spacing={6}
        zIndex={1}
        position="relative"
      >
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontFamily="Raleway, sans-serif"
        >
          Welcome to Sharks Swimming Club Eswatini
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontFamily="Roboto Slab, serif"
        >
          Dive into excellence with our expert coaching and vibrant community.
        </Text>
      </VStack>
    </Box>
  );
};

export default HomeSection;
