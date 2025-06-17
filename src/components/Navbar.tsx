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
        height={`${NAVBAR_HEIGHT}px`}
      >
        <Flex
          maxW="1400px"
          mx="auto"
          py={4}
          px={6}
          align="center"
          justify="space-between"
          height="100%"
        >
          {/* Logo and Title */}
          <HStack
            cursor="pointer"
            onClick={() => handleScroll("home")}
            flexShrink={0}
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
              flexShrink={1}
              minWidth={0}
              fontWeight="bold"
              fontSize={{ base: "md", md: "sm", lg: "xl" }}
              fontFamily="Raleway, sans-serif"
              color="green.900"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              ml={2}
            >
              Sharks Swimming Club Eswatini
            </Box>
          </HStack>

          {/* Desktop Links with Dropdown */}
          <Flex
            gap={4}
            px={2}
            display={{ base: "none", md: "flex" }}
            align="center"
            position="relative"
            zIndex={1200}
            overflowX="auto"
            whiteSpace="nowrap"
            css={{
              /* Hide scrollbar for WebKit browsers */
              "&::-webkit-scrollbar": { display: "none" },
              /* Hide scrollbar for Firefox */
              scrollbarWidth: "none",
            }}
          >
            {sections.map(({ id, label, subsections }) =>
              subsections ? (
                <Box key={id} position="relative" flexShrink={0}>
                  <MenuRoot>
                    <MenuTrigger>
                      <Button
                        variant="ghost"
                        cursor="pointer"
                        fontWeight="medium"
                        fontFamily="Roboto Slab, serif"
                        color="green.900"
                        bg="transparent"
                        px={2}
                        py={1}
                        display="flex"
                        alignItems="center"
                        gap={1}
                        _hover={{
                          color: "blue.500",
                          bg: "transparent",
                          boxShadow: "none",
                        }}
                        _active={{
                          bg: "transparent",
                          boxShadow: "none",
                        }}
                        _focus={{
                          bg: "transparent",
                          boxShadow: "none",
                        }}
                      >
                        {label}
                        <HiChevronDown />
                      </Button>
                    </MenuTrigger>
                    <MenuContent
                      bg="white"
                      color="green.900"
                      boxShadow="lg"
                      borderRadius="md"
                      minW="180px"
                      zIndex={2000}
                      border="1px solid"
                      borderColor="green.100"
                      position="absolute"
                      top="100%"
                      left={0}
                      mt={2}
                    >
                      {subsections.map(({ id: subId, label: subLabel }) => (
                        <MenuItem
                          key={subId}
                          value={subId}
                          onSelect={() => handleScroll(subId)}
                          _hover={{ bg: "green.400", color: "white" }}
                          fontFamily="Roboto Slab, serif"
                          fontWeight="medium"
                          fontSize="md"
                          px={4}
                          py={2}
                          borderRadius="md"
                        >
                          {subLabel}
                        </MenuItem>
                      ))}
                    </MenuContent>
                  </MenuRoot>
                </Box>
              ) : (
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
                  flexShrink={0}
                >
                  {label}
                </Link>
              )
            )}
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              colorScheme="teal"
              ml={2}
              flexShrink={0}
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
            flexShrink={0}
          >
            {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </IconButton>
        </Flex>
      </Box>

      {/* Mobile Menu rendered as fixed overlay with close button */}
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
          {/* Close button at top right */}
          <Flex justify="flex-end" mb={2}>
            <IconButton
              aria-label="Close menu"
              size="lg"
              variant="ghost"
              color="green.900"
              bg="transparent"
              _hover={{ bg: "green.100" }}
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </IconButton>
          </Flex>
          <VStack align="flex-start" px={2}>
            <Accordion allowToggle width="100%">
              {sections.map(({ id, label, subsections }) =>
                subsections ? (
                  <AccordionItem key={id} border="none">
                    <h2>
                      <AccordionButton
                        px={0}
                        fontWeight="medium"
                        fontFamily="Roboto Slab, serif"
                        color="green.900"
                        _hover={{ color: "blue.500", bg: "green.100" }}
                        bg="transparent"
                      >
                        <Box flex="1" textAlign="left">
                          {label}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pl={4} pb={4}>
                      <VStack align="flex-start" px={1}>
                        {subsections.map(({ id: subId, label: subLabel }) => (
                          <Link
                            key={subId}
                            as="a"
                            href={`#${subId}`}
                            color="green.900"
                            onClick={(e) => {
                              e.preventDefault();
                              handleScroll(subId);
                              setIsOpen(false);
                            }}
                            fontWeight="medium"
                            fontFamily="Roboto Slab, serif"
                            fontSize="lg"
                            _hover={{ color: "white", bg: "green.400" }}
                            px={3}
                            py={2}
                            borderRadius="md"
                            w="100%"
                            display="block"
                          >
                            {subLabel}
                          </Link>
                        ))}
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                ) : (
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
                    px={3}
                    py={2}
                    borderRadius="md"
                    w="100%"
                    display="block"
                  >
                    {label}
                  </Link>
                )
              )}
            </Accordion>

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
      )}
    </nav>
  );
};

export default Navbar;
