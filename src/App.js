import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerLogin from './pages/CustomerLogin';
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import Theme from "./components/Theme";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ManagerLogin from './pages/ManagerLogin';
import CustomerSignup from './pages/CustomerSignup';
import ManagerHome from './pages/ManagerHome';
import RaffleEventForm from "./pages/RaffleEventForm";
import CatalogForm from "./pages/CatalogForm";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <CSSReset />
      <Box
        bg="primary.lighter"  // Set the background color to Midnight Blue
        color="text.main"      // Set the text color to White
        minHeight="100vh"      // Ensure the background color covers the entire viewport
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<CustomerLogin />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ManagerLogin" element={<ManagerLogin />} />
          <Route path="/Signup" element={<CustomerSignup />} />
          <Route path="/ManagerHome" element={<ManagerHome />} />
          <Route path="/RaffleEventForm" element={<RaffleEventForm />} />
          <Route path="/CatalogForm" element={<CatalogForm />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
