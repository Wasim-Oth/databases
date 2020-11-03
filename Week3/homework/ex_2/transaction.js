const mysql = require ('mysql');
const util = require('util');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'week3_ex_2'
})

const executeQuery = util.promisify(connection.query.bind(connection));

const withdraw_amount  = `
    update account set balance = balance - 1000 where account_number = 101; 
     `;

const transfer_amount  = `
    update account set balance = balance + 1000 where account_number = 102; 
`;

const insert_withdraw_amount_changes_table = ` insert into  account_changes values ( 5, 101, -1000, '2010-02-26 11:00:00', 'withdraw 1000'     )  `;
const insert_add_amount_changes_table = ` insert into account_changes values (6, 102, +1000, '2010-02-26 11:00:00', 'received 1000'  )  `;

async function seedDatabase () {
    connection.connect();

    try {
        await executeQuery('start transaction')
        await executeQuery( withdraw_amount  )
        await executeQuery( transfer_amount )
        await executeQuery(insert_withdraw_amount_changes_table)
        await executeQuery(insert_add_amount_changes_table)
        
        console.table( transfer_amount )
        console.table( withdraw_amount)
        await executeQuery("COMMIT");

    } catch (error) {
        console.error(error);
        await executeQuery ('rollback');
        connection.end();
    }

    connection.end();
}

seedDatabase()