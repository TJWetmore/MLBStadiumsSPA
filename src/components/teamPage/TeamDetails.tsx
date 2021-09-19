import React, { useContext } from 'react';
import { Heading } from '@chakra-ui/react';
import { StadiumDetails } from './StadiumDetails';
import { SocialDetails } from './SocialDetails';
import { TeamContext } from '../../teamContext';
import { NewTeamSelector } from '../navagation/NewTeamSelector';

export const TeamDetails = () => {
  const [displayedTeam] = useContext<any>(TeamContext);

  return (
    <>
      <NewTeamSelector />
      <Heading textAlign="center" fontSize={['2xl', '4xl']} color="yellow">{displayedTeam.strTeam}</Heading>
      <StadiumDetails />
      <SocialDetails />
    </>
  );
};
