import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Quote from "../../components/Quote";
import TreatmentCard from "../../components/TreatmentCard";
import Banner from "../../components/Treatments/Banner";
import { banner_data, card_data } from "../../data";

const KidsDentistry = () => {
  return (
    <>
      <Banner data={banner_data.kids_dentistry} />
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        justifyItems="center"
        spacingX="40px"
        spacingY="60px"
        p={10}
      >
        {card_data.kids_dentistry.map((el) => (
          <TreatmentCard key={el.title} data={el} />
        ))}
      </SimpleGrid>
      <Quote />
    </>
  );
};

export default KidsDentistry;
