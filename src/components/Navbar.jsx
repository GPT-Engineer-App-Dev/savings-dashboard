import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="xl" fontWeight="bold">Financial Times</Text>
        </Box>
        <Flex alignItems="center">
          <NavLink to="/" exact>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>Home</Link>
          </NavLink>
          <NavLink to="/world">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>World</Link>
          </NavLink>
          <NavLink to="/business">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>Business</Link>
          </NavLink>
          <NavLink to="/opinion">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>Opinion</Link>
          </NavLink>
          <NavLink to="/tech">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>Tech</Link>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;