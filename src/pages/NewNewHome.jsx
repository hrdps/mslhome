import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Spacer,
  Span,
  VStack,
} from '@chakra-ui/react';
import {
  RiArrowDownCircleFill,
  RiArrowRightUpFill,
  RiArrowRightUpLine,
  RiArrowUpCircleFill,
  RiPlayLine,
} from '@remixicon/react';
import React, { useEffect, useRef, useState } from 'react';
import MarqueeComponent from '../layout/secondFold/MarqueeComponent';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const sent = [
  { text: 'build corporate reputation?', src: './assets/contact-1.webp' },
  {
    text: 'localize your global communications strategy?',
    src: './assets/contact-2.gif',
  },
  { text: 'rebuild trust post crisis?', src: './assets/contact-3.gif' },
  {
    text: 'understand what people think about you amplify executive visibility?',
    src: './assets/contact-4.webp',
  },
  { text: 'build corporate reputation?', src: './assets/contact-1.webp' },
  {
    text: 'localize your global communications strategy?',
    src: './assets/contact-2.gif',
  },
  { text: 'rebuild trust post-crisis?', src: './assets/contact-3.gif' },
  {
    text: 'understand what people think about you amplify executive visibility?',
    src: './assets/contact-4.webp',
  },
];

const NewNewHome = () => {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const partner1 = useRef(null);
  const partner2 = useRef(null);
  const partner3 = useRef(null);
  const partner4 = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP, ScrambleTextPlugin);
  const [windowSize, setWindowSize] = useState('380px');
  useGSAP(() => {
    const partnerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#partner_div',
        scroller: 'body',
        markers: false, // Debug markers
        start: 'top 60%  ',
        end: 'top 50%',
        scrub: 3, // Smooth scrolling effect
        pin: false, // Pin the trigger element
        ease: 'power4',
      },
    });
    partnerTimeline
      .to(partner1.current, {
        transform: 'translate(0%,0%)',
      })
      .to(partner2.current, {
        transform: 'translate(0%,0%)',
      })
      .to(partner3.current, {
        transform: 'translate(0%,0%)',
      })
      .to(partner4.current, {
        transform: 'translate(0%,0%)',
      });
  });

  useEffect(() => {
    if (window.innerWidth < 431) {
      setWindowSize(`${window.innerWidth}px`);
    }
    const tl3 = gsap.timeline({ repeat: -1, delay: 0.5 });
    sent.forEach((item) => {
      tl3.add(() => {
        textRef.current.textContent = ''; // Reset manually
      });
      tl3.to(textRef.current, {
        duration: 1.2,
        scrambleText: {
          text: item.text,
          chars: 'abcdefghijklmnopqrstuvwxyz0123456789',
          rightToLeft: true,
          speed: 1.2,
        },
        onComplete: () => {
          textRef1.current.style.backgroundImage = `url(${item.src})`;
        },
      });

      // Add a hold time after text settles
      tl3.to({}, { duration: 4 });
    });
    return () => {
      tl3.kill(); // ✅ Cleanup to prevent memory leaks
    };
  }, [sent]);
  return (
    <VStack w={windowSize} py={4} pt={'80px'} bgColor={'black'} px={4} gap={4}>
      <VStack
        border={'1px solid rgb(47, 47, 47)'}
        w={'100%'}
        display={'flex'}
        justifyContent={'flex-end'}
        h={'50vh'}
        bgColor={'chocolate'}
        borderRadius={10}
        bg={'url(./assets/bg_vid.webp)'}
        bgSize={'cover'}
        bgPos={'center right'}
        px={4}>
        <Heading
          zIndex={99}
          w={'100%'}
          color={'white'}
          opacity={1}
          className='gothic h1 text'
          fontSize={30}
          lineHeight={'1.3'}
          fontWeight={'900'}>
          The solution often turns out more beautiful than the puzzle.
        </Heading>
        <Heading
          w={'100%'}
          color={'white'}
          className='comfortaa'
          fontSize={16}
          fontStyle={'italic'}>
          Richard Dawkins
        </Heading>
        <HStack
          w={'100%'}
          py={4}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Button
            variant={'outline'}
            className='gothic'
            py={4}
            w={'100%'}
            color={'white'}
            fontSize={20}
            borderColor={'#FF8C5F'}>
            <RiPlayLine size={40} color='#6692FF' />
            Play Reel
          </Button>
        </HStack>
      </VStack>
      <VStack
        w={'100%'}
        display={'flex'}
        justifyContent={'flex-end'}
        bgColor={'chocolate'}
        borderRadius={10}
        bg={'url(./assets/bg_clients.gif)'}
        bgSize={'cover'}
        bgPos={'center right'}
        px={4}>
        <MarqueeComponent />
      </VStack>
      <VStack
        borderRadius={10}
        w={'100%'}
        display={'flex'}
        alignItems={'flex-start'}
        bg={'url(./assets/bg_msl.gif)'}
        bgSize={'cover'}
        bgPos={'center right'}>
        <VStack
          bgColor={'black'}
          w={'135px'}
          h={'46px'}
          display={'flex'}
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          className='inverted-border-radius'
          pos={'relative'}
          top={0}
          left={0}
          zIndex={99}
          borderRadius={'10px 0px 10px 0px'}>
          <Image zIndex={100} src={'./assets/msl-25-logo.png'} w={'130px'} />
        </VStack>
        <VStack w={'100%'} px={4}>
          <Heading
            className='comfortaa'
            py={5}
            zIndex={99}
            color={'whiteAlpha.800'}
            fontWeight={300}
            fontSize={20}
            lineHeight={'1.2'}
            mixBlendMode={'difference'}>
            A strategic communication partner. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Heading>
          <HStack w={'100%'} py={4}>
            <Heading
              pb={2}
              textAlign={'start'}
              color={'white'}
              className='gothic'
              fontWeight={'900'}
              fontSize={24}
              w={'70%'}
              lineHeight={'1.3'}>
              Learn More
            </Heading>
            <Spacer />
            <RiArrowRightUpLine color='white' size={30} />
          </HStack>
        </VStack>
      </VStack>
      <VStack
        border={'1px solid white'}
        w={'100%'}
        display={'flex'}
        justifyContent={'flex-end'}
        h={'50vh'}
        bgColor={'chocolate'}
        ref={textRef1}
        borderRadius={10}
        bg={'url(./assets/bg_vid.webp)'}
        bgSize={'cover'}
        bgPos={'center right'}
        px={4}>
        <Heading
          minH={'150px'}
          id='scroll_text'
          fontWeight={'bolder'}
          fontSize={26}
          w={'100%'}
          className='gothic'
          color={'white'}
          mixBlendMode={'difference'}>
          Are you looking to <Span ref={textRef}></Span>
        </Heading>
        <HStack w={'100%'} py={4}>
          <Heading
            pb={2}
            textAlign={'start'}
            color={'blue.300'}
            className='gothic'
            fontWeight={'900'}
            fontSize={24}
            w={'70%'}
            lineHeight={'1.3'}>
            Contact Us
          </Heading>
          <Spacer />
          <RiArrowRightUpLine color='#a3cfff' size={30} />
        </HStack>
      </VStack>
      <VStack
        w={'100%'}
        bg={'url(./assets/cs_bg.gif)'}
        bgSize={'cover'}
        bgPos={'top left'}
        py={4}
        borderRadius={10}>
        <Heading className='gothic' fontSize={24}>
          Case Studies
        </Heading>
      </VStack>
      <HStack w={'100%'} gap={5}>
        <VStack
          w={'100%'}
          bgColor={'#3b3541'}
          borderRadius={10}
          gap={0}
          border={'1px solid #3b3541'}>
          <Image
            src='./assets/sushthehush.jpg'
            borderRadius={'10px 10px 0 0'}
          />
          <Heading
            py={4}
            px={2}
            w={'100%'}
            className='comfortaa'
            fontSize={18}
            fontWeight={'900'}>
            Making a loud statement with #SushTheHush
          </Heading>
          <HStack
            w={'100%'}
            display={'flex'}
            alignItems={'center'}
            px={2}
            py={4}>
            <Heading
              textAlign={'start'}
              color={'white'}
              className='gothic'
              fontWeight={'400'}
              fontSize={16}
              lineHeight={'1.3'}>
              Digital Brand
              <br />
              /Rebrand
            </Heading>
            <Spacer />
            <RiArrowRightUpLine color='white' size={24} />
          </HStack>
        </VStack>
        <VStack
          w={'100%'}
          bgColor={'#3b3541'}
          borderRadius={10}
          gap={0}
          border={'1px solid #3b3541'}>
          <Image src='./assets/greendot.png' borderRadius={'10px 10px 0 0'} />
          <Heading
            py={4}
            px={2}
            w={'100%'}
            className='comfortaa'
            fontSize={18}
            fontWeight={'900'}>
            #TheGreenDot turns lorem ipsum.
          </Heading>
          <HStack
            w={'100%'}
            display={'flex'}
            alignItems={'center'}
            px={2}
            py={4}>
            <Heading
              textAlign={'start'}
              color={'white'}
              className='gothic'
              fontWeight={'400'}
              fontSize={16}
              lineHeight={'1.3'}>
              Social Media
              <br />
              /Digital
            </Heading>
            <Spacer />
            <RiArrowRightUpLine color='white' size={24} />
          </HStack>
        </VStack>
      </HStack>
      <VStack
        w={'100%'}
        display={'flex'}
        justifyContent={'flex-end'}
        borderRadius={10}
        bg={'url(./assets/earth.gif)'}
        bgSize={'cover'}
        bgPos={'center center'}
        px={4}
        py={4}
        pt={8}>
        <HStack gap={4} px={5} id='partner_div' zIndex={'100'}>
          <Container
            ref={partner1}
            bgColor={'white'}
            zIndex={9}
            transform={'translate(50%,50%)'}
            w={'45%'}
            border={'1px solid #dbdbdb'}
            borderRadius={10}
            py={2}
            shadow={'xs'}>
            <Image src='./assets/msl-logo-gray.png' />
          </Container>
          <Container
            ref={partner2}
            bgColor={'white'}
            zIndex={8}
            transform={'translate(-65%,52%)'}
            w={'45%'}
            shadow={'xs'}
            border={'1px solid #dbdbdb'}
            borderRadius={10}
            py={2}>
            <Image src='./assets/pca-logo-white.png' />
          </Container>
        </HStack>
        <HStack gap={5} px={5} py={3} pb={5} zIndex={'90'}>
          <Container
            ref={partner3}
            transform={'translate(54%,-62%)'}
            bgColor={'white'}
            zIndex={7}
            w={'45%'}
            shadow={'xs'}
            border={'1px solid #dbdbdb'}
            borderRadius={10}
            py={2}>
            <Image src='./assets/2020-msl-logo-white.png' />
          </Container>
          <Container
            ref={partner4}
            transform={'translate(-66%,-66%)'}
            bgColor={'white'}
            zIndex={6}
            w={'45%'}
            shadow={'xs'}
            border={'1px solid #dbdbdb'}
            borderRadius={10}
            py={2}>
            <Image src='./assets/organics.png' />
          </Container>
        </HStack>
        <HStack w={'100%'}>
          <Heading
            pb={2}
            textAlign={'start'}
            color={'orange.300'}
            className='gothic'
            fontWeight={'900'}
            fontSize={24}
            w={'70%'}
            lineHeight={'1.3'}>
            Integrated Communication
            <br />
            Partner
          </Heading>
          <Spacer />
          <RiArrowRightUpLine color='#fdba74' size={30} />
        </HStack>
      </VStack>
      <VStack
        w={'100%'}
        borderRadius={10}
        px={4}
        py={4}
        bg={'url(./assets/cta.gif)'}
        bgSize={'cover'}
        bgPos={'center center'}>
        <HStack w={'100%'}>
          <Heading
            py={2}
            textAlign={'start'}
            color={'#e36079'}
            className='gothic'
            fontWeight={'900'}
            fontSize={24}
            w={'70%'}
            lineHeight={'1.3'}>
            Get in Touch
            <br />
            CTA
          </Heading>
          <Spacer />
          <RiArrowRightUpLine color='#e36079' size={30} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default NewNewHome;
