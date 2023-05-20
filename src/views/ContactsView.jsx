import React from 'react';
import { Navigate } from 'react-router-dom';
import Filter from 'Components/Filter';
import ContactList from 'Components/ContactList';
import ContactForm from 'Components/ContactForm';
import { Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/AuthSlise';
import { Box } from '@chakra-ui/react';

function ContactsView(props) {
  const isLogdedin = useSelector(getLoggedin);
  return (
    <Box w="400px" mx="auto" my="6">
      {!isLogdedin && <Navigate to="/" replace={true} />}
      <Heading mb={5}>Phonebook</Heading>
      <ContactForm />
      <Heading mb={5}>Contacts</Heading>
      <Filter />
      <ContactList />
    </Box>
  );
}

export default ContactsView;
