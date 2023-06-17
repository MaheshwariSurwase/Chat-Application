import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-pvy6ajj-shard-00-00.39inbrf.mongodb.net:27017,ac-pvy6ajj-shard-00-01.39inbrf.mongodb.net:27017,ac-pvy6ajj-shard-00-02.39inbrf.mongodb.net:27017/?ssl=true&replicaSet=atlas-4b9yng-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;