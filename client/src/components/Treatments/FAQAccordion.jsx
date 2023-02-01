import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const FAQAccordion = ({ data, index }) => {
  const { question, answer } = data;
  return (
    <Accordion
      allowToggle
      // p={5}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      m="auto"
    >
      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
            Q.{index + 1}
            {"."} {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel>{answer}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
