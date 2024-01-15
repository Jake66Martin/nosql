const connection = require('../config/connection');
const { User, Thought } = require('../models')
const users = require('./data')

const dropCollectionIfExists = async(model)=>{
    if ( await model.exists()) {
        await model.collection.drop()
    }
}

connection.once('open', async () => {

    await dropCollectionIfExists(User)
   

    await User.collection.insertMany(users);

    console.log('Seeding succesfull!')
    


})