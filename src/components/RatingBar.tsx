import { Flex, Progress, Text } from "@chakra-ui/react";

export const RatingBar = (p: {
  value: number;
  max: number;
  star: number;
  reviews: number;
}) => {
  return (
    <Flex alignItems={"center"}>
      <Text fontSize="xs">{p.star}/5</Text>
      <Progress
        w="40%"
        bg={"gray.300"}
        colorScheme={"teal"}
        value={p.value}
        max={p.max}
        m={4}
        borderRadius="sm"
      />
      <Text fontSize="xs">{p.reviews} reviews</Text>
    </Flex>
  );
};
