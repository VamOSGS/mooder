import ThreeTierPricingHorizontal from '@/components/Pricing';
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

export default function GetStarted() {
  return (
    <Box mt={150}>
      <Heading textAlign='center' mb={16} fontSize={'5xl'}>
        Choose your plan
      </Heading>
      <ThreeTierPricingHorizontal />
    </Box>
  );
}
