import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './Component/DasboardComponent/Dashboard';
import WaterReminder from './Component/DasboardComponent/WaterReminder';
import CheckupDate from './Component/DasboardComponent/SetReminder/CheckupDate';

const RoutesComponents = () => {
  return (
    <ChakraProvider>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='/drink' element={<WaterReminder />} />
        <Route path='/checkups' element={<CheckupDate />} />
    </Routes>
    </ChakraProvider>
  )
}

export default RoutesComponents