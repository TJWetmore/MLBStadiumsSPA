import {useContext} from "react";
import {HStack, Center, IconButton} from "@chakra-ui/react";
import {FaGlobeAmericas, FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import {TeamContext} from '../../teamContext'


export const SocialDetails = () => {
  const [displayedTeam] = useContext<any>(TeamContext)

  return(
    <>
    <Center p={10}>
      <HStack>
        {displayedTeam.strWebsite as any &&
        <IconButton aria-label="Website" color="lightBlue" onClick={()=>window.open(`https://${displayedTeam.strWebsite}`, '_blank ')} icon={<FaGlobeAmericas />} />
        }
        {displayedTeam.strTwitter &&
        <IconButton aria-label="Twitter" color="lightBlue" onClick={()=>window.open(`https://${displayedTeam.strTwitter}`, '_blank ')} icon={<FaTwitter />} />

        }
        {displayedTeam.strFacebook &&
        <IconButton aria-label="Facebook" color="lightBlue" onClick={()=>window.open(`https://${displayedTeam.strFacebook}`, '_blank ')} icon={<FaFacebook />} />
        }
        {displayedTeam.strInstagram &&
        <IconButton aria-label="Facebook" color="lightBlue" onClick={()=>window.open(`https://${displayedTeam.strInstagram}`, '_blank ')} icon={<FaInstagram />} />
        }
      </HStack>
    </Center>
    </>
  )
};
