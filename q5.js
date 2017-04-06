var mongo = require('mongodb').MongoClient
var argv = process.argv
var firstName = argv[2]
var lastName = argv[3]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
      // db gives access to the database

      var names = {
      	firstName: firstName,
      	lastName: lastName
      };

      if(err) return console.error(err)
      var collection = db.collection('users');
    	collection.insert(names, function(err, data) {
    		if (err) throw err;
    		console.log(JSON.stringify(names));

    	})
      db.close();
    })

//console.log(argv)
