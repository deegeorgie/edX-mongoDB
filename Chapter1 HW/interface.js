/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  db.collection('movies').insert(doc, callback);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // var query = {};
  // query["director"] = director;

  var query = {
    "director": director
  };
  var orderByTitle = {
    "title": 1
  };

  // db.collection('movies').find(query).sort(orderByTitle).nextObject(function(error, docs) {
  db.collection('movies').find(query).sort(orderByTitle).toArray(function(error, docs) {
    if(error) {
      console.log(error);
      process.exit(1);
    }

    // docs.forEach(function(doc) {
    //  console.log(JSON.stringify(doc));
    // });

    callback(error, docs);
    // process.exit(0);
  });
};
