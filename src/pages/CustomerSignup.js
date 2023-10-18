import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Center,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <Center minH="80vh">
            <Box
                bg="background.darker"
                w="350px"
                p="20px"
                borderRadius="lg"
                boxShadow="xl"
            >
                <Heading as="h2" size="lg" mb={4}>Sign Up</Heading>
                <form>
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" name="email" 
                        borderColor="primary.main"
                        borderWidth={2}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password" 
                        borderColor="primary.main"
                        borderWidth={2}
                        />
                    </FormControl>
                    <Button
                        backgroundColor="accent.main"
                        color="text.darker"
                        size="md"
                        marginTop={4}
                    >
                        Sign Up
                    </Button>
                </form>

                <Text mt={2} fontSize="sm">
                    Already have an account?{" "}
                    <ChakraLink as={Link} to="/" color="accent.main">
                        Login
                    </ChakraLink>
                </Text>
            </Box>
        </Center>
    );
}

export default SignUp;