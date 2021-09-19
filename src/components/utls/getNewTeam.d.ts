

export const getNewTeam = (teamName:string) => {
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`;
  return fetch(url)
  .then((response) => response.json())
  .then((json) => (json.teams[0]))
  .catch((error)=> console.log(error))

}

