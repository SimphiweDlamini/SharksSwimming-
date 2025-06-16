import { Box, Heading, Container, Text } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";
import { useTheme as useNextTheme } from "next-themes";
import { Helmet } from "react-helmet-async";

// const schedule = [
//   { day: "Monday", time: "6:00 PM - 8:00 PM" },
//   { day: "Wednesday", time: "6:00 PM - 8:00 PM" },
//   { day: "Friday", time: "6:00 PM - 8:00 PM" },
//   { day: "Saturday", time: "9:00 AM - 12:00 PM" },
// ];

const ScheduleSection = () => {
  const { theme } = useNextTheme();

  const bg = theme === "dark" ? "#1A202C" : "white";
  const color = theme === "dark" ? "#E2E8F0" : "#1A202C";

  return (
    <>
      <section id="schedule" aria-labelledby="schedule-heading">
        <Helmet>
          <meta
            name="description"
            content="Check the Sharks Swimming Club Eswatini training schedule for weekly practice times."
          />
        </Helmet>

        <Box
          id="schedule"
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
              Lesson Schedule
            </Heading>
            <Text paddingBottom={5} fontSize="lg">
              Lesson's are on offer Monday - Saturdays, and classes cater for
              all age groups and skill levels. Days and time's can be arranged
              to fit all, making it easy for everyone to join and improve their
              swimming ability
            </Text>
            {/* <Table.Root color={color} size="md" width="100%">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader fontFamily="Roboto Slab, serif">
                    Day
                  </Table.ColumnHeader>
                  <Table.ColumnHeader fontFamily="Roboto Slab, serif">
                    Time
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {schedule.map(({ day, time }) => (
                  <Table.Row key={day}>
                    <Table.Cell fontFamily="Roboto Slab, serif">
                      {day}
                    </Table.Cell>
                    <Table.Cell fontFamily="Roboto Slab, serif">
                      {time}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root> */}
          </Container>
        </Box>
      </section>
    </>
  );
};

export default ScheduleSection;
