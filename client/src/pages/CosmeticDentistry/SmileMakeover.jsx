import React from "react";
import { banner_data, para_data, faq } from "../../data";
import { chakra } from "@chakra-ui/react";
import Banner from "../../components/Treatments/Banner";
import Para from "../../components/Treatments/Para";
import FAQAccordion from "../../components/Treatments/FAQAccordion";
import Quote from "../../components/Quote";

const SmileMakeover = () => {
  return (
    <>
      <Banner data={banner_data.smile_makeover} />
      {para_data.smile_makeover.map((item) => (
        <Para key={item.para_title} data={item} />
      ))}
      {faq.smile_makeover ? (
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
          {faq.smile_makeover?.map((el, index) => (
            <FAQAccordion key={index} data={el} index={index} />
          ))}
        </>
      ) : null}
      <Quote />
    </>
  );
};

export default SmileMakeover;
