import { FcGoogle, FcVideoProjector } from 'react-icons/fc';
import { FaFacebook, FaJira, FaTrello } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import { Box, Button, Center, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function All() {
  return (
    <Center p={8} mt={80}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        <Heading>Choose which service you want to connect</Heading>
        {/* Google */}
        <Button
          w={'full'}
          variant={'outline'}
          leftIcon={<FaJira />}
          as={Link}
          href='/connect-jira'
        >
          <Center>
            <Text>Connect Jira</Text>
          </Center>
        </Button>
        <Heading>Coming soon</Heading>

        {/* Facebook */}
        <Button
          w={'full'}
          colorScheme={'facebook'}
          leftIcon={<FaTrello />}
          isDisabled
        >
          <Center>
            <Text>Continue with Trello</Text>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button
          w={'full'}
          colorScheme={'messenger'}
          leftIcon={<SiLinkedin />}
          isDisabled
        >
          <Center>
            <Text>Continue with Linkedin</Text>
          </Center>
        </Button>

        {/* Messenger */}
        <Button
          w={'full'}
          colorScheme={'messenger'}
          leftIcon={<SiMessenger />}
          isDisabled
        >
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
}
