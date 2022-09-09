# Joke Page
### Overview of project
This page was made so you can have a bunch of jokes at your disposal. You can fetch jokes to the page, pull up a random joke, or add your own joke.

##### Features:
   * Press "Fetch More Jokes" to add jokes
   * The jokes will automatically go in the correct category
   * Press "Random Joke" to pull up a random joke
   * Use the dropdown to go to a specific category
   * Press "Add A Joke", fill in a new joke and choose category

### Requirements
* Have json.server installed

### Installation Instructions
* Fork and clone
* Run json.server for db.json (json-server --watch db.json)
* Open index.html in the browser

### Problems
*     Part of the code in the fetchJokes function has a formula to stop repeated jokes from being posted, but doesn't work 100%. So another formula is needed at fetchUploadedJokes function. Would like to cut that down.
* The random joke box doesn't go under the navbar.
* Update the new add joke box.

### Licensing
* I used the following website: 
        https://sv443.net/jokeapi/v2/