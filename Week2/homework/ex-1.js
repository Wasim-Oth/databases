
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

const create_author_table = `
    create table Authors (
    author_no int Primary Key,   
    author_name varchar(50), 
    university varchar(50), 
    date_of_birth datetime,
    h_index int,
    gender varchar(50) 
    );`;

const foreing_key =
     `
    ALTER TABLE Authors add column Collaborator int,
    ADD constraint FOREIGN KEY (Collaborator) REFERENCES Authors (author_no);
     `;


 const insert_values_Authors =
     `
     insert into Authors values
     (1,            'jhon',       'University of Cambridge' ,     '1970-01-02',      6,      'm',         null),
     (2,            'ahmed',      'Stanford University' ,         '1990-02-02',      2,      'm',         null),
     (3,            'sadeq' ,     'Harvard University' ,          '1994-06-02',      4,      'm',         null),
     (4,            'fatma' ,     'University of Oxford' ,        '1992-08-02',      6,      'f',         null),
     (5,            'laura' ,     'University of Chicago' ,       '1993-01-02',      5,      'f',         null),
     (6,            'sara'  ,     'mperial College London' ,      '1994-03-07',      3,      'f',         null),
     (7,            'rezan' ,     'University of Oxford' ,        '1980-05-02',      7,      'm',         null),
     (8,            'omar'  ,     'Tohoku University' ,           '1983-08-02',      2,      'm',         null),
     (9,            'ava' ,       'University of Oxford' ,        '1987-09-02',      5,      'f',         null),
     (10,           'sami' ,      'Harvard University'  ,         '1984-03-02',      8,      'm',         null),
     (11,           'ali' ,       'Stanford University' ,         '1982-06-06',      9,      'm',         null),
     (12,           'roan' ,      'University of Cambridge' ,     '1978-01-07',      5,      'f',         null ),
     (13,           'nhoa' ,      'University of Leeds' ,         '1979-01-03',      2,      'm',         null),
     (14,           'alex' ,      'mperial College London' ,      '1974-03-03',      4,      'm',         null),
     (15,           'lona' ,      'University of Cambridge' ,     '1987-06-06',      9,      'f',         null)
     `;
 

 const update_Collaborator =
     `
     update authors set
        Collaborator = (case
            when author_no=1 then 5
            when author_no=2 then 4
            when author_no=3 then 5
            when author_no=4 then 6    
            when author_no=5 then 7
            when author_no=6 then 4
            when author_no=7 then 11
            when author_no=8 then 10    
            when author_no=9 then 5
            when author_no=10 then 9
            when author_no=11 then 1
            when author_no=12 then 1    
            when author_no=13 then 6
            when author_no=14 then 4
            when author_no=15 then 12  
            end)
         WHERE author_no IN (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
     `;


function addQuery (query) {
    connection.query(query, (err, result) => {
        if (err) throw err;
        console.table(result)
    })
    };

addQuery(create_author_table)
addQuery(foreing_key)
addQuery(insert_values_Authors)
addQuery(update_Collaborator)



connection.end();