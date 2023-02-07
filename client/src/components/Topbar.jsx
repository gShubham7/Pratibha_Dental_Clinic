import { Button, Divider, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        display={{ base: "block", md: "flex" }}
        p={3}
      >
        <Heading display={{ base: "none", md: "block" }}>
          Pratibha Dental Clinic
        </Heading>
        <Button
          p={2}
          colorScheme="purple"
          w={{ base: "full", md: "xs" }}
          onClick={() => navigate("/book-appointment")}
        >
          Book Apponitment
        </Button>
      </HStack>
      <Divider />
    </>
  );
};

export default Topbar;
