import React from "react";
import { banner_data, para_data, faq } from "../../data";
import { chakra } from "@chakra-ui/react";
import Banner from "../../components/Treatments/Banner";
import Para from "../../components/Treatments/Para";
import FAQAccordion from "../../components/Treatments/FAQAccordion";
import Quote from "../../components/Quote";

const BridgesCrowns = () => {
  return <>
  <Banner data={banner_data.bridges_crowns} />
  {para_data.bridges_crowns.map((item) => (
    <Para key={item.para_title} data={item} />
  ))}
  {faq.bridges_crowns ? (
    <>
      <chakra.h2
        maxW={{
          base: "xl",
          lg: "5xl",
        }}
        m="auto"
        p={5}
        textAlign={"left"}
        fontSize={{
          base: "xl",
          md: "2xl",
        }}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        FREQUENTLY ASKED QUESTIONS
      </chakra.h2>
      {faq.bridges_crowns?.map((el, index) => (
        <FAQAccordion key={index} data={el} index={index} />
      ))}
    </>
  ) : null}
  <Quote />
</>;
};

export default BridgesCrowns;
