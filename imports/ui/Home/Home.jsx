import React, { useState } from 'react'
import './home.module.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, InputGroup, InputRightElement, Button,Select } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

import { UserCollection } from '../../api/UserCollection';
const Home = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [regE, setRegEmail] = useState('');
  const [regP, setRegP] = useState('');
  const [regRole, setRegRole] = useState('');
  
  const [email, setE] = useState('');
  const [pwd, setP] = useState('');

  const handleRegister=(e)=>{
    e.preventDefault();
    UserCollection.insert({
      role:regRole,
      email:email,
      pwd:pwd,
      createdAt:new Date()
    })
    console.log("Item added");
  }
  const handleLogin=(e)=>{

  }

  const isError=''
  return (
    <div className='main'>
      <Tabs w={'90%'} >
        <TabList >
          <Tab w={'50%'}>Login</Tab>
          <Tab w={'50%'}>SignUp</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {/* LOGIN PAGE */}
            <FormControl isInvalid={isError}>
              <FormLabel>Email</FormLabel>
              <Input type='email' value={email} onChange={(e) => setE(e.target.value) } />
              {!isError ? (<></>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={isError}>
              <FormLabel>Enter Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                  value={pwd}
                  onChange={(e) => setP(e.target.value) }
                />
                <InputRightElement width='4.5rem'>
                  <Button size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button p='1.3rem' mt={'4vh'} ml={'5%'} mr={'5%'} w={'90%'} size='lg' onClick={handleLogin}>
              LogIn
            </Button>
          </TabPanel>
          <TabPanel>
            {/* REGISTER PAGE */}
            <FormControl isInvalid={isError}>
              <FormLabel>Email</FormLabel>
              <Input type='email' value={regE} onChange={(e) => setRegEmail(e.target.value) }/>
              {!isError ? (<></>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={isError}>
              <FormLabel>Enter Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                  value={regP}
                  onChange={(e) => setRegP(e.target.value) }
                />
                <InputRightElement width='4.5rem'>
                  <Button size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl mt={'5vh'}>
              <FormLabel>Select Role</FormLabel>
              <Select placeholder='Select Role' value={regRole} onChange={(e) => setRegRole(e.target.value) }>
                <option>Admin</option>
                <option>Borrower</option>
                <option>Lender</option>
              </Select>
            </FormControl>
            <Button p='1.3rem' mt={'4vh'} ml={'5%'} mr={'5%'} w={'90%'} size='lg' onClick={handleRegister}>
              Register
            </Button>
          </TabPanel>
          
        </TabPanels>
      </Tabs>
    </div >
  )
}

export default Home
