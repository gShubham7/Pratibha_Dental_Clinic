import { useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial" | "submitting" | "success");
//   const [error, setError] = useState(false);

  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      bg={useColorModeValue("white", "whiteAlpha.100")}
      boxShadow={"xl"}
      rounded={"lg"}
      p={6}
      justifyContent="space-around"
    >
      <Heading
        as={"h2"}
        fontSize={{ base: "xl", sm: "2xl" }}
        textAlign={"center"}
        mb={5}
      >
        Sign Up To Receive Smile Tips
      </Heading>
      <Stack
        w={{ base: "100vw", md: "50vw" }}
        direction={{ base: "column", md: "row" }}
        as={"form"}
        spacing={"12px"}
        onSubmit={(e) => {
          e.preventDefault();
        //   setError(false);
          setState("submitting");

          // remove this code and implement your submit logic right here
          setTimeout(() => {
            if (email === "fail@example.com") {
            //   setError(true);
              setState("initial");
              return;
            }

            setState("success");
          }, 1000);
        }}
      >
        <FormControl>
          <Input
            variant={"solid"}
            borderWidth={1}
            color={"gray.800"}
            _placeholder={{
              color: "gray.400",
            }}
            borderColor={useColorModeValue("gray.300", "gray.700")}
            id={"email"}
            type={"email"}
            required
            placeholder={"Your Email"}
            aria-label={"Your Email"}
            value={email}
            // disabled={state !== "initial"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl w={{ base: "100%", md: "40%" }}>
          <Button
            w={{ base: "30%", md: "40%" }}
            colorScheme={state === "success" ? "green" : "blue"}
            isLoading={state === "submitting"}
            type={state === "success" ? "button" : "submit"}
          >
            {state === "success" ? <CheckIcon /> : "Submit"}
          </Button>
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default Newsletter;
