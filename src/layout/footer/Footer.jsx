import React from 'react';
import {
  Box,
  Text,
  Link,
  HStack,
  VStack,
  Grid,
  Heading,
  Image,
  Separator,
  Spacer,
} from '@chakra-ui/react';
import {
  RiArrowDownLine,
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterLine,
  RiTwitterXLine,
} from '@remixicon/react';

const Footer = () => {
  return (
    <Grid
      pos={'relative'}
      px={['32px', '32px', '48px', '48px', '64px', '64px']}
      zIndex={12}
      backgroundColor='#00124d'
      backgroundSize={'cover'}
      templateColumns={['1fr', '1fr', '1fr', '1fr 2fr', '1fr 2fr', '1fr 2fr']}
      py={8}
      pb={2}
      gap={3}>
      <HStack
        pb={16}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-start'}>
        <Image src='./assets/msl-25-logo.png' w={'50%'} />
        {/* <HStack w={'70%'}>
          <Heading
            textAlign={'end'}
            w={'100%'}
            color='white'
            className='comfortaa'
            textTransform='capitalize'
            fontSize={18}>
            Get in Touch
          </Heading>
          <RiArrowDownLine widths={'100%'} />
        </HStack> */}
      </HStack>
      <VStack
        gap={2}
        align='start'
        ml={['0px', '100px']}
        display={'flex'}
        alignItems={'flex-end'}
        justifyContent={'flex-end'}>
        <HStack
          w={'100%'}
          spacing={4}
          gap={5}
          wrap='wrap'
          lineHeight={0.9}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Link
            textAlign={'center'}
            className='comfortaa'
            textTransform='lowercase'
            href=''
            color='blue.300'
            fontSize={{ base: '20px', md: '36px' }}
            zIndex={2}>
            xyz@abc.com
          </Link>
          <Spacer />
          <Link
            className='comfortaa'
            textTransform='capitalize'
            href='#'
            color='orange.200'
            fontSize='18px'
            zIndex={2}>
            <RiInstagramLine />
          </Link>
          <Link
            className='comfortaa'
            textTransform='capitalize'
            href='#'
            color='orange.200'
            fontSize='18px'
            zIndex={2}>
            <RiTwitterXLine />
          </Link>
          <Link
            className='comfortaa'
            textTransform='capitalize'
            href='#'
            color='orange.200'
            fontSize='18px'
            zIndex={2}>
            <RiFacebookLine />
          </Link>
        </HStack>
        <VStack
          w={'100%'}
          lineHeight={0.9}
          alignItems={'flex-end'}
          pt={12}
          justifyContent={'flex-end'}
          display={'flex'}>
          <HStack gap={4} fontWeight={300} w={'100%'}>
            <Link
              className='comfortaa'
              textTransform='capitalize'
              color='gray.400'
              fontSize='14px'
              zIndex={2}>
              COOKIE POLICY
            </Link>
            <Spacer />
            <Link
              className='comfortaa'
              textTransform='capitalize'
              color='gray.400'
              fontSize='14px'
              zIndex={2}>
              PRIVACY POLICY
            </Link>
          </HStack>
          <Separator w={'100%'} />
          <Link
            w={'100%'}
            textAlign={'center'}
            py={5}
            className='gothic'
            textTransform='capitalize'
            color='gray.300'
            fontSize='24px'
            zIndex={2}
            pointerEvents={'none'}
            fontWeight={900}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2025 | MSL INDIA
          </Link>
        </VStack>
      </VStack>
    </Grid>
  );
};

export default Footer;
