import React from 'react';
import { Grid, GridItem, Box, Button, Heading, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function RaffleEventCard({ raffleEvent, onEnterDraw }) {

    const handleSubmit = (e) => {
        onEnterDraw(raffleEvent._id);
    }

    return (
        <Box
            as="article" // Use the HTML5 <article> element for accessibility
            padding={6}
            borderWidth={2}
            borderRadius="lg"
            boxShadow="md"
            bg="primary.main" // Use the primary color from the theme
            color="background.lighter" // Set the text color from the theme
            textAlign="left"
            width="30vh" // Make the card wider
            _hover={{ shadow: 'lg' }} // Add hover effect for elevation
            borderColor="primary.darker"
        >
            <Link to={`/raffle-event/${raffleEvent.id}`}
                cursor="pointer">
                <Heading size="lg" mb={2}>
                    {raffleEvent.title}
                </Heading>
                <Box>
                    <Image src={raffleEvent.pictureUrl} alt={raffleEvent.Title} />
                </Box>
                <Text fontSize="md" mb={2}>
                    €{raffleEvent.price}
                </Text>
            </Link>

            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
                <Button
                    bg="accent.main" // Use the accent color from the theme
                    color="text.darker" // Set the button text color
                    size="md"
                    onClick={handleSubmit} // Add button action
                >
                    Enter Draw
                </Button>
            </div>
        </Box>
    );
}

function RaffleEventGrid({ raffleEvents, onEnterDraw }) {
    return (
        <Grid templateColumns="repeat(auto-fill, minmax(400px, 1fr)" gap={6} padding={4}>
            {raffleEvents.map((raffleEvent) => (
                <GridItem key={raffleEvent._id}>
                    <RaffleEventCard raffleEvent={raffleEvent} onEnterDraw={onEnterDraw} />
                </GridItem>
            ))}
        </Grid>
    );
}

export default RaffleEventGrid;
