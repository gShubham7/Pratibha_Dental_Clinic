import React from "react";
import { banner_data, para_data, faq } from "../../data";
import { chakra } from "@chakra-ui/react";
import Banner from "../../components/Treatments/Banner";
import Para from "../../components/Treatments/Para";
import FAQAccordion from "../../components/Treatments/FAQAccordion";
import Quote from "../../components/Quote";

const RootCanalTreatment = () => {
  return (
    <>
      <Banner data={banner_data.rct} />
      {para_data.rct.map((item) => (
        <Para key={item.para_title} data={item} />
      ))}
      {faq.rct ? (
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
          {faq.rct?.map((el, index) => (
            <FAQAccordion key={index} data={el} index={index} />
          ))}
        </>
      ) : null}
      <Quote />
    </>
  );
};

export default RootCanalTreatment;
