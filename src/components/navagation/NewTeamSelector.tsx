/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { Select, Flex } from '@chakra-ui/react';
import {
  nlEast, nlCentral, nlWest, alEast, alWest, alCentral,
} from '../utls/mlbteams';
import { TeamContext } from '../../teamContext';
import { getNewTeam } from '../utls/getNewTeam';

export const NewTeamSelector = () => {
  const [, setDisplayedTeam] = useContext<any>(TeamContext);
  const handleTeamSelection = async (teamName:string) => {
    setDisplayedTeam(await getNewTeam(teamName.replace(/ /g, '_')));
  };
  return (
    <Flex alignText="center">
      <Select m={[5, 50, 50]} placeholder="Find A Stadium" value="" textAlign="center" colorScheme="white" onChange={(event) => handleTeamSelection(event?.target.value)}>
        <optgroup label="NL East">NL East</optgroup>
        {nlEast.map((el, index) => (
          <option
            key={index}
            value={el}
          >
            {el}
          </option>
        ))}
        <optgroup label="NL Central">NL Central</optgroup>
        {nlCentral.map((el, index) => (
          <option
            key={index + 5}
            value={el}
          >
            {el}
          </option>
        ))}
        <optgroup label="NL West">NL West</optgroup>
        {nlWest.map((el, index) => (
          <option
            key={index + 10}
            value={el}
          >
            {el}
          </option>
        ))}

        <optgroup label="AL East">AL West</optgroup>
        {alEast.map((el, index) => (
          <option
            key={index + 15}
            value={el}
          >
            {el}
          </option>
        ))}

        <optgroup label="AL Central">AL Central</optgroup>
        {alCentral.map((el, index) => (
          <option
            key={index + 20}
            value={el}
          >
            {el}
          </option>
        ))}

        <optgroup label="AL West">AL West</optgroup>
        {alWest.map((el, index) => (
          <option
            key={index + 25}
            value={el}
          >
            {el}
          </option>
        ))}

      </Select>
    </Flex>
  );
};
