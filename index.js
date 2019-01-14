const Promise = require('bluebird');
const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;
const ObjectId = MongoDB.ObjectID;

let QueryUtil = class QueryUtil {
  constructor(url,collectionName) {
    this.url = url;
    this.collectionName = collectionName;
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      try {
        const objectId =  new ObjectId(id);
        MongoClient.connect(this.url, (err, db) => {
          db
            .collection(this.collectionName)
            .findOne({ _id:  objectId}, (err, doc) => {
              if(err){
                throw err;
              }              
              db.close();
              resolve(doc);
            });
        });
      } catch (ex) {
        reject(ex);
      }
    });
  }

  insert(objectToInsert){
    return new Promise((resolve, reject) => {
      try{      
        MongoClient.connect(this.url, (err, db) => {
          db
            .collection(this.collectionName)
            .insert(objectToInsert, function(err, result) {
              if(err){
                throw err;
              }
              db.close();
              resolve(result);
            });
        });
    }
    catch(ex){
      reject(ex);
    }
    });
  }

  save(objectToSave){
    console.log(objectToSave);
    return new Promise((resolve, reject) => {
      try{      
        MongoClient.connect(this.url, (err, db) => {
          db
            .collection(this.collectionName)
            .save(objectToSave, function(err, result) {
              if(err){
                throw err;
              }
              db.close();
              resolve(result);
            });
        });
    }
    catch(ex){
      reject(ex);
    }
    });
  }
};

  module.exports = QueryUtil;







