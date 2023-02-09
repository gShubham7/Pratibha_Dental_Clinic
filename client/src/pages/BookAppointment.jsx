import {
  Button,  
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,  
  Stack,
  Image,
} from '@chakra-ui/react';

export default function BookAppointment() {
  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Welcome to Pratibha Dental Clinic</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" />
          </FormControl>          
          <FormControl id="date-time">
            <FormLabel>Date & Time</FormLabel>
            <Input type="datetime-local" />
          </FormControl>
          <Stack spacing={6}>            
            <Button colorScheme={'blue'} variant={'solid'}>
              SUBMIT
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}