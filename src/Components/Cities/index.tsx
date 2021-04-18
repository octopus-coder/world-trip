import { Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import City from './Citiy';

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={['2xl', '4xl']} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['30px', '0']}
      >
        <City
          city="Londres"
          country="Reino Unido"
          flag="/london_flag.png"
          picture="/london.png"
        />
        <City
          city="Paris"
          country="Francia"
          flag="/paris_flag.png"
          picture="/paris.png"
        />
        <City
          city="Roma"
          country="Italia"
          flag="/rome_flag.png"
          picture="/rome.png"
        />
        <City
          city="Praga"
          country="Republica Checa"
          flag="/praga_flag.png"
          picture="/praga.png"
        />
        <City
          city="Amsterdam"
          country="Holanda"
          flag="/amsterdam_flag.png"
          picture="/amsterdam.png"
        />
      </Grid>
    </>
  );
}
