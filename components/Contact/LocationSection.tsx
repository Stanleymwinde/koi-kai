"use client";

import { Box } from "@chakra-ui/react";

const LocationSection = () => {
  return (
    <Box
      id="location"
      w="100%"
      py={10}
      px={{ base: 4, md: 8, lg: 12 }}
    >
      <Box
        w="100%"
        h="450px"
        borderRadius="md"
        overflow="hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.7278253236004!2d36.739897524965876!3d-1.3396236486476814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMillenium%20Work%20Depot%2C%20Millenium%20Business%20Park%2C%20opposite%20Karen%20C%20Primary%20School%2C%20Langata%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1764231895874!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default LocationSection;
