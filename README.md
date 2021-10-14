# Autocomplete with vanilla javascript
<small> Following the tutorial by Traversy Media on Youtube: [Quick autocomplete app with JS and JSON](https://www.youtube.com/watch?v=1iysNUrI3lw&list=PLYOHDo0h_ajqF8gOq5uaM2do6wUGy7_gU&index=18)</small>


<ins>Goal</ins>: Create a site that has an autocomplete search feature. When you put in the State name or abbreviations, it should show the capital of the state and the longitude and latitude.

<ins>Resources</ins>: json file with the state name, abbreviation, capital, longitude and latitude.

### Approach:

1. Write HTML using Bootstrap, FontAwesome
1. In the 'js' folder put the json file with the json file with the state name and capital details.
1. Select the input and results div with querySelectors.
1. Add an event listener to the input to be triggered whenever there is an 'input' event.
1. Create a searchStates function that takes in searchText, have it be an async function.
1. Await a fetch with the get method, then await converting it from json. Put the result in a const called states.
1. Filter states with a new RegExp expression that requires the search Query at the start. Match each state name, state abbr with the RegExp.
1. The result of the array filter is put in a const called matches.
1. If the search Query length is 0, set matches equal to an empty array, so that all the states don't show at the beginning.
1. Put matches into an outputHTML function.
1. Create an outputHTML function that takes in an array. Ensure this function only runs if the length of the loop is greater than zero. Use a reduce function to loop each entry in the array and put the state name, abbreviation, and capital (in blue) as well as the longitude and latitude in an html card and add it to the innerHTML of the match-list div in the index.html. 

