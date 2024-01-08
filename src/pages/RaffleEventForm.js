import React, { useState } from "react";
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

function RaffleEventForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        startTime: "",
        picture: "",
        price: "",
        duration: "",
        numberOfWinners: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., save the data to your database
        console.log(formData);
    };

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check file size (max size: 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB in bytes
            if (file.size > maxSize) {
                alert("File size exceeds the maximum limit of 5MB.");
                e.target.value = "";
                return;
            }

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
                    Create Raffle Event
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
                                    maxLength={40}
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
                                    maxLength={200}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Start Date</FormLabel>
                                <Input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    borderColor="primary.main"
                                    borderWidth={2}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>End Date</FormLabel>
                                <Input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    borderColor="primary.main"
                                    borderWidth={2}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Start Time</FormLabel>
                                <Input
                                    type="time"
                                    name="startTime"
                                    value={formData.startTime}
                                    onChange={handleChange}
                                    borderColor="primary.main"
                                    borderWidth={2}
                                    maxLength={4}
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
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Price</FormLabel>
                                <Input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    borderColor="primary.main"
                                    borderWidth={2}
                                    min={0}
                                    max={999999}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Duration (minutes)</FormLabel>
                                <Input
                                    type="number"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    borderColor="primary.main"
                                    borderWidth={2}
                                    min={1}
                                    max={999999}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Number of Winners</FormLabel>
                                <Input
                                    type="number"
                                    name="numberOfWinners"
                                    value={formData.numberOfWinners}
                                    onChange={handleChange}
                                    borderColor="primary.main"
                                    borderWidth={2}
                                    min={1}
                                    max={999999}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Flex justify="center" mt={6}>
                        <Button colorScheme="blue" type="submit">
                            Create Event
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Center>
    );
}

export default RaffleEventForm;
