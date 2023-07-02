import { Button, Container, Heading, Input, VStack, Text, Avatar } from "@chakra-ui/react";
import React from "react";

const SignUp = () => {
    return(
        <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
            <form>
                <VStack 
                alignItems={"stretch"} 
                spacing={"8"}
                w={["full", "96"]}
                m={"auto"}
                my={"16"}
                >
                    <Heading textAlign={"center"}>VIDEO HUB</Heading>
                    <Avatar alignSelf={"center"} boxSize={"32"}/>
                    <Input type="text" placeholder="Name" required focusBorderColor="purple.500"/>
                    <Input type="email" placeholder="Email" required focusBorderColor="purple.500"/>
                    <Input type="password" placeholder="Password" required focusBorderColor="purple.500"/>
                    <Button colorScheme="purple" type="submit">Sign Up</Button>
                    <Text textAlign={"right"}>
                        Already Signed Up? <Button variant={"link"} alignSelf={"flex-end"}>Login</Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    );
}

export default SignUp;