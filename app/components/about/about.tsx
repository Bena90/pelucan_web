import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          justifyContent='center'
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '100%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
              <Image
                borderRadius="lg"
                src='/assets/about.png'
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient='radial(var(--primary-color) 2px, transparent 1px)'
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <Heading marginTop="1" color='var(--primary-color)'>
              Conocenos!
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={'gray.700'}
            fontSize="lg">
            ¡Hola! Soy Sergio, el peluquero canino apasionado que está detrás de
            nuestra peluquería. Permíteme contarte un poco sobre quiénes somos y
            qué nos impulsa.
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            En nuestra peluquería, nos esforzamos por brindar un servicio
            personalizado y de alta calidad. Entiendo que cada perro es único,
            con su propia personalidad y necesidades individuales.
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            En cada sesión de peluquería, me comprometo a crear un ambiente
            tranquilo y relajante para tus queridas mascotas. Valoramos su
            comodidad y bienestar en todo momento. Utilizamos productos de calidad
            y técnicas profesionales para garantizar que tu perro esté seguro y se
            sienta cómodo durante todo el proceso de cuidado.
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Pero más allá de ser un peluquero canino, soy un amante de los animales.
            Cuido a cada perro como si fuera mi propio compañero, asegurándome de
            establecer un vínculo de confianza y cariño con cada uno de ellos. Tu perro
            estará en buenas manos y recibiré a tu amigo de cuatro patas con el amor y el
            respeto que merece.
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Estoy emocionado de conocerte a ti y a tu adorable compañero peludo. Ven y descubre
            cómo puedo realzar la belleza de tu mejor amigo con mis servicios de peluquería canina.
            ¡Espero darte la bienvenida pronto a nuestra peluquería y compartir mi pasión por los
            animales contigo!
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;
