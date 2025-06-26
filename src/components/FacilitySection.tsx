import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogPositioner,
  IconButton,
  Image,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images: string[] = ["/facility1.jpg", "/facility2.jpg"];

// Child component managing image cycling and fade
interface ImageGridProps {
  images: string[];
  onImageClick: (idx: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  const [startIdx, setStartIdx] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    if (images.length <= 2) {
      // No cycling needed if 2 or fewer images
      return;
    }
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setStartIdx((prev) => (prev + 2) % images.length);
        setFade(true);
      }, 300);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Always show 2 images with wrap-around
  let visibleImages = images.slice(startIdx, startIdx + 2);
  if (visibleImages.length < 2) {
    visibleImages = visibleImages.concat(
      images.slice(0, 2 - visibleImages.length)
    );
  }

  return (
    <Box
      style={{
        opacity: fade ? 1 : 0,
        transition: "opacity 300ms ease-in-out",
      }}
    >
      <SimpleGrid columnGap={3} rowGap={2} columns={{ base: 1, sm: 2 }}>
        {visibleImages.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={` ${((startIdx + idx) % images.length) + 1}`}
            borderRadius="md"
            objectFit="cover"
            boxShadow="md"
            maxH="300px"
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

const FacilitySection: React.FC = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#2D3748" : "#EDF2F7";
  const color = theme === "dark" ? "#CBD5E0" : "#2D3748";

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

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
      <section id="facility" aria-labelledby="facility-heading">
        <Helmet>
          <meta
            name="description"
            content="Discover the Sharks Swimming Club Eswatini training facility, featuring a heated 3-lane, 20m outdoor pool in Ezulwini, fully equipped for competitive swimming."
          />
        </Helmet>

        <Box
          id="facility"
          py={20}
          px={6}
          //maxW="600px"
          mx="auto"
          bg={bg}
          color={color}
        >
          <Container px={6}>
            <Heading
              as="h2"
              id="facility-heading"
              fontFamily="Raleway, sans-serif"
              fontSize="3xl"
              mb={6}
              textAlign="center"
            >
              Facility
            </Heading>
            <Stack direction={{ base: "column", lg: "row" }} px={4}>
              <Text paddingBottom={5} fontSize="lg" maxW="500px">
                Our heated 3 lane, 20m pool is situated in{" "}
                <strong>Ezulwini</strong> making it easily accessible to{" "}
                <strong>Mbabane, Manzini, Malkern's</strong> and the valley
                itself. We aim to offer a minimum 28°C water temperature
                year-round. Our facility is the only{" "}
                <strong>fully heated out-door pool</strong> in the Country.
                World Aquatic pool regulations ensure the more{" "}
                <strong>competitive swimmer</strong> has access to correct{" "}
                <strong>starting blocks</strong>,{" "}
                <strong>backstroke flags</strong>, and{" "}
                <strong>pool markings</strong>, preparing them thoroughly for
                possible <strong>competition</strong> both locally and over the
                border.
              </Text>
              <Spacer />
              <ImageGrid images={images} onImageClick={openImage} />
            </Stack>
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
                  alt={`Facility image ${selectedIdx + 1}`}
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

export default FacilitySection;
