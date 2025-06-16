import { Box, Heading, Container, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

const MasterSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  return (
    <>
      <section id="master" aria-labelledby="master-heading">
        <Helmet>
          <meta
            name="description"
            content="Check the Sharks Swimming Club Eswatini Masters and Adults Swimming."
          />
        </Helmet>

        <Box
          id="master"
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
              Adult/Master Swimmers
            </Heading>
            <Text paddingBottom={5} fontSize="lg">
              Sharks club offer's both an adult 'learn to swim' program and an
              adult training group. Adults may also access the club's facilities
              Mon- fri for their own 'lap swimming' at a monthly fee. Adults
              recovering from injuries/ surgery can also get help with 'aqua
              therapy, usually on a one to one basis and can also join exercise
              classes. Sharks, 'Master' swimmer's have competed in numerous
              South African Masters champs as well as World Champs.
            </Text>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default MasterSection;
