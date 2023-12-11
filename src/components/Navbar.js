import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useAuth } from '../auth/AuthContext';

function Navbar() {
    const { isAuthenticated, logout, deleteAccount } = useAuth();
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
                {isAuthenticated ? (
                    <>
                    <Button
                        bg="transparent"
                        color="red"
                        fontWeight="bold"
                        _hover={{ bg: 'button.secondary.hover' }}
                        onClick={deleteAccount} // Call the logout function on click
                    >
                        Delete Account
                    </Button>
                    <Button
                        bg="transparent"
                        color="background.lighter"
                        fontWeight="bold"
                        _hover={{ bg: 'button.secondary.hover' }}
                        onClick={logout} // Call the logout function on click
                    >
                        Logout
                    </Button>
                    </>
                    
                ) : (
                    // If user is not authenticated, show the "Login" button
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
                )}
            </Box>
        </Flex>
    );
}

export default Navbar;
