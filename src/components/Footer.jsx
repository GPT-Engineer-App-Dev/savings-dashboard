import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex justify="center" align="center">
        <Link href="/contact" mx={2}>Contact</Link>
        <Link href="/privacy-policy" mx={2}>Privacy Policy</Link>
        <Link href="/terms-of-service" mx={2}>Terms of Service</Link>
      </Flex>
      <Text textAlign="center" mt={2}>© 2023 Financial Times</Text>
    </Box>
  );
};

export default Footer;