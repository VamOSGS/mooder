import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const options = [
  { id: 1, desc: '1 lorem ipsum' },
  { id: 2, desc: 'Lorem, ipsum dolor.' },
  { id: 3, desc: 'Monthly Updates' },
];

const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
  onClick,
}) => {
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? '#04297A' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'purple.500';
  const bgColorDark = checked ? '#04297A' : 'gray.300';

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign='start'>
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color='green.500' />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
        <Button
          size='md'
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          onClick={onClick}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};
const ThreeTierPricingHorizontal = () => {
  const toast = useToast();
  const [isLoading, toggleLoading] = useState();
  const router = useRouter();
  return (
    <Box py={6} px={5} min={'100vh'}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>
              The Right Plan for <Text color='#04297A'>Your Business</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}
          >
            <Text textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        {isLoading ? (
          <Flex minH='500px' alignItems='center' justifyContent='center'>
            <Spinner />
          </Flex>
        ) : (
          <>
            <PackageTier
              title={'Mooder Starter'}
              typePlan='Free'
              options={options}
              onClick={() => {
                toggleLoading(true);
                setTimeout(() => {
                  toast({ title: 'Successfully Paid', status: 'success' });
                  router.push('/connect');
                }, 1000);
              }}
            />
            <Divider />
            <PackageTier
              title={'Mooder Plus'}
              checked={true}
              typePlan='$32.00'
              options={options}
              onClick={() => {
                toggleLoading(true);
                setTimeout(() => {
                  toast({ title: 'Successfully Paid', status: 'success' });
                  router.push('/connect');
                }, 1000);
              }}
            />
            <Divider />
            <PackageTier
              title={'Mooder Pro'}
              typePlan='$50.00'
              options={options}
              onClick={() => {
                toggleLoading(true);
                setTimeout(() => {
                  toast({ title: 'Successfully Paid', status: 'success' });
                  router.push('/connect');
                }, 1000);
              }}
            />
          </>
        )}
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
