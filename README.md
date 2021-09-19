# TJ's MLB Stadium guidebook

Hey thanks for taking the time to read the read me and review my work. 

I wanted to have fun with this so instead of making a single page for my favorite team (Go Giants!) I went ahead and made a SPA for MLB stadiums. 

My thinking was I wanted to demonstrate my abilities in React, that I can make resuable components, that I can intermediate hooks, etc. Only one page for a team didn't seem as fun. Also your API is a little out of date. 

I wanted to give : 

*I was very very close to using Redux*
The prompt was to create a page for just my favorite team, but it also said have fun. So I made a page that lets the user select from a list of teams, because I thought that would be more fun rather than styling and nit-picking padding, margin, image sizes, etc.
Because I was having the user select from a list of teams, I grew concerned about prop-drilling. Pretty much all the components on the page are touching one central data object - the result from API call. So I decided to use the hook useContext.
---!!!! There are pitfalls with useContext. It can really impact readability. React is super explict and direct (where did the prop come from?) so useContext abstracts that out and honestly kind of hurts the overall utility of React. ---
The fact of the matter is I should have used redux for the global state management. But if I were to go back and refactor I would add in react-redux.


*I am not a typescript wiz*
But i would like to get better, that's why I used it here. Even if time constraints made it a less than ideal idea. But if this were to scale, having the bones of TS are a good idea. That's why I used it. 

