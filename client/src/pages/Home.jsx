import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CircleCard from "../components/CircleCard";
import Newsletter from "../components/Newsletter";
import PromisesCard from "../components/Treatments/PromisesCard";
import PromiseCard from "../components/PromiseCard";
import { circle_card_data, promise_card_data } from "../data";

const Home = () => {
  return (
    <>
      <video
        style={{ width: "100vw"}}
        src="/homepage-video.mp4"
        autoPlay
        loop
        muted
      />
      <Box textAlign="center" mt={10}>
        <Text>---Smile---</Text>
        <Heading>HELP US TO HELP YOU</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacingX={5} px={5}>
          {circle_card_data.map((el) => (
            <CircleCard key={el.title} data={el} />
          ))}
        </SimpleGrid>
        <Heading p={10}>Our Promise</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} mb={10}>
          {promise_card_data.map((el) => (
            <PromiseCard key={el.title} data={el} />
          ))}
        </SimpleGrid>
        <PromisesCard />
        <Text>---Smile Stories---</Text>
        <Heading>WHAT ARE OUR PATIENTS SAY</Heading>
        {/* GOOGLE REVIEW CARD */}
        <div className="elfsight-app-1173d6dc-ae10-44bc-8189-d0adfff27c93"></div>
        <Newsletter />
      </Box>
    </>
  );
};

export default Home;
