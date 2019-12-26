# Introduction 
Wrapping Mongo client with basic functions with promises support
# Build
npm install mongo-wrapper

# Get Started
    let entity = {
        "entityName" : "Adi"
    };

    const QueryUtil = require("mongo-query-util");
    const queryUtil = new QueryUtil("MONGO_CONNECTION_STRING");

    //returns the edited entity with mongo id...
    await queryUtil.connect();
    //replace COLLECTION_NAME with the required collection
    let dbEntity =  await queryUtil.save(COLLECTION_NAME, entity);



## API

### Get By ID
```
    let dbEntity = await queryUtil.getById(COLLECTION_NAME, id);  
```

### Find One
http://mongodb.github.io/node-mongodb-native/3.4/api/Collection.html#findOne
```
    let dbEntity = await queryUtil.findOne(COLLECTION_NAME, query);  
```

### Find All
http://mongodb.github.io/node-mongodb-native/3.4/api/Collection.html#find
```
    let dbEntities = await queryUtil.findAll(COLLECTION_NAME, query);  
```

### save
http://mongodb.github.io/node-mongodb-native/3.4/api/Collection.html#save
```
    await queryUtil.save(COLLECTION_NAME, entity);  
```

### insert
http://mongodb.github.io/node-mongodb-native/3.4/api/Collection.html#insert
```
    await queryUtil.insert(COLLECTION_NAME, entity);  
```