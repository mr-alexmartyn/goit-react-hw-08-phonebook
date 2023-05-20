import React from 'react';
import { useSelector } from 'react-redux';
import { getUserEmail } from 'redux/AuthSlise';
import { useUserLogoutMutation } from 'redux/AuthApi';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

function UserMenu() {
  const email = useSelector(getUserEmail);
  const [userLogout] = useUserLogoutMutation();

  return (
    <Box>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize="20px" color="blue" as="u" mr={10}>
          Hey! {email}
        </Text>
        <Button
          type="button"
          onClick={() => {
            userLogout();
          }}
        >
          LogOut
        </Button>
      </Flex>
    </Box>
  );
}

export default UserMenu;
