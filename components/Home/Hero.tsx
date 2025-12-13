"use client";

import React, { useState, useEffect } from "react";
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
    image: "/images/v-prop.jpeg",
    subText: "Need Insurance?",
    highlight: "Ask Me - I CAN HELP!",
    desc: "Transforming insurance accessibility in Kenya. Everyone deserves protection.",
  },
  {
    title: "Your Peace of Mind Matters",
    image: "/images/peace.jpg",
    subText: "Looking for Coverage?",
    highlight: "Let Me Guide You!",
    desc: "Health, motor, or life — I simplify everything.",
  },
  {
    title: "Affordable & Reliable Coverage",
    image: "/images/reliable.jpg",
    subText: "Need Something Quick?",
    highlight: "I'm Here To Assist!",
    desc: "Fast, seamless, transparent insurance services.",
  },
  {
    title: "Fast, Transparent Insurance Solutions",
    image: "/images/transparent1.jpg",
    subText: "Tired of Complicated Processes?",
    highlight: "I'm Here To Assist!",
    desc: "Transparent insurance solutions made simple.",
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
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box position="relative" id="home" pt={{ base: 4, md: "40px" }}>
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
              pt={{ base: 24, md: 32 }} // <-- FIX for navbar
            >
              {/* Background */}
              <Box position="absolute" inset={0} zIndex={0}>
                <Image
                  src={item.image}
                  alt="Hero background"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <Box position="absolute" inset={0} bg="rgba(0,0,0,0.6)" />
              </Box>

              {/* Text Content */}
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
