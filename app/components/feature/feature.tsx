import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Blob } from '../hero/hero';
  
  interface CardProps {
    heading: string;
    description: string;
    icon: string;
    href: string;
  }

  const features = [
    {
      name: "Cortes de raza ",
      description: "Cortes de raza precisos y adaptados a las necesidades de tu amigo canino. Nos aseguramos de resaltar la belleza natural de tu mascota, realzando sus características y asegurando un acabado impecable.",
      icon: "/assets/barbero.png",
    },
    {
      name: "Deslanado",
      description: "Eliminación de pelo suelto y deslanado eficiente. Utilizamos técnicas profesionales para eliminar de manera efectiva el pelo suelto y mantener el pelaje de tu perro en óptimas condiciones.",
      icon: "/assets/peine.png",
    },
    {
      name: "Stripping",
      description: "Mantén la textura y el brillo natural del pelaje con el stripping. Para ciertas razas, el stripping es la técnica de peluquería adecuada para preservar la textura y el brillo natural del pelaje. ",
      icon: "/assets/tijeras.png",
    },
    {
      name: "Baño y corte",
      description: "Limpieza y cuidado integral para una apariencia impecable. Utilizamos productos de alta calidad y técnicas profesionales para garantizar un pelaje limpio y libre de nudos.",
      icon: "/assets/bano.png",
    },
  ]
  
  const Card = ({ heading, description, icon }: CardProps) => {
    return (
      <Box
        id='feature'
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        bg='rgba(255,255,255)'
        borderColor="#FAFAFA"
        overflow="hidden"
        shadow={'base'}
        p={5}>
        <Stack align={'center'} spacing={2}>
          <Flex
            w={'130px'}
            h={'130px'}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            <Image
                alt={heading}
                fit={'cover'}
                align={'center'}
                w={'90px'}
                h={'90px'}
                src={icon}
              />
          </Flex>
          <Box mt={2}>
            <Heading color={'gray.700'} size="md">{heading}</Heading>
            <Text color={'gray.600'} mt={1} fontSize="lg">
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  };
  
  export default function Feature() {
    return (
      <Box p="12" w={'100%'} position={'relative'}>

            <Blob
              w={'75%'}
              h={'75%'}
              position={'absolute'}
              top={'20%'}
              left={'-20%'}
              zIndex={-1}
              opacity={0.5}
              color='var(--primary-color)'
            />
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading color={'gray.700'} fontSize={{ base: '3xl', sm: '5xl' }} fontWeight={700}>
              Conocé nuestros servicios
            </Heading>
            <Text color={'gray.600'} fontSize='lg'>
              Descubre nuestra gama de servicios especializados para el cuidado y embellecimiento de tu mascota
            </Text>
          </Stack>
    
          <Container maxW={'5xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              {features.map((feature)=> {
                return(
                  <Card
                    heading={feature.name}
                    icon={feature.icon}
                    description={feature.description}
                    href={'#'}
                  />
                )
              })
              }
            </Flex>
          </Container>
      </Box>
    );
  }
  