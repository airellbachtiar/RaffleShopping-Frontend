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
import { auth } from '../auth/firebase.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import DOMPurify from "dompurify";
import { useAuth } from '../auth/AuthContext';

function CustomerLogin() {

    let navigate = useNavigate();

    const { login } = useAuth();
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const onChangeLoginForm = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        var data = JSON.stringify({
            "email": DOMPurify.sanitize(loginForm.email),
            "password": DOMPurify.sanitize(loginForm.password)
        });

        signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
            .then((reply) => {
                console.log(reply.user.accessToken);
                const config = {
                    method: 'post',
                    url: 'http://raffleshopping.com/api/auth/login',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + reply.user.accessToken
                    },
                    data: data
                };
                axios(config)
                    .then(() => {
                        login(reply.user.accessToken);
                        navigate("/Home");
                    })
                    .catch((error) => {
                        setErrorMessage(error.message);
                        setLoginForm({
                            ...loginForm,
                            password: ""
                        })
                    });
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setLoginForm({
                    ...loginForm,
                    password: ""
                })
            }
            );
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
                            maxLength={100}
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
                            maxLength={100}
                        />
                    </FormControl>
                    {errorMessage && <Text color="red">{errorMessage}</Text>}
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