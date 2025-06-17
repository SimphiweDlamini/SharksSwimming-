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
  // Spacer is not needed with justifyContent="space-between" on parent
} from "@chakra-ui/react";
// Keeping Accordion and Menu imports for future flexibility, even if not used in this exact solution
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useTheme as useNextTheme } from "next-themes";

interface Section {
  id: string;
  label: string;
  subsections?: { id: string; label: string }[];
}

interface NavbarProps {
  sections: Section[];
}

const NAVBAR_HEIGHT = 72; // px, adjust if needed

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const { theme, setTheme } = useNextTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const yOffset = -NAVBAR_HEIGHT;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      // Update URL hash
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", `#${id}`);
      }
    }
    setIsOpen(false); // Close mobile menu on navigation
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
        height={`${NAVBAR_HEIGHT}px`}
      >
        <Flex
          maxW="1400px"
          mx="auto"
          py={4}
          px={6}
          align="center"
          justifyContent="space-between" // Crucial for distributing space
          height="100%"
          gap={{ base: 4, md: 6 }} // Keep gap between major sections
        >
          {/* Logo and Title */}
          <HStack
            cursor="pointer"
            onClick={() => handleScroll("home")}
            flexShrink={0} // Prevents shrinking below content
            // Let the text overflow handle its length
            // minWidth="content" might also be used here
          >
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
              flexShrink={1} // Allow the text container to shrink
              minWidth={0} // Allows the text content to overflow with ellipsis
              fontWeight="bold"
              fontSize={{ base: "xs", md: "sm", lg: "xl" }}
              fontFamily="Raleway, sans-serif"
              color="green.900"
              whiteSpace="nowrap" // Keep text on one line
              overflow="hidden" // Hide overflowing text
              textOverflow="ellipsis" // Add ellipsis for hidden text
              ml={2}
              paddingRight={3}
            >
              Sharks Swimming Club Eswatini
            </Box>
          </HStack>

          {/* Desktop Navigation Links Container */}
          {/* This Flex will grow to take available space and be scrollable */}
          <Flex
            flexGrow={1} // Allow this container to take up available space
            flexShrink={1} // Allow it to shrink
            minWidth={0} // Critical: Allows this flex item to shrink below its content's intrinsic width, enabling overflow
            display={{ base: "none", md: "flex" }}
            align="center"
            // justifyContent="flex-end" // Not needed here, as parent justifyContent handles distribution
            overflowX="auto" // Enable horizontal scrolling for this specific Flex
            whiteSpace="nowrap" // Keep links on one line
            py={1} // Small vertical padding for potential scrollbar
            pr={4} // Padding on the right so the last link isn't cut off by the dark mode button
            css={{
              "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for WebKit
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              // Optionally add some padding-left if you want space from the logo when scrolled left
              // paddingLeft: '1rem',
            }}
          >
            {/* HStack for the actual links to manage their spacing */}
            <HStack py={4}>
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
                  flexShrink={0} // Important: Prevent individual links from shrinking
                  px={2}
                  py={1}
                >
                  {label}
                </Link>
              ))}
            </HStack>
          </Flex>

          {/* Dark Mode Button - always visible on desktop */}
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            colorScheme="teal"
            ml={{ base: 0, md: 4 }} // Margin left to separate from the scrollable links/logo
            flexShrink={0} // Prevent shrinking
            display={{ base: "none", md: "block" }} // Only show on desktop
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>

          {/* Hamburger Icon for Mobile */}
          <IconButton
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            display={{ base: "flex", md: "none" }}
            onClick={toggleMenu}
            bg="green.700"
            color="white"
            _hover={{ bg: "green.800" }}
            ml={{ base: 4, md: 0 }} // Ensure spacing from logo on mobile
            flexShrink={0}
          >
            {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </IconButton>
        </Flex>
      </Box>

      {/* Mobile Menu rendered as fixed overlay */}
      {isOpen && (
        <Box
          bg="green.300"
          px={6}
          pb={4}
          pt={`${NAVBAR_HEIGHT}px`}
          display={{ md: "none" }}
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height={`calc(100vh - ${NAVBAR_HEIGHT}px)`}
          zIndex="1500"
          overflowY="auto"
        >
          {/* Close button at top right of mobile menu (inside overlay) */}
          <Flex justify="flex-end" mb={4} pr={0}>
            <IconButton
              aria-label="Close menu"
              size="lg"
              variant="ghost"
              color="green.900"
              bg="transparent"
              _hover={{ bg: "green.100" }}
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose size={28} />
            </IconButton>
          </Flex>
          <VStack align="flex-start" px={0} py={2}>
            {sections.map(({ id, label }) => (
              <Link
                as="a"
                href={`#${id}`}
                color="green.900"
                key={id}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(id);
                  setIsOpen(false);
                }}
                fontWeight="medium"
                fontFamily="Roboto Slab, serif"
                fontSize="lg"
                _hover={{ color: "white", bg: "green.400" }}
                px={4}
                py={3}
                borderRadius="md"
                w="100%"
                display="block"
                textAlign="left"
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
              mt={4}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </VStack>
        </Box>
      )}
    </nav>
  );
};

export default Navbar;
