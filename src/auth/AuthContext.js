import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');

        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (token) => {
        Cookies.set('token', token, { expires: 2 });
        setIsAuthenticated(true);
    };

    const logout = () => {
        Cookies.remove('token');
        setIsAuthenticated(false);
    };

    const deleteAccount = () => {
        const config = {
            method: 'delete',
            url: 'http://raffleshopping.com/api/auth',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        };

        axios(config)
            .then(() => {
                Cookies.remove('token');
                setIsAuthenticated(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, deleteAccount }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);