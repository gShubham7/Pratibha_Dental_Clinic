import { Box, chakra } from "@chakra-ui/react";
import React from "react";

const Para = ({ data }) => {
  const { para_title, para_info, para_list, para_extra, para_procedure } = data;
  return (
    <Box    
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      m="auto"
      mt={5}
    >
      <chakra.h2
        fontSize={{
          base: "xl",
          md: "2xl",
        }}
        color="gray.800"
        _dark={{
          color: "white",
        }}
        // fontWeight="bold"
        mb={5}
      >
        {para_title}
        {/* <chakra.span
        color="brand.600"
        _dark={{
          color: "brand.400",
        }}
      >
        Idea
      </chakra.span> */}
      </chakra.h2>
      {para_procedure &&
        para_procedure.map((el, index) => (
          <Box key={index}>
            <chakra.h2 fontWeight={"bold"}>Step {index + 1}:</chakra.h2>
            <chakra.p>{el}</chakra.p>
          </Box>
        ))}
      <chakra.p
        // mt={4}
        color="gray.600"
        // fontWeight={"bold"}
        _dark={{
          color: "gray.400",
        }}
      >
        {para_info}
      </chakra.p>
      <ol style={{ padding: "15px" }}>
        {para_list && para_list.map((el) => <li key={el}>{el}</li>)}
      </ol>
      <chakra.p
        color="gray.600"
        // fontWeight={"bold"}
        _dark={{
          color: "gray.400",
        }}
      >
        {para_extra}
      </chakra.p>
    </Box>
  );
};

export default Para;
