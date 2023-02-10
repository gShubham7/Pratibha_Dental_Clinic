import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const AppointmentModal = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        p={2}
        colorScheme="purple"
        w={{ base: "full", md: "xs" }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Book Appointment
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Welcome to Pratibha Dental Clinic</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name" p={2}>
              <FormLabel p={2}>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="phone" p={2}>
              <FormLabel p={2}>Phone Number</FormLabel>
              <Input type="tel" />
            </FormControl>
            <FormControl id="date-time" p={2}>
              <FormLabel p={2}>Date & Time</FormLabel>
              <Input type="datetime-local" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppointmentModal;
