import {
  Box,
  Heading,
  Image,
  Container,
  Text,
  SimpleGrid,
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogPositioner,
  IconButton,
  HStack,
  Stack,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/openwater1.jpg",
  "/openwater2.jpg",
  "/openwater3.jpg",
  "/openwater4.jpg",
];

const visibleImages = images.slice(0, 3);

const OpenWaterSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#2D3748" : "#EDF2F7";
  const color = theme === "dark" ? "#CBD5E0" : "#2D3748";

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
      <section id="openwater" aria-labelledby="openwater-heading">
        <Helmet>
          <meta
            name="description"
            content="Check the Sharks Swimming Club Eswatini Open Water Activities and Events."
          />
        </Helmet>

        <Box
          id="openwater"
          py={20}
          px={6}
          //maxW="600px"
          mx="auto"
          bg={bg}
          color={color}
        >
          <Container maxW="100%" px={6}>
            <Heading
              as="h2"
              fontFamily="Raleway, sans-serif"
              mb={6}
              textAlign="center"
            >
              Open Water Swimming
            </Heading>
            <Stack direction={{ base: "column", sm: "row" }} px={4}>
              <Text paddingBottom={5} fontSize="lg" maxW="450px">
                Shark's Coach Chris has over{" "}
                <strong>15 years experience</strong> in both training for and
                competing in <strong>open water events</strong> from{" "}
                <strong>South Africa</strong> to <strong>Australia</strong>,{" "}
                <strong>Mozambique</strong> to <strong>Malawi</strong>. Luphohlo
                dam located 15 minutes from Mbabane is the ideal place for open
                water swimming.
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
                    alt={`Open Water ${idx + 1}`}
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

export default OpenWaterSection;
