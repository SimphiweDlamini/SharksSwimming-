import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" color="white" py={6} textAlign="center">
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Sharks Swimming Club Eswatini. All
        rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
