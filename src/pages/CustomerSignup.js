import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Center,
    Heading,
    Text,
    Link as ChakraLink,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Flex,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import DOMPurify from "dompurify";

function SignUp() {

    let navigate = useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [signupForm, setSignupForm] = useState({
        email: "",
        password: ""
    });
    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onChangeSignupForm = (e) => {
        setSignupForm({
            ...signupForm,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!isChecked) {
            setErrorMessage("Please agree to the terms and conditions.");
            return;
        }

        var data = JSON.stringify({
            "email": DOMPurify.sanitize(signupForm.email),
            "password": DOMPurify.sanitize(signupForm.password),
            "role": "CUSTOMER"
        });

        const config = {
            method: 'post',
            url: 'http://raffleshopping.com/api/auth/signup',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setSignupForm({
                    ...signupForm,
                    password: ""
                });
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
                    <FormControl mt={4}>
                        <Flex align="center" mt={4}>
                            <Checkbox
                                borderColor="primary.main"
                                isChecked={isChecked}
                                onChange={handleCheckboxChange}
                            >
                            </Checkbox>
                            <ChakraLink onClick={onOpen} color="primary.main" ml={2}>
                                I agree to the terms and conditions
                            </ChakraLink>
                        </Flex>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Terms and Conditions</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    I accept that my data will be saved and used for the purpose of this raffle.
                                </ModalBody>
                                <ModalFooter>
                                    <Button borderColor="primary.main" onClick={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </FormControl>
                    {errorMessage && <Text color="red">{errorMessage}</Text>}
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