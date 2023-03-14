import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >
        <Stack direction={["column", "row"]}>
            <VStack alignItems={"str"} w={"full"} px={"4"}>
                <Heading size={"md"} textTransform={"uppercase"} textAlign={["center", "left"]} >
                    Subscribe to get Update
                </Heading>

                <HStack borderBottom={"2px solid white"} py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={"none"} outline={"none"} focusBorderColor={"transparent"} />
                    <Button p={'0'} color={'purple'}  variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>

            </VStack>

            <VStack w={'full'} borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white"]}>
                <Heading textTransform={'uppercase'} textAlign={'center'} >
                    Video Zone
                </Heading>
                <Text>All rights received</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'} >
                    Social Media
                </Heading>

                <Button variant={"link"} colorScheme={'whiteAlpha.50'} >
                    <a href="https://github.com/C0dewithLokesh" target={'blank'}>GitHub</a>
                </Button>

                <Button variant={"link"} colorScheme={'whiteAlpha.50'} >
                    <a href="https://www.linkedin.com/in/lokesh-kaushik-347a57202/" target={'blank'}>Linkedin</a>
                </Button>

                <Button variant={"link"} colorScheme={'whiteAlpha.50'} >
                    <a href="https://www.instagram.com/lokesh_0_7/" target={'blank'}>Instagram</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer