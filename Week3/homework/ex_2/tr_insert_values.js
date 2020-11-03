const mysql = require ('mysql');
const util = require('util');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'week3_ex_2'
})

const executeQuery = util.promisify(connection.query.bind(connection));

const insert_values_account  = `
    insert into account values  ( 101, 1500), (102, 350), (103, 600), (104, 700); 
     `;

const  insert_values_account_changes = `
    insert into account_changes values ( 1, 101, 450, '2010-02-23 13:00:00', 'updated'), ( 2, 102, 550, '2020-11-13 15:00:00', 'updated'),
    ( 3, 103, 1220, '2010-03-01 11:00:00', 'updated'), ( 4, 104, 660, '2010-08-03 17:00:00', 'updated');
       
    `;

async function seedDatabase () {
    connection.connect();

    try {
        await executeQuery( insert_values_account )
        await executeQuery( insert_values_account_changes)

        console.table( insert_values_account )
        console.table( insert_values_account_changes)

    } catch (error) {
        console.error(error);
        connection.end();
    }

    connection.end();
}

seedDatabase()
