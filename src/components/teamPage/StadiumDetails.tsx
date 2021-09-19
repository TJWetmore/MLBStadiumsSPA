import React, { useContext, useState, useEffect } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { TeamContext } from '../../teamContext';

export const StadiumDetails = () => {
  const [displayedTeam] = useContext<any>(TeamContext);

  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 1000);
  }, [displayedTeam]);

  return (
    <>
      <Flex alignItems="flex-start" justifyContent="center">
        <div>
          <Text textAlign="center" fontSize={['xl', '3xl']} color="yellow">{displayedTeam.strStadium}</Text>
          <Text textAlign="center" fontSize={['md', 'xl']}>{displayedTeam.strStadiumLocation}</Text>
          <Box w={[300, 400, 700, 1100]} h="auto">
            {spinning
              ? (
                <Center>
                  <Spinner size="lg" />
                </Center>
              )
              : <Image boxSize="auto" src={displayedTeam.strStadiumThumb} alt="Stadium" alignItems="center" />}
          </Box>
          <Accordion width="auto" w={[300, 400, 700, 1100]} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box textAlign="left">
                    Learn More
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {displayedTeam.strStadiumDescription}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </Flex>
    </>
  );
};
