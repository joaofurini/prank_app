import { Button } from "@chakra-ui/button";
import { Box, Stack,Text,  } from "@chakra-ui/layout";
import { useState } from "react";


export default function Home() {

  const [selectedMessage, setSelectedMessage] = useState("")
  const messagesList = [
    "Comi o cu de quem ta lendo",
    "Quem clicou é gay",
    "Sua mae é minha",
    "Fracassado",
    "Seu fracasso depende de voce",
    "Lute como nunca perca como sempre",
    "Voce é mais fraco do que pensa",
    "A maior derrota é acreditar que é capaz",
    "Verme maldito",
    "Tem mais nada pra fazer nao?",

  ]
  function generateRandom( max ) {
    // find diff
    let difference =  max;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor( rand * difference);
    // add with min value 
    rand = rand + 0;

    return rand;
}

  const handleButtonClick = () => {

    var randomNumber = generateRandom(messagesList.length)
    console.log(randomNumber)
    setSelectedMessage(messagesList[randomNumber])
  }

  
  return (
    <>
    <Stack minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <Text marginBottom="40px" textShadow="0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #228dff,0 0 35px #228dff,0 0 40px #228dff" fontSize="52px" color="white" justifyContent="center" textAlign="center">
        {selectedMessage}
      </Text>
      
     <Button marginTop="30px" onClick={handleButtonClick} >Clique para receber uma mensagem importante</Button>
     
    </Stack>
    </>
  )
}
