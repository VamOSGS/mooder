import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

export function GoogleButton() {
  return (
    <Center p={8}>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}
        as={Link}
        href='/get-started'
      >
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
  );
}
export function FacebookButton() {
  return (
    <Center p={8}>
      <Button
        w={'full'}
        maxW={'md'}
        colorScheme={'facebook'}
        leftIcon={<FaFacebook />}
        as={Link}
        href='/get-started'
      >
        <Center>
          <Text>Continue with Facebook</Text>
        </Center>
      </Button>
    </Center>
  );
}

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id='firstName' isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type='text' />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id='lastName'>
                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id='email' isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting'
                  size='lg'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  as={Link}
                  href='/get-started'
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Text as='span' color={'blue.400'}>
                    Login
                  </Text>
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <GoogleButton />
            <FacebookButton />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
