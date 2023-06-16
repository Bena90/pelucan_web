import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack
} from '@chakra-ui/react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import {
  MdFacebook,
  MdLocationOn,
  MdPhone
} from 'react-icons/md';
import { Blob } from '../hero/hero';
  
  export default function Contact() {
    return (
      <Container  maxW="full" mt={0} centerContent id='contact'>
        <Flex w={'100%'} position={'relative'}>
          <Blob
            w={'120%'}
            h={'120%'}
            position={'absolute'}
            top={'-20%'}
            right={'-30%'}
            zIndex={-1}
            opacity={0.5}
            color='var(--primary-color)'
          />
          <Box
            borderRadius="lg"
            w={'100%'}
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            >
            <Flex justifyContent={'center'} p={4}>
              <Box
                display={'flex'}
                justifyContent={'center'}
                flexDirection={{ base: 'column', md: 'row' }}
                w={'100%'}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={{ base: 'center', md: 'flex-start' }}
                  flexDirection={'column'}
                  w={'100%'} >
                    <Heading color='var(--primary-color)'>Visitanos!</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.700">
                      Te esperamos, trae a tu amigo de cuatro patas.
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="gray.800"
                          leftIcon={<MdPhone color="#505050" size="20px" />}>
                          +11549547470888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="gray.800"
                          leftIcon={<MdLocationOn color="#505050" size="20px" />}>
                          Martinez, San Isidro
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                </Box>
                <Box  w={'100%'}>
                  <Box bg="white" borderRadius="lg" overflow={'hidden'}>

                      <VStack>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.574194112528!2d-58.50468649999999!3d-34.4883247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1ab8bccaac7%3A0x652472dd5456a196!2sItalia%201624%2C%20B1640BMH%20Mart%C3%ADnez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1686714756359!5m2!1ses-419!2sar"
                          width="100%"
                          height="350"
                          loading="lazy"
                          allowFullScreen
                          ></iframe>
                      </VStack>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    );
  }
  