import { Box, Heading, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";

const AboutSection = () => (
  <Box id="about" py={20} px={6} maxW="800px" mx="auto">
    <Heading fontFamily="Raleway, sans-serif" mb={4}>
      About Us
    </Heading>
    <Text fontFamily="Roboto Slab, serif" fontSize="lg" lineHeight="tall">
      Sharks Swimming Club is dedicated to nurturing swimmers of all ages and
      skill levels. Founded in 2005, we pride ourselves on fostering a
      supportive and competitive environment where every swimmer can thrive.
    </Text>
  </Box>
);

export default AboutSection;
