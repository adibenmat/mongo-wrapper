const Promise = require('bluebird');
const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;
const ObjectId = MongoDB.ObjectID;

let QueryUtil = class QueryUtil {
  constructor(url) {
    this.url = url;
    this.dbInstace = null;
  }

  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, (err, db) => {
        if (err) {
          reject(err);
        }

        this.dbInstace = db;
        resolve();
      });
    })
  }

  getById(collectionName, id) {
    return new Promise((resolve, reject) => {
      try {
        const objectId = new ObjectId(id);
        this.dbInstace.collection(collectionName)
          .findOne({
            _id: objectId
          }, (err, doc) => {
            if (err) {
              throw err;
            }
            db.close();
            resolve(doc);
          });
      } catch (ex) {
        reject(ex);
      }
    });
  }
  

  findOne(collectionName, query) {
    return new Promise((resolve, reject) => {
      try {   
        this.dbInstace.collection(collectionName)
          .findOne(query, (err, doc) => {
            if (err) {
              throw err;
            }
            db.close();
            resolve(doc);
          });
      } catch (ex) {
        reject(ex);
      }
    });
  }


  findAll(collectionName, query) {
    return new Promise((resolve, reject) => {
      try {   
        this.dbInstace.collection(collectionName).find(query, (err, docs) => {
            if (err) {
              throw err;
            }
            db.close();
            resolve(docs);
          });
      } catch (ex) {
        reject(ex);
      }
    });
  }

  insert(collectionName, objectToInsert) {
    return new Promise((resolve, reject) => {
      try {
        this.dbInstace.collection(collectionName)
          .insert(objectToInsert, function (err, result) {
            if (err) {
              throw err;
            }
            db.close();
            resolve(result);
          });
      } catch (ex) {
        reject(ex);
      }
    });
  }

  save(collectionName, objectToSave) {
    return new Promise((resolve, reject) => {
      try {
        this.dbInstace.collection(collectionName)
          .save(objectToSave, function (err, result) {
            if (err) {
              throw err;
            }
            db.close();
            resolve(result);
          });
      } catch (ex) {
        reject(ex);
      }
    });
  }
};

module.exports = QueryUtil;
