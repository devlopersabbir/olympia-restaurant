import {
  Container,
  Flex,
  Stack,
  Icon,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { CgHome } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import BoxContainer from "../../Layout/BoxContainer";

const Footer = () => {
  return (
    <BoxContainer>
      <Flex
        gap={{ base: 7, md: 4 }}
        py={8}
        direction={{ base: "column", md: "row" }}
      >
        <Stack spacing={5} flex={2}>
          <Text lineHeight="27px" fontSize="16px">
            Mirpur Tours and Travels is a well-known and reputed Hajj-Umrah and
            Air Ticketing Agency. We provide Hajj and Umrah packages along with
            online services as well as the opportunity of opening hajj flights
            for 27 years.
          </Text>
          <Stack direction="row" spacing={6}>
            <Link href="#">
              <Icon as={FaFacebook} fontSize="2xl" color="white" />
            </Link>
            <Link href="#">
              <Icon as={FaTwitter} fontSize="2xl" color="white" />
            </Link>
            <Link href="#">
              <Icon as={FaYoutube} fontSize="2xl" color="white" />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} fontSize="2xl" color="white" />
            </Link>
          </Stack>
        </Stack>
        <Stack spacing={8} flex={1}>
          <Text fontSize="20px" fontWeight={700}>
            About
          </Text>
          <Stack fontSize="16px" spacing={4}>
            <Link href="/about">About Us</Link>
            <Link href="/about">Client Reviews</Link>

            <Link href="/about">Notice</Link>
            <Link href="/about">Photos</Link>
          </Stack>
        </Stack>
        <Stack spacing={8} flex={1}>
          <Text fontSize="20px" fontWeight={700}>
            Services
          </Text>
          <Stack fontSize="16px" spacing={4}>
            <Link href="/haji_umrah">Haji & Umrah</Link>
            <Link href="/about">Air Ticketing</Link>

            <Link href="/about">Visa Processing </Link>
          </Stack>
        </Stack>
        <Stack spacing={8} flex={1}>
          <Text fontSize="20px" fontWeight={700}>
            Get in Touch
          </Text>
          <Stack fontSize="16px" spacing={4}>
            <Flex align="center" gap={3}>
              <Icon as={CgHome} fontSize="xl" />
              <Text>
                House: 11, Roead: 21, Block: C Section: 10, Mirpur, Dhaka-1216
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={BiPhoneCall} fontSize="xl" />
              <Text>+880 17988877799</Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={CiMail} fontSize="xl" />
              <Text>mirpurhl1500@gmail.com</Text>
            </Flex>
          </Stack>
        </Stack>
      </Flex>

      <Flex
        padding={{ base: 4, md: 0 }}
        h={{ base: "60px", md: "40px" }}
        w="full"
        align="center"
        justify="center"
      >
        <Text textAlign="center">
          © 2020-2021 All rights reserved by{" "}
          <span style={{ color: "#FF6633" }}>Mirpur Tours and TRavels.</span>
        </Text>
      </Flex>
    </BoxContainer>
  );
};

export default Footer;
