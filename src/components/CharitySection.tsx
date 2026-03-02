import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Heading,
  Image,
  Container,
  Text,
  SimpleGrid,
  Dialog,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images: string[] = [
  "/charity1.jpg",
  "/charity2.jpeg",
  "/charity3.jpg",
  "/charity4.jpg",
];

interface ImageGridProps {
  images: string[];
  onImageClick: (idx: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  const [startIdx, setStartIdx] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    if (images.length <= 2) return;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setStartIdx((prev) => (prev + 2) % images.length);
        setFade(true);
      }, 300);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  let visibleImages = images.slice(startIdx, startIdx + 2);
  if (visibleImages.length < 2) {
    visibleImages = visibleImages.concat(
      images.slice(0, 2 - visibleImages.length),
    );
  }

  return (
    <Box
      style={{
        opacity: fade ? 1 : 0,
        transition: "opacity 300ms ease-in-out",
      }}
      w="100%"
    >
      <SimpleGrid gap={3} columns={{ base: 1, sm: 2 }}>
        {visibleImages.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Charity ${((startIdx + idx) % images.length) + 1}`}
            borderRadius="md"
            objectFit="cover"
            aspectRatio="3/2"
            boxShadow="md"
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

const CharitySection: React.FC = () => {
  const { theme } = useNextTheme();

  // MATCHES YOUR GALLERY BACKGROUND:
  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const openImage = useCallback((idx: number) => {
    setSelectedIdx(idx);
    setOpen(true);
  }, []);

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedIdx((prev) =>
      prev === null || prev === 0 ? images.length - 1 : prev - 1,
    );
  };

  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedIdx((prev) =>
      prev === null || prev === images.length - 1 ? 0 : prev + 1,
    );
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIdx(null);
  };

  return (
    <section id="charity" aria-labelledby="charity-heading">
      <Helmet>
        <meta
          name="description"
          content="Sharks Swimming Club charity events and community outreach in Eswatini."
        />
      </Helmet>

      <Box py={20} px={6} mx="auto" bg={bg} color={color}>
        <Container px={6} maxW="container.xl">
          <Heading
            as="h2"
            id="charity-heading"
            fontFamily="Raleway, sans-serif"
            fontSize="3xl"
            mb={10}
            textAlign="center"
          >
            Charity & Community
          </Heading>

          <Stack
            direction={{ base: "column", lg: "row-reverse" }}
            alignItems="center"
            gap={{ base: 8, lg: 12 }}
          >
            {/* Text on the Right */}
            <Box flex={{ base: "1", lg: "1" }} maxW={{ lg: "500px" }}>
              <Text fontSize="lg" lineHeight="tall">
                <strong>Sharks Swim Club</strong> has initiated both{" "}
                <strong>charity</strong> and <strong>community events</strong>{" "}
                aimed at helping those less fortunate in our society. These
                include kids coming to the pool for <strong>lessons</strong> as
                well as <strong>charity swims</strong> raising funds for{" "}
                <strong>OVCs, orphanages, SAWS</strong> etc.
                <br />
                <br />
                Giving back and supporting others is a strong ethos of{" "}
                <strong>Sharks Swimming Club</strong>. We continue this mission
                by participating in regional challenges, such as the{" "}
                <strong>Midmar Mile</strong>, to raise awareness and support for
                our various community initiatives across{" "}
                <strong>Eswatini</strong>.
              </Text>
            </Box>

            {/* Images on the Left */}
            <Box flex={{ base: "1", lg: "1.4" }} w="100%">
              <ImageGrid images={images} onImageClick={openImage} />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Lightbox Dialog */}
      <Dialog.Root
        open={open}
        onOpenChange={(details) => !details.open && handleClose()}
      >
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent
            bg="blackAlpha.900"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            maxW="95vw"
            maxH="95vh"
            p={0}
            onClick={handleClose}
          >
            <IconButton
              aria-label="Close"
              position="absolute"
              top={4}
              right={4}
              onClick={handleClose}
              colorScheme="whiteAlpha"
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
              zIndex={2}
            >
              <FaChevronRight />
            </IconButton>

            {selectedIdx !== null && (
              <Image
                src={images[selectedIdx]}
                alt="Charity Detail"
                maxH="90vh"
                maxW="90vw"
                borderRadius="lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </DialogContent>
        </DialogPositioner>
      </Dialog.Root>
    </section>
  );
};

export default CharitySection;
