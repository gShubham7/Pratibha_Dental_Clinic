import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";
import AddDoctorModal from "../components/AddDoctorModal";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    // getDoctors apiCall
  }, []);

  const handleDeleteDoc = (id) => {
    // deleteDoc_apiCall
  };
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
              <Th>Experties</Th>
              <Th>Experience</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td
                display={"flex"}
                justifyContent="space-evenly"
                alignItems={"center"}
              >
                <Button
                  colorScheme={"blue"}
                  onClick={navigate(`/dashboard/doctors/${"id"}`)}
                >
                  <RiEditLine />
                </Button>
                <Button
                  colorScheme={"red"}
                  onClick={() => handleDeleteDoc("id")}
                >
                  <RiDeleteBin6Line />
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <AddDoctorModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Doctors;
