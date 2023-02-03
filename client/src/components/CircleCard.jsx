import {
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const CircleCard = ({ data }) => {
  const { title, image } = data;
  return (
    <VStack _hover={{ bgColor: "gray.100" }} m={10}>
      <Image src={image} alt={title} />
      <Text>{title}</Text>
      <Image
        w={20}
        src="https://cdn-icons-png.flaticon.com/512/2252/2252525.png"
      />
    </VStack>
  );
};

export default CircleCard;
