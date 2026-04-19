import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { Blob } from "../hero/hero";

const CONTACT_TEL_HREF = "tel:+5491154954747";
const CONTACT_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Italia+1624%2C+Mart%C3%ADnez%2C+Buenos+Aires%2C+Argentina";

export default function Contact() {
  return (
    <Container maxW="full" mt={0} centerContent id="contact">
      <Flex w={"100%"} position={"relative"}>
        <Blob
          w={"120%"}
          h={"120%"}
          position={"absolute"}
          top={"-20%"}
          right={"-30%"}
          zIndex={-1}
          opacity={0.5}
          color="var(--primary-color)"
        />
        <Box
          borderRadius="lg"
          w={"100%"}
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Flex justifyContent={"center"} p={4}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={{ base: "column", md: "row" }}
              w={"100%"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={{ base: "center", md: "flex-start" }}
                flexDirection={"column"}
                w={"100%"}
              >
                <Heading color="var(--primary-color)">Visitanos!</Heading>
                <Text
                  fontSize="lg"
                  mt={{ sm: 3, md: 3, lg: 5 }}
                  color="gray.700"
                >
                  Te esperamos, trae a tu amigo.
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    <Button
                      as="a"
                      href={CONTACT_TEL_HREF}
                      aria-label="Llamar a Pelucan al +54 9 11 5495-4747"
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="gray.800"
                      _hover={{ bg: "blackAlpha.50" }}
                      leftIcon={<FaPhone color="#505050" size="20px" />}
                    >
                      +54 9 11 5495-4747
                    </Button>
                    <Button
                      as="a"
                      href={CONTACT_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Abrir ubicación Italia 1624, Martínez, en Google Maps"
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="gray.800"
                      _hover={{ bg: "blackAlpha.50" }}
                      leftIcon={<FaLocationArrow color="#505050" size="20px" />}
                    >
                      Italia 1624, Martínez
                    </Button>
                    <Button
                      as="a"
                      href="https://www.instagram.com/pelucan.sergio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram de Pelucan (@pelucan.sergio)"
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="gray.800"
                      _hover={{ bg: "orange.200" }}
                      leftIcon={<BsInstagram color="#505050" size="20px" />}
                    >
                      ./pelucan.sergio
                    </Button>
                  </VStack>
                </Box>
              </Box>
              <Box w={"100%"}>
                <Box bg="white" borderRadius="lg" overflow={"hidden"}>
                  <VStack>
                    <iframe
                      title="Ubicación de Pelucan en Google Maps - Italia 1624, Martínez"
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
