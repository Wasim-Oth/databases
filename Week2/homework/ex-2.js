
const mysql = require ('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected');
});

const create_Research_Papers =
     `
    create table Research_Papers (
    paper_id int Primary Key,   
    paper_title varchar(50),  
    publish_date datetime
    );
    `;

const insert_values_Research_Papers = 
    `
    insert into Research_Papers values 
        (1,      'sport',           '2019-01-02'),
        (2,      'food',            '2019-02-03'),
        (3,      'trees',           '2019-03-05'),
        (4,      'life',            '2019-04-07'),
        (5,      'kids',            '2019-05-08'),
        (6,      'sea',             '2019-06-12'),
        (7,      'weather',         '2019-08-4'),
        (8,      'forest',          '2019-06-03'),
        (9,      'happiness',       '2019-11-02'),
        (10,     'childhood',       '2019-12-09'),
        (11,     'love',            '2020-01-01'),
        (12,     'animals',         '2020-02-12'),
        (13,     'criminals',       '2020-03-4'),
        (14,     'war',             '2020-06-03'),
        (15,     'money',           '2020-08-07')
    `;

const create_authors_Research_table = 
    `
    create table authors_Research (
        id int primary key AUTO_INCREMENT, 
        author_id int, FOREIGN KEY (author_id) REFERENCES Authors (author_no),
        paper_id int, FOREIGN KEY (paper_id) REFERENCES Research_Papers (paper_id)
        )
    `;

const insert_values_authors_Research = 
    `
    insert into authors_Research values
        (1, 2, 7),
        (2, 4, 2),
        (3, 6, 4),
        (4, 7, 11),
        (5, 9, 8),
        (6, 2, 11),
        (7, 3, 15),
        (8, 13, 7),
        (9, 4, 5),
        (10, 14, 1),
        (11, 2, 8),
        (12, 7, 1),
        (13, 1, 4),
        (14, 3, 6),
        (15, 2, 9)
    `;
        
function addQuery (query) {
connection.query(query, (err, result) => {
    if (err) throw err;
    console.table(result)
 })
}


addQuery(create_Research_Papers)
addQuery(insert_values_Research_Papers)
addQuery(create_authors_Research_table)
addQuery(insert_values_authors_Research)


connection.end();