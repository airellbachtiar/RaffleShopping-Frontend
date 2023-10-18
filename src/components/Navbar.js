import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

function Navbar() {
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            bg="primary.main"
            p={4}
            boxShadow="md"
        >
            <Box>
                <Link to="/Home">
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color="background.lighter"
                    >
                        Raffle Event
                    </Text>
                </Link>
            </Box>
            <Box>
                <Link to="/">
                    <Button
                        bg="transparent"
                        color="background.lighter"
                        fontWeight="bold"
                        _hover={{ bg: 'button.secondary.hover' }}
                    >
                        Login
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
}

export default Navbar;
