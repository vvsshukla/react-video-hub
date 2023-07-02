import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import Footer from "./Footer";
const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"
}
const Home = () => {
    return (
        <Box>
            <MyCarousel/>
            <Container maxW={'container.xl'} minH={'100vh'} p='16'>
                <Heading 
                    textTransform={"uppercase"} 
                    py={"2"} 
                    w={"fit-content"}
                    borderBottom={"2px solid"}
                    m="auto"
                >
                    Services
                </Heading>
                <Stack
                    h={"full"}
                    p={"4"}
                    alignItems={'center'}
                    direction={['column','row']}
                >
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"Center"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </Text>
                </Stack>
            </Container>
            <Footer/>
        </Box>
    );
}
const MyCarousel = () => (
    <Carousel 
    autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false} 
    showThumbs={false} 
    showArrows={false}>
        <Box w={"full"} h={"100vh"}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color="white" {...headingOptions}>
                Watch The Future.
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.900"} color="black" {...headingOptions}>
                Future Is Gaming.
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color="black" {...headingOptions}>
                Gaming On Console.
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color="black" {...headingOptions}>
               Night Life Is Cool.
            </Heading>
        </Box>
    </Carousel>
)
export default Home;