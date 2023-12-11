import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Grid,
    GridItem,
    Flex,
    Center
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

function RaffleEventForm() {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        picture: "",
        price: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var data = JSON.stringify({
            "Title": DOMPurify.sanitize(formData.title),
            "Description": DOMPurify.sanitize(formData.description),
            "Price": DOMPurify.sanitize(formData.price),
            "Picture": DOMPurify.sanitize(formData.picture),
        });

        const config = {
            method: 'post',
            url: 'http://raffleshopping.com/api/catalogs',
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
            .catch(function (e) {
                console.log(e);
            });
    };

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setFormData({ ...formData, picture: event.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Center minH="80vh">
            <Box p={4} maxWidth="800px"
                bg="background.darker"
                borderRadius="lg"
                boxShadow="xl">
                <Heading as="h2" size="lg" mb={4}>
                    Create Catalog
                </Heading>
                <form onSubmit={handleSubmit}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    borderColor="primary.main"
                                    borderWidth={2}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    borderColor="primary.main"
                                    borderWidth={2}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Upload Picture</FormLabel>
                                <Input
                                    type="file"
                                    name="picture"
                                    onChange={handlePictureChange}
                                    accept=".png, .jpg, .jpeg, .gif, .bmp, .svg, .webp, .tiff, .ico"
                                    borderColor="transparent"
                                    _hover="transparent"
                                    borderWidth={2}
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Price (€)</FormLabel>
                                <Input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    borderColor="primary.main"
                                    borderWidth={2}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Flex justify="center" mt={6}>
                        <Button colorScheme="blue" type="submit">
                            Create Catalog
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Center>
    );
}

export default RaffleEventForm;
