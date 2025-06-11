import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Container,
  Text,
  IconButton,
  Dialog,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const images = [
  "/swim1.jpg",
  "/swim2.jpg",
  "/swim3.jpg",
  "/swim4.jpg",
  "/swim5.jpg",
  "/swim6.jpg",
  "/swim7.jpg",
];

const visibleImages = images.slice(0, 6); // Show first 3 images in grid

const GallerySection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const openImage = (idx: number) => {
    setSelectedIdx(idx);
    setOpen(true);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx((prev) => {
      if (prev === null) return 0;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIdx(null);
  };

  // Correct onOpenChange handler signature for Chakra UI v3 Dialog
  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
    if (!details.open) {
      setSelectedIdx(null);
    }
  };

  return (
    <>
      <section id="gallery" aria-labelledby="gallery-heading">
        <Helmet>
          <meta
            name="description"
            content="View photos of our swimmers, events, and training sessions at Sharks Swimming Club Eswatini."
          />
        </Helmet>

        <Box py={20} px={6} mx="auto" bg={bg} color={color}>
          <Container maxW="1000px" px={6}>
            <Heading
              as="h2"
              fontFamily="Raleway, sans-serif"
              mb={8}
              textAlign="center"
              color={color}
            >
              Gallery
            </Heading>
            <Text paddingBottom={4} fontSize="lg">
              Explore photos from our swimming lessons, competitions, and
              community events in Eswatini. See our swimmers in action and get
              inspired to join Sharks Swimming Club!
            </Text>
            <SimpleGrid
              columnGap={3}
              rowGap={2}
              columns={{ base: 1, sm: 2, md: 3 }}
            >
              {visibleImages.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  borderRadius="md"
                  objectFit="cover"
                  boxShadow="md"
                  maxH="200px"
                  w="100%"
                  cursor="pointer"
                  onClick={() => openImage(idx)}
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.03)" }}
                />
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        <Dialog.Root open={open} onOpenChange={handleOpenChange}>
          <DialogBackdrop />
          <DialogPositioner>
            <DialogContent
              bg="blackAlpha.900"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              maxW="100vw"
              maxH="100vh"
              p={0}
              onClick={handleClose}
            >
              {/* Close Button */}
              <IconButton
                aria-label="Close"
                position="absolute"
                top={4}
                right={4}
                onClick={handleClose}
                colorScheme="whiteAlpha"
                size="lg"
                zIndex={2}
              >
                <FaTimes />
              </IconButton>

              {/* Previous Button */}
              <IconButton
                aria-label="Previous"
                position="absolute"
                left={4}
                top="50%"
                transform="translateY(-50%)"
                onClick={showPrev}
                colorScheme="whiteAlpha"
                size="lg"
                zIndex={2}
              >
                <FaChevronLeft />
              </IconButton>

              {/* Next Button */}
              <IconButton
                aria-label="Next"
                position="absolute"
                right={4}
                top="50%"
                transform="translateY(-50%)"
                onClick={showNext}
                colorScheme="whiteAlpha"
                size="lg"
                zIndex={2}
              >
                <FaChevronRight />
              </IconButton>

              {/* Displayed Image */}
              {selectedIdx !== null && (
                <Image
                  src={images[selectedIdx]}
                  alt={`Gallery image ${selectedIdx + 1}`}
                  maxH="90vh"
                  maxW="90vw"
                  borderRadius="lg"
                  boxShadow="2xl"
                  onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
                />
              )}
            </DialogContent>
          </DialogPositioner>
        </Dialog.Root>
      </section>
    </>
  );
};

export default GallerySection;
