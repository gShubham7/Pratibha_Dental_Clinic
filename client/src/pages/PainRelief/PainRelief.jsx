import { HStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/Card";
import TreatmentCard from "../../components/TreatmentCard";
import Banner from "../../components/Treatments/Banner";
import { banner_data, card_data } from "../../data";

const PainRelief = () => {
  return (
    <>
      <Banner data={banner_data.pain_relief} />
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        justifyItems="center"
        spacingX="40px"
        spacingY="20px"
        // bgColor={"bisque"}
        p={10}
      >
        {card_data.map((el) => (
          <TreatmentCard key={el.title} data={el} />
        ))}
      </SimpleGrid>

      {/* <TreatmentCard /> */}
    </>
  );
};

export default PainRelief;
