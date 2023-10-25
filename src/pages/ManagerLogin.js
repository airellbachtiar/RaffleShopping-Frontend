// ManagerLogin.js
import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Center,
    Heading, // Import Heading for the title
} from "@chakra-ui/react";

function ManagerLogin() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle manager login logic here
    };

    return (
        <Center minH="80vh">
            <Box
                bg="background.darker"
                w="350px"
                p="20px"
                borderRadius="lg"
                boxShadow="xl"
            >
                <Heading as="h2" size="lg" mb={4}>Manager Login</Heading> {/* Add the title */}
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            bg="neutral.lighter"
                            borderColor="primary.main"
                            borderWidth={2}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            bg="neutral.lighter"
                            borderColor="primary.main"
                            borderWidth={2}
                        />
                    </FormControl>
                    <Button
                        backgroundColor="accent.main"
                        type="submit"
                        colorScheme="primary.main" // Change the button color to blue
                        mt={4}
                        w="100%"
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Center>
    );
}

export default ManagerLogin;
