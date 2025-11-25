"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const slider_content = [
  {
    title: "We Make Insurance Easy",
    image: "/images/hero-bg.jpg",
    subText: "Need Insurance?",
    highlight: "Ask Me - I CAN HELP!",
    desc: "Transforming insurance accessibility in Kenya. Everyone deserves access to the insurance covers they need.",
  },
  {
    title: "Your Peace of Mind Matters",
    image: "/images/hero-bg2.jpeg",
    subText: "Looking for Coverage?",
    highlight: "Let Me Guide You!",
    desc: "Whether it's health, motor, or life insurance — I simplify everything for you.",
  },
  {
    title: "Affordable & Reliable Coverage",
    image: "/images/hero-bg3.jpeg",
    subText: "Need Something Quick?",
    highlight: "I'm Here To Assist!",
    desc: "Fast, seamless, and transparent insurance services tailored for you.",
  },
  {
    title: "Fast, Transparent Insurance Solutions",
    image: "/images/hero-bg4.jpeg",
    subText: "Tired of Complicated Processes?",
    highlight: "I'm Here To Assist!",
    desc: "Transparent insurance solutions made simple and accessible for all.",
  },
];

const HeroSwiper = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box position="relative" id="home">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={windowWidth !== null ? windowWidth >= 768 : true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ width: "100%", height: "100vh" }}
      >
        {slider_content.map((item, index) => (
          <SwiperSlide key={index}>
            <Flex
              position="relative"
              minH="100vh"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              {/* Background Image */}
              <Box position="absolute" inset={0} zIndex={0}>
                <Image
                  src={item.image}
                  alt="Hero background"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <Box
                  position="absolute"
                  inset={0}
                  bg="rgba(44, 81, 128, 0.45)" // ⭐ Reduced opacity!
                />
              </Box>

              {/* Content */}
              <VStack gap={4} textAlign="center" px={4} zIndex={4} maxW="700px">
                <Heading
                  fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                  fontWeight="bold"
                  color="white"
                  lineHeight="1.1"
                  mb={2}
                >
                  {item.title}
                </Heading>

                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  color="whiteAlpha.900"
                >
                  {item.subText}
                </Text>

                <Text
                  fontSize={{ base: "xl", md: "3xl" }}
                  fontWeight="semibold"
                  color="yellow.300"
                  mt={0}
                  mb={2}
                >
                  {item.highlight}
                </Text>

                <Text
                  fontSize={{ base: "md", md: "xl" }}
                  color="whiteAlpha.800"
                  maxW="600px"
                >
                  {item.desc}
                </Text>

                {/* Buttons */}
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  gap={4}
                  justify="center"
                  mt={4}
                >
                  <Button
                    size="lg"
                    colorScheme="yellow"
                    onClick={() => scrollToSection("contact")}
                    fontSize="lg"
                    px={8}
                  >
                    <ArrowRight /> Get a Quote
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("services")}
                    fontSize="lg"
                    px={8}
                    borderColor="whiteAlpha.600"
                    color="whiteAlpha.900"
                    _hover={{ bg: "whiteAlpha.200" }}
                  >
                    Our Services
                  </Button>
                </Flex>
              </VStack>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSwiper;
