import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: '4',
    size: "4xl"
}


const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container maxWidth={'container.xl'} minH={'100vh'} p={"16"} >

            <Heading textTransform={'uppercase'} py='12' w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                Services
            </Heading>

            <Stack h={'full'} p={'4'} alignItems={'center'} direction={["column",'row']} > 
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, iste corrupti. Perspiciatis iure quod porro? Sit dicta aperiam asperiores corporis magnam. Recusandae id ab cumque officia aut sed omnis quam deleniti harum sunt neque quia quibusdam amet quo accusantium animi quos, non consectetur corrupti maxime. Magnam saepe ullam minus ipsum explicabo rerum tenetur repellat quas, dolore fugit officia tempora quasi magni, ad consequuntur! Illo magni id dicta nulla aspernatur deleniti eos eveniet harum expedita voluptas optio rem voluptatum deserunt, doloribus excepturi, inventore aliquam, iste fuga nobis aperiam possimus sequi quibusdam officia. At ratione perferendis quo porro voluptatibus exercitationem dignissimos eveniet iste cumque fugiat!
                </Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = () => {
    return(
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
            <Box w={'full'} h={'100vh'} >
                <Image src={img1} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Watch the Future
                </Heading>
            </Box>

            <Box w={'full'} h={'100vh'} >
                <Image src={img2} />
                <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                    Future is Gaming
                </Heading>
            </Box>

            <Box w={'full'} h={'100vh'} >
                <Image src={img3} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                    Gaming on Console
                </Heading>
            </Box>

            <Box w={'full'} h={'100vh'} >
                <Image src={img4} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                    Night life is cool
                </Heading>
            </Box>
        </Carousel>
    );
}

export default Home