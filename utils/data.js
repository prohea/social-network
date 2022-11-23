
const thoughts = [];

const users =[];

const reactions = [];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () =>
`${getRandomArrItem(users)}${Math.floor(Math.random() * 10 + 1)}`;

const getRandomThought = () => 
`${getRandomArrItem(thoughts)}${Math.floor(Math.random() *10 * 1)}`;

const getRandomReaction = () =>
`${getRandomArrItem(reactions)}${Math.floor(Math.random() *10 * 1)}`;

module.exports = {
    getRandomThought,
    getRandomUser,
    getRandomReaction,
    getRandomArrItem,
    genRandomIndex,
};