const mysql = require ('mysql');
const util = require('util');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'week3_ex_2'
})

const executeQuery = util.promisify(connection.query.bind(connection));

const create_table_account  = `
    create table IF NOT EXISTS account  ( 
        account_number int primary key,
        balance float 
        );
     `;

const create_table_account_changes = `
    create table IF NOT EXISTS account_changes ( 
        change_number int primary key auto_increment,
        account_number int ,
        amount float,
        changed_date dateTime,
        remark varchar(50),
        foreign key (account_number) REFERENCES account (account_number)
        );
    `;


async function seedDatabase () {
    connection.connect();

    try {
        await executeQuery(create_table_account )
        await executeQuery(create_table_account_changes)

        console.table(create_table_account )
        console.table(create_table_account_changes)

    } catch (error) {
        console.error(error);
        connection.end();
    }

    connection.end();
}

seedDatabase()

