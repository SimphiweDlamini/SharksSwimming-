import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import "@fontsource/raleway/400.css"; // Import the regular weight for heading
import "@fontsource/roboto-slab/400.css"; // Import the regular weight for body
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const images = [
  "/swim1.jpg",
  "/swim2.jpg",
  "/swim3.jpg",
  "/swim4.jpg",
  "/swim5.jpg",
  "/swim6.jpg",
  "/swim7.jpg",
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
    <>
      <section id="home" aria-labelledby="home-heading">
        <Helmet>
          <title>
            Sharks Swimming Club Eswatini - Swim Lessons and Training
          </title>
          <meta
            name="description"
            content="Join Sharks Swimming Club Eswatini for lessons on how to swim,expert coaching, competitive training, and community development in swimming."
          />
          <meta property="og:title" content="Sharks Swimming Club Eswatini" />
          <meta
            property="og:description"
            content="Swimming club in Eswatini offering professional training for all ages and skill levels."
          />
          <meta property="og:image" content="/Sharks_logo_up.png" />
          <meta
            property="og:url"
            content="https://sharks-swimming-club.vercel.app"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

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
              as="h1"
            >
              Welcome to Sharks Swimming Club Eswatini
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontFamily="Roboto Slab, serif"
            >
              Welcome to <strong>Sharks Swim Club Eswatini</strong>! We provide{" "}
              <strong>swim lessons in Eswatini</strong> for all ages and
              abilities. Join our club to learn from a coach with over 30 years
              experience and become a confident swimmer in a supportive
              community
            </Text>
          </VStack>
        </Box>
      </section>
    </>
  );
};

export default HomeSection;
