import { Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CircleCard from "../components/CircleCard";
import PromiseCard from "../components/PromiseCard";
import { promise_card_data } from "../data";

const Home = () => {
  return (
    <div>
      <CircleCard />
      <Heading textAlign={"center"} p={10}>
        Our Promise
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        {promise_card_data.map((el) => (
          <PromiseCard key={el.title} data={el} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Home;
