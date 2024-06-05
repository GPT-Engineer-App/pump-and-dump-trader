import { useState } from "react";
import { Container, VStack, Text, Button, HStack, Input, useToast, Box, IconButton } from "@chakra-ui/react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";

const Index = () => {
  const [crypto, setCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const toast = useToast();

  const handlePump = () => {
    if (crypto && amount) {
      toast({
        title: "Pump initiated!",
        description: `Pumping ${amount} of ${crypto}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Please enter both cryptocurrency and amount.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDump = () => {
    if (crypto && amount) {
      toast({
        title: "Dump initiated!",
        description: `Dumping ${amount} of ${crypto}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Please enter both cryptocurrency and amount.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Pump and Dump for Bybit and Binance</Text>
        <HStack spacing={2}>
          <IconButton aria-label="Bitcoin" icon={<FaBitcoin />} size="lg" onClick={() => setCrypto("Bitcoin")} />
          <IconButton aria-label="Ethereum" icon={<FaEthereum />} size="lg" onClick={() => setCrypto("Ethereum")} />
        </HStack>
        <Input placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <HStack spacing={4}>
          <Button colorScheme="green" onClick={handlePump}>
            Pump
          </Button>
          <Button colorScheme="red" onClick={handleDump}>
            Dump
          </Button>
        </HStack>
        <Box>
          <Text>Selected Cryptocurrency: {crypto}</Text>
          <Text>Amount: {amount}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
