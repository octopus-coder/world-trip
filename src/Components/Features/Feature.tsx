import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

interface FeatureProps {
  icon: string;
  text: string;
}

export function Feature({ icon, text }: FeatureProps) {
  const isDesktop = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isDesktop ? (
        <Image width="85px" height="85px" src={icon} mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  );
}
