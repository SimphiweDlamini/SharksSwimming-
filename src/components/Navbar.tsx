import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { useTheme as useNextTheme } from "next-themes";
import React from "react";

interface NavbarProps {
  sections: { id: string; label: string }[];
}
const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const { theme, setTheme } = useNextTheme();
  const bg = theme === "dark" ? "#1A202C" : "#FFFFFF";
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box position="sticky" top="0" bg={bg} zIndex="1000" boxShadow="md">
      <Flex
        maxW="1200px"
        mx="auto"
        py={4}
        px={6}
        align="center"
        justify="space-between"
      >
        <Box
          fontWeight="bold"
          fontSize="xl"
          cursor="pointer"
          onClick={() => handleScroll("hero")}
        >
          Sharks Swimming Club
        </Box>
        <Flex gap={6}>
          {sections.map(({ id, label }) => (
            <Link
              key={id}
              onClick={() => handleScroll(id)}
              cursor="pointer"
              fontWeight="medium"
              _hover={{ color: "teal.500" }}
            >
              {label}
            </Link>
          ))}
        </Flex>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          colorScheme="teal"
          ml={4}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
