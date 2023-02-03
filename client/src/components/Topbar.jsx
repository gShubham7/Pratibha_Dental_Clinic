import { Box, Divider, Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Topbar = () => {
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        display={{ base: "none", md: "flex" }}
      >
        <Heading>Pratibha Dental Clinic</Heading>
        <Box p={10} bgColor="blue.300">
          Book Apponitment
        </Box>
      </HStack>
      <Divider />
    </>
  );
};

export default Topbar;
