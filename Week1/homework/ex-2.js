const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'world'
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected");
})
  
function excuteCommand(x){
connection.query(x, (error, results) => {
    if (error) throw error;
    console.table(results)
 })
}

        // 1- countries with population greater than 8 million
excuteCommand("select * from city where Population > 8000000")

        // 2- countries that have “land” in their names
excuteCommand("select * from city where name like '%land%'")

        // 3- cities with population in between 500,000 and 1 million
excuteCommand("select * from city where Population between 500000 and 1000000")

        // 4- countries on the continent Europe
excuteCommand("select name from country where Continent = 'Europe' ")
        
        // 5- countries in the descending order of their surface areas.
excuteCommand("select name from country order by -SurfaceArea desc")

        // 6-  names of all the cities in the Netherlands
excuteCommand( "select name from city where CountryCode = 'NLD' ")

        // 7-  population of Rotterdam
excuteCommand( "select population from city where name = 'Rotterdam' ")

        // 8- top 10 countries by Surface Area
excuteCommand( "select name from country order by -SurfaceArea limit 10 ")

        // 9-  10 most populated cities
excuteCommand("select name from city order by Population desc limit 10 ")

        // 10-  population number of the world
excuteCommand(" select sum (population) from Country ")


connection.end();
