import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

// import AppStoreBadge from "@/components/AppStoreBadge";
// import PlayStoreBadge from "@/components/PlayStoreBadge";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, to }) => {
  return (
    <Link to={to}>
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </Link>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link to={"#"}>About Us</Link>
            <Link to={"#"}>Blog</Link>
            <Link to={"#"}>Careers</Link>
            <Link to={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link to={"#"}>Help Center</Link>
            <Link to={"#"}>Safety Center</Link>
            <Link to={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link to={"#"}>Cookies Policy</Link>
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Terms of Service</Link>
            <Link to={"#"}>Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            {/* <AppStoreBadge /> */}
            {/* <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} to={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} to={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} to={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
