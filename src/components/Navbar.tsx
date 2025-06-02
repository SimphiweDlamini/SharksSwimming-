import { Box, Flex, Link, Button, Image } from "@chakra-ui/react";
import { useTheme as useNextTheme } from "next-themes";
import React from "react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css"; // Import the regular weight for body

interface NavbarProps {
  sections: { id: string; label: string }[];
}
const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const { theme, setTheme } = useNextTheme();
  //const bg = theme === "dark" ? "#1A202C" : "#FFFFFF";
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav aria-label="Main navigation">
      <Box
        position="sticky"
        top="0"
        bg="green.400"
        zIndex="1000"
        boxShadow="md"
      >
        <Flex
          maxW="1200px"
          mx="auto"
          py={4}
          px={6}
          align="center"
          justify="space-between"
        >
          <Image
            src="/Sharks_logo_up.png"
            alt="default"
            borderRadius="md"
            objectFit="fill"
            boxShadow="md"
            onClick={() => handleScroll("home")}
            maxH="10%"
            w="10%"
          />
          <Box
            fontWeight="bold"
            fontSize="xl"
            fontFamily="Raleway, sans-serif"
            cursor="pointer"
            onClick={() => handleScroll("home")}
            color="green.900"
          >
            Sharks Swimming Club Eswatini
          </Box>
          <Flex gap={6}>
            {sections.map(({ id, label }) => (
              <Link
                as="a"
                href={`#${id}`}
                color="green.900"
                key={id}
                onClick={() => handleScroll(id)}
                cursor="pointer"
                fontWeight="medium"
                fontFamily="Roboto Slab, serif"
                _hover={{ color: "blue.500" }}
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
    </nav>
  );
};

export default Navbar;
