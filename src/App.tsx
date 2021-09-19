import React, { useEffect, useState } from 'react';
import './App.css';
import { NavagationBar, getNewTeam, TeamDetails } from './components';
import { TeamContext } from './teamContext';

function App() {
  const [displayedTeam, setDisplayedTeam] = useState<any>();

  useEffect(() => {
    const setInitialState = async () => {
      setDisplayedTeam(await getNewTeam('san_francisco_giants'));
    };
    setInitialState();
  }, []);

  return (
    <>
      {displayedTeam
          && (
          <TeamContext.Provider value={[displayedTeam, setDisplayedTeam]}>
            <NavagationBar />
            <TeamDetails />
          </TeamContext.Provider>
          )}
    </>
  );
}

export default App;
