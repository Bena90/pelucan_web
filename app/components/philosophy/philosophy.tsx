import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaHandHoldingHeart, FaHeartbeat, FaLeaf } from "react-icons/fa";
import { Blob } from "../hero/hero";

interface Pillar {
  title: string;
  description: string;
  icon: IconType;
}

const pillars: Pillar[] = [
  {
    title: "Salud",
    description:
      "Baño, higiene y técnicas pensadas para el bienestar: tu mascota sana se ve y se siente mejor.",
    icon: FaHeartbeat,
  },
  {
    title: "Conexión",
    description:
      "Trabajamos con calma y paciencia para que tu mascota se sienta acompañada y tranquila. El buen resultado empieza con confianza.",
    icon: FaHandHoldingHeart,
  },
  {
    title: "Buen trato",
    description:
      "Respetamos tiempos y señales. Ahí es donde aparece la belleza natural de cada compañero peludo, sin forzar el estilo.",
    icon: FaLeaf,
  },
];

interface PillarCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const PillarCard = ({ title, description, icon }: PillarCardProps) => {
  const iconBg = useColorModeValue(
    "rgba(243, 143, 0, 0.18)",
    "rgba(243, 143, 0, 0.22)",
  );

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      bg="rgba(255,255,255)"
      borderColor="#FAFAFA"
      overflow="hidden"
      shadow="base"
      p={{ base: 6, md: 7 }}
      h="full"
    >
      <Stack align="center" spacing={4} textAlign="center">
        <Flex
          w="88px"
          h="88px"
          align="center"
          justify="center"
          rounded="full"
          bg={iconBg}
        >
          <Icon
            as={icon}
            fontSize="2.25rem"
            aria-hidden
            color="var(--primary-color)"
          />
        </Flex>
        <Box>
          <Heading as="h3" color="var(--primary-color)" size="md">
            {title}
          </Heading>
          <Text color="gray.600" mt={2} fontSize="md" lineHeight="tall">
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Philosophy() {
  return (
    <Box
      py={{ base: 14, md: 16 }}
      px={{ base: 4, md: 6 }}
      w="100%"
      position="relative"
      id="philosophy"
    >
      <Blob
        w="70%"
        h="70%"
        position="absolute"
        top="10%"
        right="-18%"
        zIndex={-1}
        opacity={0.45}
        color="var(--primary-color)"
      />
      <Stack spacing={10} as={Container} maxW="5xl">
        <Stack spacing={4} textAlign="center" maxW="3xl" mx="auto">
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="600"
            letterSpacing="wide"
            textTransform="uppercase"
            color="var(--primary-color)"
          >
            Nuestra forma de cuidar
          </Text>
          <Heading
            as="h2"
            color="gray.700"
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight={700}
            lineHeight="shorter"
          >
            Salud, conexión y buen trato
          </Heading>
          <Text
            color="gray.600"
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight="tall"
          >
            Te lo cuidamos de punta a punta, con tiempo y respeto. El resultado
            se nota en el pelo y en el humor: siempre buscando resaltar su
            belleza natural.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
