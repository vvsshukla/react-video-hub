import React from "react";
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi";
const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Button 
                pos={'fixed'} 
                top={'4'} 
                left={'4'} 
                colorScheme="purple" 
                p={"0"} 
                w={"10"} 
                h={"10"}
                borderRadius={"full"}
                onClick={onOpen}
                zIndex={"overlay"}
                >
                <BiMenuAltLeft size={'20'}/>
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                        <VStack align={"flex-start"}>
                            <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                                <Link to={"/"}>Home</Link>
                            </Button>
                            <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                                <Link to={"/videos"}>Videos</Link>
                            </Button>
                            <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                                <Link to={"/videos?category=free"}>Free Videos</Link>
                            </Button>
                            <Button variant={"ghost"} colorScheme="purple" onClick={onClose}>
                                <Link to={"/upload"}>Upload Videos</Link>
                            </Button>
                        </VStack>
                        <HStack position={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
                            <Button colorScheme="purple" onClick={onClose}>
                                <Link to={"/login"}>Login</Link>    
                            </Button>
                            <Button colorScheme="purple" variant={"outline"} onClick={onClose}>
                                <Link to={"/signup"}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
export default Header;