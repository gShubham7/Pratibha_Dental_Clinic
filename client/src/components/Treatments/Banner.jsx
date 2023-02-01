import { Box, chakra, Divider, Flex } from "@chakra-ui/react";
import React from "react";

const Banner = ({ data }) => {
  const { banner_image, banner_question, banner_sub_info, banner_extra } = data;
  return (
    <Flex
      // bg="#edf3f8"
      // _dark={{
      //   bg: "#3e3e3e",
      // }}
      p={25}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        mx={{
          lg: 8,
        }}
        display={{
          lg: "flex",
        }}
        maxW={{
          lg: "5xl",
        }}
        // shadow={{
        //   lg: "lg",
        // }}
        rounded={{
          lg: "lg",
        }}
        mt={"24"}
      >
        <Box
          w={{
            lg: "50%",
          }}
        >
          <Box
            h={{
              base: "md",
              // lg: "md",
            }}
            rounded={{
              lg: "lg",
            }}
            bgSize="cover"
            style={{
              backgroundImage: `url(${banner_image})`,
            }}
          ></Box>
        </Box>

        <Box
          py={12}
          px={6}
          maxW={{
            base: "xl",
            lg: "5xl",
          }}
          w={{
            lg: "50%",
          }}
        >
          <chakra.h2
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            {banner_question}
            {/* <chakra.span
        color="brand.600"
        _dark={{
          color: "brand.400",
        }}
      >
        Idea
      </chakra.span> */}
          </chakra.h2>
          <Divider />
          <chakra.p
            mt={4}
            color="gray.600"
            fontWeight={"bold"}
            _dark={{
              color: "gray.400",
            }}
          >
            {banner_sub_info}
          </chakra.p>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            {banner_extra}
          </chakra.p>

          {/* <Box mt={8}>
      <Link
        bg="gray.900"
        color="gray.100"
        px={5}
        py={3}
        fontWeight="semibold"
        rounded="lg"
        _hover={{
          bg: "gray.800",
        }}
      >
        Start Now
      </Link>
    </Box> */}
        </Box>
      </Box>
    </Flex>
  );
};

export default Banner;
