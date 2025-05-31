import { Table, Box, Heading } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/roboto-slab/400.css";

const schedule = [
  { day: "Monday", time: "6:00 PM - 8:00 PM" },
  { day: "Wednesday", time: "6:00 PM - 8:00 PM" },
  { day: "Friday", time: "6:00 PM - 8:00 PM" },
  { day: "Saturday", time: "9:00 AM - 12:00 PM" },
];

const ScheduleSection = () => (
  <Box id="schedule" py={20} px={6} maxW="600px" mx="auto" textAlign="center">
    <Heading fontFamily="Raleway, sans-serif" mb={6}>
      Training Schedule
    </Heading>
    <Table.Root size="md" width="100%">
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
            <Table.Cell fontFamily="Roboto Slab, serif">{day}</Table.Cell>
            <Table.Cell fontFamily="Roboto Slab, serif">{time}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  </Box>
);

export default ScheduleSection;
