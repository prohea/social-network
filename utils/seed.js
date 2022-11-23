const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts, getRandomUser, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    
    await Thought.deleteMany({});

    await User.deleteMany({});

    const users = [];

    for (let i = 0; i < 20; i++) {
        const thoughts = getRandomThoughts();

        const users = getRandomUser();
        const reactions = getRandomReaction();

        users.push({
            thoughts,
            reactions
        });
    }
    
    await User.collection.insertMany(users);

    await Thought.collection.insertOne({
        thoughts: [...thoughts],
        reactions: [...reactions],
        users: [...users],
    });

    console.table(users);
    console.info('Seeding complete!');
    process.exit(0);
});