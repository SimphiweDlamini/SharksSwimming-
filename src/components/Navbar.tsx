import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  Image,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Collapse } from "@chakra-ui/transition";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useTheme as useNextTheme } from "next-themes";

interface NavbarProps {
  sections: { id: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const { theme, setTheme } = useNextTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.location.hash = id;
    }
    setIsOpen(false);
  };

  return (
    <nav aria-label="Main navigation">
      <Box
        position="fixed"
        width="100%"
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
          {/* Logo and Title */}
          <HStack cursor="pointer" onClick={() => handleScroll("home")}>
            <Image
              src="/Sharks_logo_up.png"
              alt="Sharks Swimming Club Logo"
              borderRadius="md"
              objectFit="fill"
              boxShadow="md"
              maxH="40px"
              w="40px"
            />
            <Box
              fontWeight="bold"
              fontSize={{ base: "md", md: "xl" }}
              fontFamily="Raleway, sans-serif"
              color="green.900"
            >
              Sharks Swimming Club Eswatini
            </Box>
          </HStack>

          {/* Desktop Links */}
          <Flex gap={6} display={{ base: "none", md: "flex" }} align="center">
            {sections.map(({ id, label }) => (
              <Link
                as="a"
                href={`#${id}`}
                color="green.900"
                key={id}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(id);
                }}
                cursor="pointer"
                fontWeight="medium"
                fontFamily="Roboto Slab, serif"
                _hover={{ color: "blue.500" }}
              >
                {label}
              </Link>
            ))}
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              colorScheme="teal"
              ml={2}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </Flex>

          {/* Hamburger Icon for Mobile */}
          <IconButton
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            display={{ base: "flex", md: "none" }}
            onClick={toggleMenu}
            bg="green.700"
            color="white"
            _hover={{ bg: "green.800" }}
          >
            {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </IconButton>
        </Flex>

        {/* Mobile Menu */}
        <Collapse in={isOpen} animateOpacity>
          <Box bg="green.300" px={6} pb={4} display={{ md: "none" }}>
            <VStack align="flex-start">
              {sections.map(({ id, label }) => (
                <Link
                  as="a"
                  href={`#${id}`}
                  color="green.900"
                  key={id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(id);
                  }}
                  fontWeight="medium"
                  fontFamily="Roboto Slab, serif"
                  fontSize="lg"
                  _hover={{ color: "blue.500" }}
                >
                  {label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsOpen(false);
                }}
                colorScheme="teal"
                width="100%"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </VStack>
          </Box>
        </Collapse>
      </Box>
    </nav>
  );
};

export default Navbar;
