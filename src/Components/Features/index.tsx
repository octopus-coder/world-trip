import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Feature } from './Feature';

export function Features(): JSX.Element {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Feature text="vida noturna" icon="/cocktail.svg" />
      </GridItem>
      <GridItem>
        <Feature text="praia" icon="/surf.svg" />
      </GridItem>
      <GridItem>
        <Feature text="moderno" icon="/building.svg" />
      </GridItem>
      <GridItem>
        <Feature text="clássico" icon="/museum.svg" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Feature text="e mais..." icon="/earth.svg" />
      </GridItem>
    </Grid>
  );
}
