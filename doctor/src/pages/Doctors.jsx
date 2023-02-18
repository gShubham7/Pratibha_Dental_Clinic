import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  useDisclosure,
  HStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";
import AddDoctorModal from "../components/AddDoctorModal";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const getDoctors = async () => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  const { data } = await axios.get("http://localhost:8080/doctors", config);
  return data;
};

const Doctors = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [docs, setDocs] = useState([]);
  const toast = useToast();

  useEffect(() => {
    setIsLoading(true);
    fetchDocs();
  }, []);

  const fetchDocs = async () => {
    const res = await getDoctors();
    setDocs(res);
    setIsLoading(false);
  };

  const handleDeleteDoc = async (id) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const { data } = await axios.delete(
        `http://localhost:8080/doctors/${id}`,
        config
      );
      toast({
        title: "Deleted Successfully!",
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
    fetchDocs();
  };

  if (isLoading) {
    return (
      <HStack h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Loader />
      </HStack>
    );
  }
  return (
    <>
      <Button colorScheme={"blue"} onClick={onOpen}>
        Add Doctor +
      </Button>
      <TableContainer>
        <Table variant="striped" colorScheme="blue" textAlign={"center"}>
          <Thead>
            <Tr>
              <Th>Doctor Name</Th>
              <Th>Speciality</Th>
              <Th>Contact</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {docs.map((el) => (
              <Tr key={el.contact}>
                <Td>Dr. {el.firstName + " " + el.lastName}</Td>
                <Td>{el.speciality}</Td>
                <Td>{el.contact}</Td>
                <Td
                  display={"flex"}
                  justifyContent="space-evenly"
                  alignItems={"center"}
                >
                  <Button
                    colorScheme={"blue"}
                    onClick={() => navigate(`/dashboard/doctors/${el._id}`)}
                  >
                    <RiEditLine />
                  </Button>
                  <Button
                    colorScheme={"red"}
                    onClick={() => handleDeleteDoc(el._id)}
                  >
                    <RiDeleteBin6Line />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <AddDoctorModal onClose={onClose} isOpen={isOpen} fetchDocs={fetchDocs} />
    </>
  );
};

export default Doctors;
