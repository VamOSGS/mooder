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

const OPTIONS = [
  [{ id: 1, desc: '                          14 day free trial' }],
  [{ id: 1, desc: 'For companies which has up to 100 employees' }],
  [{ id: 1, desc: 'For companies which has more than 100 employees' }],
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
              Choose your plan to prevent your employees burnout
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
              options={OPTIONS[0]}
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
              title={'Mooder Mini'}
              checked={true}
              typePlan='$90.00'
              options={OPTIONS[1]}
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
              title={'Mooder Maxi'}
              typePlan='$150.00'
              options={OPTIONS[2]}
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
