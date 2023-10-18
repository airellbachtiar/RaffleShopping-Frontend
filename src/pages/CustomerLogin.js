import React, { useState } from "react";
import axios from "axios";
import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Box,
    Center,
    Heading,
    Text,
    Link as ChakraLink
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

function CustomerLogin() {

    let navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const onChangeLoginForm = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        var data = JSON.stringify({
            "email": loginForm.email,
            "password": loginForm.password
        });

        const config = {
            method: 'post',
            url: 'http://localhost:50000/api/auth/login',
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
                setLoginForm({
                    ...loginForm,
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
                <Heading as="h2" size="lg" mb={4}>Login</Heading>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={loginForm.email}
                            onChange={onChangeLoginForm}
                            borderColor="primary.main"
                            borderWidth={2}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            value={loginForm.password}
                            onChange={onChangeLoginForm}
                            borderColor="primary.main"
                            borderWidth={2}
                        />
                    </FormControl>
                    <Button
                        backgroundColor="accent.main"
                        color="text.darker"
                        size="md"
                        onClick={handleSubmit}
                        marginTop={4}
                    >
                        Login
                    </Button>
                </form>

                <Text mt={2} fontSize="sm">
                    Don't have an account?{" "}
                    <ChakraLink
                        as={Link}
                        to="/Signup"
                        color="accent.main"
                        _hover={{ textDecoration: "underline" }}
                    >
                        Sign Up
                    </ChakraLink>
                </Text>
            </Box>
        </Center>
    );
}

export default CustomerLogin;