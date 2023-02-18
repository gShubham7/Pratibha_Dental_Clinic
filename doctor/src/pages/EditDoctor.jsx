import { Heading, HStack, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const getDoctor = async (id) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  const { data } = await axios.get(
    `http://localhost:8080/doctors/${id}`,
    config
  );
  return data;
};

const EditDoctor = () => {
  const [doctor, setDoctor] = useState({});
  const toast = useToast();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchDoc();
  }, [id]);

  const fetchDoc = async () => {
    const res = await getDoctor(id);
    setDoctor(res[0]);
    setIsLoading(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };
  const handleSubmit = async () => {
    if (Object.values(doctor).length < 5) {
      return toast({
        title: "All fields are required",
        position: "bottom-left",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
    // updateDoc_api Call
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const { data } = await axios.patch(
        `http://localhost:8080/doctors/${id}`,
        doctor,
        config
      );
      toast({
        title: "Updated Successfully!",
        position: "bottom-left",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        position: "bottom-left",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (isLoading) {
    return (
      <HStack h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Loader />;
      </HStack>
    );
  }
  return (
    <>
      <Heading>Edit Doctor Details</Heading>
      <VStack
        w={{ base: "60%", md: "40%" }}
        m="auto"
        alignSelf={"center"}
        mt={5}
      >
        <FormControl isRequired>
          <FormLabel mt={2}>First name</FormLabel>
          <Input
            placeholder="First name"
            name="firstName"
            value={doctor.firstName}
            onChange={handleChange}
            mt={2}
          />
          <FormLabel mt={2}>Last name</FormLabel>
          <Input
            placeholder="Last Name"
            name="lastName"
            value={doctor.lastName}
            onChange={handleChange}
            mt={2}
          />
          <FormLabel mt={2}>Speciality</FormLabel>
          <Input
            placeholder="Speciality"
            name="speciality"
            value={doctor.speciality}
            onChange={handleChange}
            mt={2}
          />
          <FormLabel mt={2}>Phone No.</FormLabel>
          <Input
            placeholder="+91 1234567890"
            type={"tel"}
            name="contact"
            value={doctor.contact}
            onChange={handleChange}
            mt={2}
          />
        </FormControl>
        <HStack>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Update
          </Button>
          <Button colorScheme={"red"} variant="outline">
            Cancel
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default EditDoctor;
