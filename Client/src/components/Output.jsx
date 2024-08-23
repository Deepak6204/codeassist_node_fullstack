import { useState } from "react";
import { Box, Button, Text, useToast, ButtonGroup, Stack, Flex, background } from "@chakra-ui/react";
import { executeCode } from "../api";
import { Heading } from '@chakra-ui/react'

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="100%">
      <Text mb={2} fontSize="lg">
        Output:
      </Text>
      <ButtonGroup variant='outline' spacing='6'>
      <Button
        spacing='6'
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Button
        spacing='6'
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Submit
      </Button>
      </ButtonGroup>
      <Box
        height="20vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
      <Heading as='h6' size='xs' background="#e2e8f04d" padding="5px" m="-7px" borderRadius={4}>
    Testcase
  </Heading>
  <Flex color='white' marginTop="20px">
  <Text 
    fontSize='xs' 
    marginRight="30px" 
    padding="5px" 
    borderRadius={4} 
    background="#e2e8f04d"
    cursor="pointer"
    >Case1</Text>
  <Text fontSize='xs'
    marginRight="30px" 
    padding="5px" 
    cursor="pointer"
    className="btn-chakra"
    >
    Case2</Text>
  <Text fontSize='xs'  
    padding="5px"
    cursor="pointer"
   >Case3</Text>
</Flex>
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : ''}
      </Box>
    </Box>
  );
};
export default Output;
