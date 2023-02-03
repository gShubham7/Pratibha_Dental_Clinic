import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CircleCard from "../components/CircleCard";
import Newsletter from "../components/Newsletter";
import PromiseCard from "../components/PromiseCard";
import { circle_card_data, promise_card_data } from "../data";

const Home = () => {
  return (
    <>
      <Box textAlign="center">
        <Text>---Smile---</Text>
        <Heading>HELP US TO HELP YOU</Heading>

        <SimpleGrid columns={{ base: 1, md: 4 }}>
          {circle_card_data.map((el) => (
            <CircleCard key={el.title} data={el} />
          ))}
        </SimpleGrid>
        <Heading p={10}>Our Promise</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }}>
          {promise_card_data.map((el) => (
            <PromiseCard key={el.title} data={el} />
          ))}
        </SimpleGrid>
        <Text>---Smile Stories---</Text>
        <Heading>WHAT ARE OUR PATIENTS SAY</Heading>
        {/* GOOGLE REVIEW CARD */}
        <Newsletter/>
      </Box>
    </>
  );
};

export default Home;
