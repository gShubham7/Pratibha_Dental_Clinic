import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const CircleCard = ({ data }) => {
  const { title, image, link } = data;
  return (
    <NavLink to={link}>
      <Flex
        // p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
          <Image w={"full"} fit="cover" src={image} alt="avatar" />

          <Box py={5} textAlign="center">
            <Text
              display="block"
              fontSize="sm"
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
              overflow={"hidden"}
            >
              {title}
            </Text>
          </Box>
        </Box>
      </Flex>
    </NavLink>
  );
};

export default CircleCard;
