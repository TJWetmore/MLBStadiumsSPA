import React from "react";
// import * as PropTypes from 'prop-types'
import {Flex, Image, Center} from "@chakra-ui/react";
import logo from '../../sillyLogo.png'

export const NavagationBar = () => {
  return(
    <Flex
      as="nav"
      top="0"
      left="0"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg="darkBlue"
    >
      
      <Center>
        <Image 
        width='100px'
        src={logo}
        />
      </Center>

    </Flex>
  )
};
