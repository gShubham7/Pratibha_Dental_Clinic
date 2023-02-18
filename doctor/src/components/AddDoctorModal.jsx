import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const AddDoctorModal = ({ isOpen, onClose, fetchDocs }) => {
  const [doctor, setDoctor] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };
  const handleSubmit = async () => {
    if (Object.values(doctor).length < 4) {
      return toast({
        title: "All fields are required",
        position: "bottom-left",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const { data } = await axios.post(
        "http://localhost:8080/doctors",
        doctor,
        config
      );
      toast({
        title: "Doctor added Successfully!",
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
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Doctor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel mt={2}>First name</FormLabel>
              <Input
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
                mt={2}
              />
              <FormLabel mt={2}>Last name</FormLabel>
              <Input
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                mt={2}
              />
              <FormLabel mt={2}>Speciality</FormLabel>
              <Input
                placeholder="Speciality"
                name="speciality"
                onChange={handleChange}
                mt={2}
              />
              <FormLabel mt={2}>Phone No.</FormLabel>
              <Input
                placeholder="+91 1234567890"
                type={"tel"}
                name="contact"
                onChange={handleChange}
                mt={2}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDoctorModal;
