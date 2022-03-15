import { Container, Box, Heading } from '@chakra-ui/react'



const Page = () => {
  return (
  
  <Container>
    <Box borderRadius="lg" bg="red" padding={3} marginBottom={6} color="white" align="center">
      Hello, I&apos;m a full-stack developer based in México!
    </Box>

    <Box diplay= {{md:'flex'}}>
    <Box flexGroud={1}>

    <Heading as="h2" variant="page-title">
      Emanuel Rios
    </Heading>

    <p>Digital Craftzman ( Artist / Developer / Designer)</p>

    </Box>
    </Box>

    <div>Hello</div> 
  </Container>

  ) 
}

export default Page
