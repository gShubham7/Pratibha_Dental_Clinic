import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Spinner
      thickness="40px"
      speed="0.5s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};

export default Loader;
