import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" p={4}>
          <Text fontSize="3xl" mb={4}>Featured Articles</Text>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="xl">Article 1</Text>
              <Text mt={2}>Summary of the first article...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="xl">Article 2</Text>
              <Text mt={2}>Summary of the second article...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4}>
          <Text fontSize="2xl" mb={4}>Trending News</Text>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Text>Trending News 1</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text>Trending News 2</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;