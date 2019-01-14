# Introduction 
Wrapping Mongo client with basic functions with promises support
# Build
npm install mongo-wrapper

# Get Started
    let entity = {
        "entityName" : "Adi"
    };

    const QueryUtil = require("mongo-wrapper");
    const queries = new QueryUtil("MONGO_CONNECTION_STRING", "COLLECTION_NAME");

    //returns the edited entity with mongo id...
    let dbEntity =  await queries.save(entity);

