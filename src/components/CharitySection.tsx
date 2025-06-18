import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  SimpleGrid,
  Image,
  Stack,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const images: string[] = ["/charity1.jpg"];

const CharitySection: React.FC = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  return (
    <>
      <section id="charity" aria-labelledby="charity-heading">
        <Helmet>
          <meta
            name="description"
            content="Check the Sharks Swimming Club Eswatini Community and Charity Events."
          />
        </Helmet>

        <Box id="charity" py={20} px={6} mx="auto" bg={bg} color={color}>
          <Container maxW="850px" px={6}>
            <Heading
              as="h2"
              fontFamily="Raleway, sans-serif"
              mb={6}
              textAlign="center"
            >
              Community/Charity Development
            </Heading>

            <Stack
              direction={{ base: "column", sm: "row" }}
              px={4}
              justify="center"
            >
              <SimpleGrid
                columns={1}
                w={{ base: "100%", sm: "350px" }}
                flexShrink={0}
              >
                {images.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`Charity image ${idx + 1}`}
                    borderRadius="md"
                    objectFit="cover"
                    boxShadow="md"
                    maxH="600px"
                    w="100%"
                  />
                ))}
              </SimpleGrid>

              <Text
                paddingLeft={{ base: 0, sm: 10 }}
                paddingTop={{ base: 4, sm: 0 }}
                fontSize="lg"
                maxW={{ base: "100%", sm: "500px" }}
                flex="1"
              >
                <strong>Sharks Swim Club</strong> has initiated both{" "}
                <strong>charity</strong> and <strong>community events</strong>{" "}
                aimed at helping out those less fortunate in our society. These
                include kids coming to the pool for <strong>lessons</strong> as
                well as <strong>charity swims </strong>
                raising funds for OVC's, orphanages, SAWS etc. Giving back to
                and supporting other's is a strong ethos of{" "}
                <strong>Sharks Swimming Club.</strong>
              </Text>
            </Stack>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default CharitySection;
