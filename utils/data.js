const users = [
    'exuser',
    'digi',
    'mon',
    'poke',
    'techy',
    'smiley',
    'snowy',
    'grumpy',
    'drowsy',
    'cloudy'
  ];
  
  const thoughts = [
    'This is a thought',
    'Good day',
    'Bad day',
    'Okay day',
    'Chores',
    'Food',
    'Homework',
    'Work',
    'I love to write',
    'I dislike salty food'
  ];
  
  const reactions = [
    'like',
    'dislike',
    'okay',
    'great',
    'superb',
    'fabulous',
    'sleepy',
    'bored',
    'shocked',
    'hungry'
  ];
  

 // Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
 
// Gets a random full name
const getRandomUser = () =>
  `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;

// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      thoughts: getRandomArrItem(thoughts),
      buildSuccess: Math.random() < 0.5,
      reactions: [...getReactions(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each application
const getReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomUser(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts };