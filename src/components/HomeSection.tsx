import { Box, Heading, Text, Button, VStack, Spacer } from "@chakra-ui/react";

const HomeSection = () => (
  <Box
    id="hero"
    minH="100vh"
    bg="blue.500"
    color="white"
    display="flex"
    alignItems="center"
    justifyContent="center"
    px={6}
  >
    <VStack spaceX={12} maxW="1200px" textAlign="center">
      <Heading fontSize={{ base: "3xl", md: "5xl" }}>
        Welcome to Sharks Swimming Club
      </Heading>
      <Spacer />
      <Text fontSize={{ base: "md", md: "lg" }}>
        Dive into excellence with our expert coaching and vibrant community.
      </Text>
      <Button colorScheme="teal" size="lg">
        Join Now
      </Button>
    </VStack>
  </Box>
);

export default HomeSection;
