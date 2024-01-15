const connection = require('../config/connection');
const { User, Thought } = require('../models')
const data = require('./data')

const dropCollectionIfExists = async(model)=>{
    if ( await model.exists()) {
        await model.collection.drop()
    }
}

connection.once('open', async () => {

    await dropCollectionIfExists(User)
    await dropCollectionIfExists(Thought)

    await User.collection.insertMany(comments);
    await Thought.collection.insertMany(comments);


})