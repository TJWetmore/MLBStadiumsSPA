# TJ's MLB Stadium guidebook

Hey thanks for taking the time to read the read me and review my work.You should be able to clone this repo, run 'npm install', and then 'npm run start' to see it locally. The dependeinces that are not standard with create-react-app typscript template are @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4, which have weekly downloads in the 140k - 4million range.

I wanted to have fun with this so instead of making a single page for my favorite team (Go Giants!) I went ahead and made a SPA for MLB stadiums. 

My thinking was I wanted to demonstrate my abilities in React, that I can make resuable components, that I can intermediate hooks, etc. Only one page for a team didn't seem as fun. 

Also when I was looking at some of the data from the API I noticed it was out of date. So instead of making a page for the Giants that said Bruce Bochey was the manager (which is inaccurate) I went ahead with this route where I felt comfortable the information would generally be accurate. 

I wanted to give a few thoughts: 

- *I was very very close to using Redux*-
Because I was having the user select from a list of teams, I grew concerned about prop-drilling for all the different compoents. Pretty much all the components on the page are touching one central data object - the result from API call. So I decided to use the hook useContext and have all the children / grandchildren components touch that.

 There are pitfalls with useContext. It can really impact readability. React is super explict and direct (where did the prop come from?) so useContext abstracts that out and honestly kind of hurts the overall utility of React. ---

The fact of the matter is I should have used redux for the global state management. But if I were to go back and refactor I would add in react-redux.


- I started this in Typescript
Even if time constraints made it a less than ideal idea. But if this were to scale, having the bones of TS are a good idea. That's why I used it. 

- I used Chakra UI as my CSS component library 
The speed of development and the ease in reading make it a good choice in my opinion. There's also some great built in features, and I took the time to make everything mobile, tablet, and desktop compatible. 


- 

