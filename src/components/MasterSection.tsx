import React, { useState, useCallback } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  SimpleGrid,
  Image,
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

const images: string[] = ["/master1.jpg"];

interface ImageGridProps {
  images: string[];
  onImageClick: (idx: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <SimpleGrid columns={1}>
      {images.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`Master Swimmer ${idx + 1}`}
          borderRadius="md"
          objectFit="cover"
          boxShadow="md"
          maxH="300px"
          w="100%"
          cursor="pointer"
          onClick={() => onImageClick(idx)}
          transition="transform 1s"
          _hover={{ transform: "scale(1.03)" }}
        />
      ))}
    </SimpleGrid>
  );
};

const MasterSection: React.FC = () => {
  const { theme } = useNextTheme();

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
      <section id="master" aria-labelledby="master-heading">
        <Helmet>
          <meta
            name="description"
            content="Discover Sharks Swimming Club Eswatini's adult and masters swimming programs, including learn-to-swim, training groups, aqua therapy, and competitive masters swimmers."
          />
        </Helmet>

        <Box id="master" py={20} px={6} mx="auto" bg={bg} color={color}>
          <Container px={6}>
            <Heading
              as="h2"
              id="master-heading"
              fontFamily="Raleway, sans-serif"
              fontSize="3xl"
              mb={6}
              textAlign="center"
            >
              Adult/Master Swimmers
            </Heading>
            <Stack
              justify="center"
              direction={{ base: "column", lg: "row" }}
              px={4}
            >
              <ImageGrid images={images} onImageClick={openImage} />
              <Text
                paddingLeft={10}
                paddingTop={3}
                paddingBottom={5}
                fontSize="lg"
                maxW="500px"
              >
                <strong>Sharks Swimming Club</strong> offers both an adult '
                <strong>learn to swim</strong>' program and an adult training
                group. Adults may also access the club's facilities Mon - Fri
                for their own 'lap swimming' at a monthly fee. Adults recovering
                from injuries/ surgery can also get help with 'aqua therapy,
                usually on a one to one basis and can also join exercise
                classes. Sharks, '<strong>Masters</strong>' swimmers have
                competed in numerous South African Masters champs as well as
                World Champs.
              </Text>
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
                  alt={`Master image ${selectedIdx + 1}`}
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

export default MasterSection;
