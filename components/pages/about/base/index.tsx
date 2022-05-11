import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import AvatarImage from "public/images/common/avatar.png";
import { FC } from "react";
import { IconType } from "react-icons";
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { CgSmileNone } from "react-icons/cg";

const SocialButton: FC<{
  href: string;
  bg: string;
  icon?: IconType;
  label: string;
}> = ({ href, bg, icon, label }) => {
  return (
    <Link
      py={2}
      px={4}
      href={href}
      rounded="sm"
      bg={bg}
      color="#fff"
      fontWeight="bold"
      isExternal
      borderWidth={1}
      borderColor="gray.600"
      _hover={{}}
    >
      <HStack spacing={2} alignItems="center">
        <Box as={icon ?? CgSmileNone} /> <Text>{label}</Text>
      </HStack>
    </Link>
  );
};

const Page: FC = () => {
  const headingNode = () => {
    return (
      <HStack spacing={4} alignItems="center">
        <Box
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          rounded="full"
          p={1}
          w={100}
          h={100}
        >
          <Image
            src={AvatarImage}
            alt="Nguyễn Trường Minh"
            height={100}
            width={100}
            quality={100}
            priority
            placeholder="blur"
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="lg" color="white">
              Nguyễn Trường Minh
            </Heading>
            <Text fontWeight="bold">Software Engineer</Text>
          </VStack>
        </Box>
      </HStack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text fontWeight="bold">
          Computer Science Engineer having interest in web-designing and
          development.
        </Text>
      </Box>
    );
  };

  const socialLinksNode = () => {
    return (
      <Box d="flex" alignItems="center">
        <HStack spacing={4}>
          <SocialButton
            href="https://github.com/TMinh25"
            bg="#333"
            icon={IoLogoGithub}
            label="Github"
          />
          <SocialButton
            href="https://www.facebook.com/sipp.minhh"
            bg="#2374E1"
            icon={IoLogoFacebook}
            label="Facebook"
          />
          <SocialButton
            href="https://www.instagram.com/not.gr4y/"
            bg="#EF4E6D"
            icon={IoLogoInstagram}
            label="Instagram"
          />
        </HStack>
      </Box>
    );
  };

  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <VStack spacing={4} align="left">
        {headingNode()}
        {bioDescriptionNode()}
        {socialLinksNode()}
      </VStack>
    </Box>
  );
};

export default Page;
