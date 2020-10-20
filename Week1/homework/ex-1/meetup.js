const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'meetup'
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected");
})
  
let meetup_database = "CREATE DATABASE meetup";
let Invitee_table = "create table Invitee (invitee_no int, invitee_name varchar(10), invited_by varchar(10))";
let Room_table = "create table Room (room_no int, room_name varchar(20), floor_number int)";
let Meeting_table = "create table Meeting ( meeting_no int, meeting_title varchar(20), starting_time datetime, ending_time datetime, room_no int)";

// values for the rows
let Invitee_names = ['ahmed', 'kim', 'salam', 'rag', 'nor', 'wasim'];
let roo_name = ['a', 'b', 'c', 'd', 'e'];
let meeting_title = ['time', 'work', 'learn', 'food', 'sport']


function createDatabaseOrTable (x) {
connection.query(x, (error, results) => {
    if (error) throw error;
    console.log(`${x}`)
 })
}

        // using the function to add the database and the tables

createDatabaseOrTable(meetup_database)
createDatabaseOrTable(Invitee_table)
createDatabaseOrTable(Room_table)
createDatabaseOrTable(Meeting_table)


        // loop 5 times and in each time insert values to the tables 
for ( let i = 1; i < 6; i++) {
    createDatabaseOrTable(`insert into Invitee values (${i}, '${Invitee_names[i-1]}', '${Invitee_names[5]}' )`);
    createDatabaseOrTable(`insert into Room values (${i}, '${roo_name[i-1]}', ${i} )`);
    createDatabaseOrTable(`insert into Meeting values (${i}, '${meeting_title[i-1]}', '2020-0${i}-01 1${i}:00:00', '2020-0${i}-01 1${i+2}:00:00', ${i} )`);
} 


        // drop evreything i created to try it again. uncomment  it we i need to use it

// let drop_meetup = "drop DATABASE meetup";
// let drop_Invitee_table = "drop table Invitee";
// let drop_Room_table = "drop table Room_table";
// let drop_Meeting = "drop table Meeting";

// function dropDatabaseOrTable (x) {
//     connection.query(x, (error, results) => {
//         if (error) throw error;
//         console.log(`${x}`)
//      })
//     }
    
    // dropDatabaseOrTable(meetup)
    // dropDatabaseOrTable(drop_Invitee_table)
    // dropDatabaseOrTable(drop_Room_table)
    // dropDatabaseOrTable(drop_Meeting)


connection.end();
