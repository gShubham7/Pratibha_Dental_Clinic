import { Button, Divider, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack display={"flex"} justifyContent={"space-between"} p={3}>
        <NavLink to={"/"}>
          <HStack
            // justifyContent={"space-between"}
            display={{ base: "none", md: "flex" }}
          >
            <Image
              src="/LOGO.jpeg"
              w={"16"}
              borderRadius={"50%"}
              border={"1px solid gray"}
            />
            <Heading>Pratibha Dental</Heading>
          </HStack>
        </NavLink>
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
