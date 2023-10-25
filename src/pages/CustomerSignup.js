import React, { useState } from "react";
import axios from "axios";
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
import { useNavigate, Link } from "react-router-dom";

function SignUp() {

    let navigate = useNavigate();

    const [signupForm, setSignupForm] = useState({
        email: "",
        password: ""
    });

    const onChangeSignupForm = (e) => {
        setSignupForm({
            ...signupForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        var data = JSON.stringify({
            "email": signupForm.email,
            "password": signupForm.password
        });

        const config = {
            method: 'post',
            url: 'http://localhost:50000/api/auth/signup',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            data: data
        };

        axios(config)
            .then(function () {
                navigate("/Home");
            })
            .catch(function () {
                setSignupForm({
                    ...signupForm,
                    password: ""
                })
            });
    }

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
                        value={signupForm.email}
                        onChange={onChangeSignupForm}
                        borderColor="primary.main"
                        borderWidth={2}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password" 
                        value={signupForm.password}
                        onChange={onChangeSignupForm}
                        borderColor="primary.main"
                        borderWidth={2}
                        />
                    </FormControl>
                    <Button
                        backgroundColor="accent.main"
                        color="text.darker"
                        size="md"
                        marginTop={4}
                        onClick={handleSubmit}
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