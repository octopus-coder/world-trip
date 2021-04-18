import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Banner } from '../Components/Banner';
import { Features } from '../Components/Features';
import { Header } from '../Components/Header';
import Separator from '../Components/Separator';
import Slider from '../Components/Slider';

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Features />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamoss nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  );
}
