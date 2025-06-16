import { Box, Heading, Container, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const FacilitySection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#2D3748" : "#EDF2F7";
  const color = theme === "dark" ? "#CBD5E0" : "#2D3748";

  return (
    <>
      <section id="facility" aria-labelledby="facility-heading">
        <Helmet>
          <meta
            name="description"
            content="Check the Sharks Swimming Club Eswatini training facility."
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
          <Container maxW="600px" px={6}>
            <Heading
              as="h2"
              fontFamily="Raleway, sans-serif"
              mb={6}
              textAlign="center"
            >
              Facility
            </Heading>
            <Text paddingBottom={5} fontSize="lg">
              Our heated 3 lane, 20m pool is situated in{" "}
              <strong>Ezulwini</strong> making it easily accessible to Mbabane,
              Manzini, Malkern's and the valley itself. We aim to offer a
              minimum 28°C water temperature year-round. Our facility is the
              only <strong>fully heated out-door pool</strong> in the Country.
              World Aquatic pool regulations ensure the more{" "}
              <strong>competitive swimmer</strong> has access to correct{" "}
              <strong>starting blocks</strong>,{" "}
              <strong>backstroke flags</strong>, and{" "}
              <strong>pool marking's</strong>., preparing them thoroughly for
              possible <strong>competition</strong> both locally and over the
              border.
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default FacilitySection;
