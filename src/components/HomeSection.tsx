import { Box, Heading, Text, VStack, Spacer } from "@chakra-ui/react";
import "@fontsource/raleway/400.css"; // Import the regular weight for heading
import "@fontsource/roboto-slab/400.css"; // Import the regular weight for body

const HomeSection = () => (
  <Box
    id="home"
    minH="100vh"
    bg="green.400"
    color="green.900"
    display="flex"
    alignItems="center"
    justifyContent="center"
    px={6}
  >
    <VStack spaceX={12} maxW="1200px" textAlign="center">
      <Heading
        fontSize={{ base: "3xl", md: "5xl" }}
        fontFamily="Raleway, sans-serif"
      >
        Welcome to Sharks Swimming Club Eswatini
      </Heading>
      <Spacer />
      <Text fontSize={{ base: "md", md: "lg" }} fontFamily="Roboto Slab, serif">
        Dive into excellence with our expert coaching and vibrant community.
      </Text>
    </VStack>
  </Box>
);

export default HomeSection;
