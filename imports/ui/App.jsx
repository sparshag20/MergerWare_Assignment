// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hello from './Hello';
import { Info } from './Info';
import Home from './Home/Home';
import { ChakraProvider } from '@chakra-ui/react'
export const App = () => (
  <ChakraProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/hello" element={<Home/>} />
    </Routes>
  </BrowserRouter>
  </ChakraProvider>
);
