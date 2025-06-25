import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Heading,
  Image,
  Container,
  Text,
  IconButton,
  Dialog,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useTheme as useNextTheme } from "next-themes";

const images: string[] = [
  "/swim1.jpg",
  "/swim2.jpg",
  "/swim3.jpg",
  "/swim4.jpg",
  "/swim5.jpg",
  "/swim6.jpg",
  "/swim7.jpg",
  "/swim8.jpg",
  "/swim9.jpg",
  "/swim10.jpg",
  "/swim11.jpg",
  "/swim12.jpg",
  "/swim13.jpg",
  "/swim14.jpg",
  "/swim15.jpg",
];

interface ImageGridProps {
  images: string[];
  onImageClick: (idx: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  const [startIdx, setStartIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setStartIdx((prev) => (prev + 6) % images.length);
        setFade(true);
      }, 300);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Compute visible images with wrap-around
  let visibleImages = images.slice(startIdx, startIdx + 6);
  if (visibleImages.length < 6) {
    visibleImages = visibleImages.concat(
      images.slice(0, 6 - visibleImages.length)
    );
  }

  return (
    <Box
      style={{
        opacity: fade ? 1 : 0,
        transition: "opacity 300ms ease-in-out",
      }}
    >
      <SimpleGrid columnGap={3} rowGap={2} columns={{ base: 1, sm: 2, md: 3 }}>
        {visibleImages.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Gallery image ${((startIdx + idx) % images.length) + 1}`}
            borderRadius="md"
            objectFit="cover"
            boxShadow="md"
            maxH="200px"
            w="100%"
            cursor="pointer"
            onClick={() => onImageClick((startIdx + idx) % images.length)}
            transition="transform 1s"
            _hover={{ transform: "scale(1.03)" }}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const GallerySection: React.FC = () => {
  const { theme } = useNextTheme();
  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const openImage = useCallback((idx: number) => {
    setSelectedIdx(idx);
    setOpen(true);
  }, []);

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedIdx((prev) => {
      if (prev === null) return images.length - 1;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
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
            content="View photos of swimming lessons, competitions, and community events at Sharks Swimming Club Eswatini. See our swimmers in action and get inspired to join."
          />
        </Helmet>

        <Box py={20} px={6} mx="auto" bg={bg} color={color}>
          <Container maxW="1000px" px={6}>
            <Heading
              as="h2"
              id="gallery-heading"
              fontFamily="Raleway, sans-serif"
              fontSize="3xl"
              mb={8}
              textAlign="center"
              color={color}
            >
              Gallery
            </Heading>
            <Text paddingBottom={4} fontSize="lg" textAlign="center">
              Explore photos from our{" "}
              <strong>swimming lessons, competitions</strong>, and{" "}
              <strong>community events</strong> in <strong>Eswatini</strong>.
              See our swimmers in action and get inspired to join Sharks
              Swimming Club!
            </Text>

            <ImageGrid images={images} onImageClick={openImage} />
            <Text
              fontWeight="bolder"
              paddingTop={4}
              fontSize="sm"
              textAlign="center"
            >
              You may click on an image to get a better view
            </Text>
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
              maxW={{ base: "95vw", md: "90vw" }}
              maxH={{ base: "80vh", md: "90vh" }}
              p={{ base: 2, md: 0 }}
              onClick={handleClose}
            >
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

              {selectedIdx !== null && (
                <Image
                  src={images[selectedIdx]}
                  alt={`Gallery image ${selectedIdx + 1}`}
                  maxH="90vh"
                  maxW="90vw"
                  borderRadius="lg"
                  boxShadow="2xl"
                  onClick={(e) => e.stopPropagation()}
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
