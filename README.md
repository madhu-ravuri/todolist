# A Simple Todo List

A React-based project for creating a simple todo list, complete with edit, delete, and search features.

# Libraries Used

Bootstrap, Styled-Components, React-Icons (FontAwesome).

#

This project was started on August 31 and took about six days to complete. I alloted each day to a different feature to be added. The schedule was roughly as follows:
  
  Day One - Login Form & Validations
  Day Two - API call (POST Request)
  Day Three - API Troubleshooting, Create List Item, Delete List Item
  Day Four - Edit List Item, Search List
  Day Five - Search List, CSS/Styling
  Day Six - Search List, Styling, General troubleshooting
 
I spent the longest time on the API request and the search feature, which turned out to be the two fields that gave me the most difficulty. In the end, I was not able to excecute either perfectly. I do plan on continuing to troubleshoot both. For the API call, my issue lies in the CORS permissions. I did some initial troubleshooting by starting to build a server side (found in the 'server' branch of this project) with a server.js file and using `nodemon`. I plan on revisiting that in order to achieve a successful response. As for the search function, I would like to refactor my components in order to clean up my code and separate the Search function into both an `onChange` and `onSubmit` in order to more precisely target the search terms.
