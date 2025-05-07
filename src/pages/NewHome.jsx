import {
  Container,
  Heading,
  HStack,
  Image,
  Separator,
  Spacer,
  Span,
  VStack,
} from '@chakra-ui/react';
import {
  RiArrowRightBoxLine,
  RiArrowRightUpLine,
  RiDoubleQuotesL,
  RiDoubleQuotesR,
  RiPlayLine,
} from '@remixicon/react';
import React, { useState } from 'react';
import { animate, stagger } from 'motion';
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarqueeComponent from '../layout/secondFold/MarqueeComponent';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

const sent = [
  { text: 'build corporate reputation?', src: './assets/scroll-1.png' },
  {
    text: 'localize your global communications strategy?',
    src: './assets/scroll-2.png',
  },
  { text: 'rebuild trust post crisis?', src: './assets/scroll-3.png' },
  {
    text: 'understand what people think about you amplify executive visibility?',
    src: './assets/scroll-4.jpg',
  },
  { text: 'build corporate reputation?', src: './assets/scroll-1.png' },
  {
    text: 'localize your global communications strategy?',
    src: './assets/scroll-2.png',
  },
  { text: 'rebuild trust post-crisis?', src: './assets/scroll-3.png' },
  {
    text: 'understand what people think about you amplify executive visibility?',
    src: './assets/scroll-4.jpg',
  },
];

