  
//  if i enter any sting for country and code and then write   OR  1=1;  select * from country;
//  this will fetch all the records because 1=1 is always true.
//  name = 'nowhere',  code = 'non' OR 1=1; select * from country;


// to avoid this problem we should make changes in the query:  name = ? and code = ?

// function getPopulation(Country, name, code, cb) {
//     // assuming that connection to the database is established and stored as conn
//     conn.query(
//       `SELECT Population FROM ${Country} WHERE Name = ?  and code = ? `,
//       function(err, result) {
//         if (err) cb(err);
//         if (result.length == 0) cb(new Error("Not found"));
//         cb(null, result[0].name);
//       }
//     );
//   }