const NewHome = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const partner1 = useRef(null);
  const partner2 = useRef(null);
  const partner3 = useRef(null);
  const partner4 = useRef(null);
  const [windowSize, setWindowSize] = useState('380px');
  gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText, ScrambleTextPlugin);
  useGSAP(() => {
    const horzaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#msl_logo_home',
        scroller: 'body',
        markers: false, // Debug markers
        start: 'top 70%  ',
        end: 'top 70%',
        scrub: 3, // Smooth scrolling effect
        pin: true, // Pin the trigger element
      },
    });

    horzaTimeline
      .to('#msl_logo_home', {
        scale: 1.7,
        filter: 'grayscale(0%) drop-shadow(2px 2px 2px #bfbfbf)',
      })
      .to('#msl_logo_home_seperator', {
        margin: '24px 0px',
      });

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
    console.log(window.innerWidth);

    if (window.innerWidth < 431) {
      setWindowSize(`${window.innerWidth}px`);
    }
    let split, animation;
    setTimeout(() => {
      gsap.to('.text', { opacity: 1 });
      animation && animation.revert();
      animation = gsap.from(split.chars, {
        x: -150,
        opacity: 0,
        duration: 0.7,
        ease: 'power4',
        stagger: 0.04,
      });
    }, 1000);
    function setup() {
      split && split.revert();
      animation && animation.revert();
      split = SplitText.create('.text', { type: 'chars,words,lines' });
    }
    setup();
    window.addEventListener('resize', setup);

    const tl = gsap.timeline({ repeat: -1 });

    // sent.forEach((tex, index) => {
    //   gsap.to(textRef, {
    //     duration: 5,
    //     delay: 1.5,
    //     scrambleText: {
    //       text: tex.text,
    //       rightToLeft: true,
    //       chars: 'lowercase',
    //     },
    //   });

    //   //   tl.to([textRef.current, textRef2.current], {
    //   //     opacity: 0,
    //   //     duration: 0.1,
    //   //     onComplete: () => {
    //   //       textRef.current.textContent = tex.text;
    //   //       document.getElementById('scroll_text_image').src = tex.src;
    //   //     },
    //   //   })
    //   //     .to([textRef.current, textRef2.current], { x: 0, opacity: 0 })
    //   //     .to([textRef.current, textRef2.current], {
    //   //       opacity: 1,
    //   //       duration: 0.2,
    //   //       delay: 0.2, // visible duration
    //   //     })
    //   //     .to({}, { duration: 5 })
    //   //     .to([textRef.current, textRef2.current], {
    //   //       x: -150,
    //   //       opacity: 0,
    //   //       duration: 0.3,
    //   //     });
    // });

    const tl3 = gsap.timeline({ repeat: -1, delay: 0.5 });

    sent.forEach((item) => {
      tl3.to(textRef.current, {
        duration: 1.2,
        scrambleText: {
          text: item.text,
          chars: '935абвгыодаокрвы',
          rightToLeft: true,
          speed: 1.2,
        },
      });

      // Add a hold time after text settles
      tl3.to({}, { duration: 4 });
    });
  }, []);

  return (
    <VStack w={'100vw'} gap={0}>
      <VStack
        w={windowSize}
        bg={'lightgrey'}
        minH={'100vh'}
        pt={'64px'}
        gap={0}>
        <VStack
          bg={'white'}
          w={'100%'}
          h={'55vh'}
          display={'flex'}
          justifyContent={'center'}>
          <VStack
            mt={'-32px'}
            display={'flex'}
            alignItems={'flex-start'}
            justifyContent={'center'}
            w={'100%'}></VStack>
          <VStack w={'100%'} className='container'>
            <Heading
              px={5}
              w={'100%'}
              color={'blackAlpha.800'}
              opacity={0}
              className='gothic h1 text'
              fontSize={38}
              lineHeight={'1.2'}
              textTransform={'uppercase'}
              fontWeight={'900'}>
              The <Span color={'#FF8C5F'}>solution</Span> often turns out more{' '}
              <Span color={'#082992'} fontSize={38}>
                beautiful
              </Span>{' '}
              than the <Span color={'#6692FF'}>puzzle</Span>.
            </Heading>
          </VStack>
          <HStack
            gap={0}
            px={5}
            w={'100%'}
            display={'flex'}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}>
            <Heading
              color={'black'}
              className='comfortaa'
              fontSize={16}
              fontStyle={'italic'}>
              Richard Dawkins
            </Heading>
          </HStack>
        </VStack>
        <VStack
          w={'100%'}
          h={'50vh'}
          gap={0}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}>
          <video
            autoPlay
            loop
            muted
            playsInline
            id='bg_video'
            width={windowSize}>
            <source src='./assets/bg_vid.mp4' type='video/mp4' />
          </video>
          <VStack
            h={'50vh'}
            gap={0}
            pos={'absolute'}
            bgColor={'blackAlpha.700'}
            w={'100%'}>
            <HStack h={'100%'} gap={0} cursor={'pointer'}>
              <RiPlayLine color={'#ff8c5f'} size={36} />
              <Heading
                fontSize={24}
                color={'white'}
                className='gothic'
                mixBlendMode={'difference'}>
                Play Reel
              </Heading>
            </HStack>
          </VStack>
        </VStack>
        <VStack w={'100%'} bgColor={'white'} py={'64px'} px={5}>
          <Image
            zIndex={999}
            py={5}
            src='./assets/msl-25-logo-black.png'
            id='msl_logo_home'
            w={'50%'}
            filter={'grayscale(100%)'}
          />
          <Separator
            w={'100%'}
            id='msl_logo_home_seperator'
            margin='12px 0px'
            borderColor={'blackAlpha.300'}
          />
          <Heading
            className='comfortaa'
            color={'black'}
            fontWeight={'bolder'}
            fontSize={24}
            lineHeight={'1.2'}>
            A strategic communication partner. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Heading>
        </VStack>
        <Separator width={'100%'} mx={5} borderColor={'blackAlpha.300'} />
        <VStack w={'100%'} bgColor={'white'} py={'64px'}>
          <Heading
            minH={'120px'}
            px={5}
            id='scroll_text'
            fontWeight={'bolder'}
            fontSize={24}
            w={'100%'}
            className='comfortaa'
            color={'blackAlpha.800'}>
            Are you looking to <Span ref={textRef}></Span>
          </Heading>
          <Image
            height={'auto'}
            ref={textRef2}
            w={'100%'}
            src='./assets/scroll-4.jpg'
          />
          <HStack w={'100%'} bgColor={'white'} px={5} pt={10}>
            <Heading
              w={'100%'}
              color={'blackAlpha.800'}
              className='gothic'
              fontSize={30}>
              Contact Us
            </Heading>
            <Spacer />
            <RiArrowRightUpLine color='black' size={30} />
          </HStack>
        </VStack>
        <Separator
          style={{ width: 'calc(100% - 40px)' }}
          borderColor={'blackAlpha.300'}
        />
        <VStack w={'100%'} bgColor={'white'} py={'64px'} gap={4}>
          <VStack w={'100%'} gap={0}>
            <Heading
              pb={5}
              w={'100%'}
              textAlign={'start'}
              color={'blackAlpha.800'}
              className='gothic'
              fontWeight={'900'}
              fontSize={24}
              lineHeight={'1.3'}
              px={5}>
              Making a loud statement with #SushTheHush
            </Heading>
            <Heading
              color={'black'}
              className='comfortaa'
              fontWeight={'400'}
              textAlign={'start'}
              w={'100%'}
              px={5}
              fontSize={20}
              pb={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Heading>
            <Container
              px={5}
              bg={'url(./assets/sushthehush.jpg)'}
              w={'100%'}
              h={'400px'}
              aspectRatio={'1/1'}
              backgroundSize={'cover'}
              backgroundPosition={'center'}
              display={'flex'}
              alignItems={'flex-end'}>
              <HStack w={'100%'} display={'flex'} alignItems={'center'} pb={5}>
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
                <RiArrowRightUpLine color='white' size={30} />
              </HStack>
            </Container>
          </VStack>
          <Separator
            style={{ width: 'calc(100% - 40px)' }}
            mt={'64px'}
            borderColor={'blackAlpha.300'}
          />
          <VStack w={'100%'} pt={'64px'} gap={0}>
            <Heading
              pb={5}
              w={'100%'}
              textAlign={'start'}
              color={'blackAlpha.800'}
              className='gothic'
              fontWeight={'900'}
              fontSize={24}
              lineHeight={'1.3'}
              px={5}>
              #TheGreenDot that turns possibilities to progress
            </Heading>
            <Heading
              color={'black'}
              className='comfortaa'
              fontWeight={'400'}
              textAlign={'start'}
              w={'100%'}
              px={5}
              fontSize={20}
              pb={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Heading>
            <Container
              px={5}
              bg={'url(./assets/greendot.png)'}
              w={'100%'}
              h={'400px'}
              aspectRatio={'1/1'}
              backgroundSize={'cover'}
              backgroundPosition={'center'}
              display={'flex'}
              alignItems={'flex-end'}>
              <HStack w={'100%'} display={'flex'} alignItems={'center'} pb={0}>
                <Heading
                  textAlign={'start'}
                  color={'black'}
                  className='gothic'
                  fontWeight={'400'}
                  fontSize={16}
                  lineHeight={'1.3'}>
                  Social Media
                  <br />
                  /Digital
                </Heading>
                <Spacer />
                <RiArrowRightUpLine color='black' size={30} />
              </HStack>
            </Container>
            <Heading
              color={'black'}
              className='comfortaa'
              textDecor={'underline'}
              textUnderlineOffset={3}
              fontSize={16}
              w={'100%'}
              mt={5}
              textAlign={'center'}>
              More Stories
            </Heading>
          </VStack>
        </VStack>
        <Separator
          style={{ width: 'calc(100% - 40px)' }}
          borderColor={'blackAlpha.300'}
        />
        <VStack w={'100%'} bgColor={'white'} py={'64px'} pb={'24px'}>
          <HStack w={'100%'} px={5}>
            <Heading
              pb={5}
              textAlign={'start'}
              color={'blackAlpha.800'}
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
            <RiArrowRightUpLine color='black' size={30} />
          </HStack>
          <Separator
            style={{ width: 'calc(100% - 40px)' }}
            borderColor={'blackAlpha.300'}
          />
          <VStack w={'100%'} py={5}>
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
          </VStack>
        </VStack>
        <VStack w={'100%'} bgColor={'white'} py={'16px'}>
          <HStack w={'100%'} px={5}>
            <Heading
              pb={5}
              textAlign={'start'}
              color={'blackAlpha.800'}
              className='gothic'
              fontWeight={'900'}
              fontSize={24}
              w={'70%'}
              lineHeight={'1.3'}>
              Partnering with
            </Heading>
            <Spacer />
            <RiArrowRightUpLine color='black' size={30} />
          </HStack>
          <Separator
            style={{ width: 'calc(100% - 40px)' }}
            borderColor={'blackAlpha.300'}
          />
          <VStack w={'100%'} py={5} overflow={'hidden'}>
            <MarqueeComponent />
          </VStack>
        </VStack>
        <Separator w={'100%'} borderColor={'blackAlpha.300'} />
      </VStack>
    </VStack>
  );
};

export default NewHome;
