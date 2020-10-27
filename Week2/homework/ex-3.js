
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


    // 1-
const show_authors_and_Collaborator =
     `
    select a.author_no as author_id, a.author_name, a.Collaborator as Collaborator_id,  b.author_name as Collaborator_name from authors a
    join authors b
    on a.Collaborator = b.author_no
    order by a.Collaborator asc;
    `;


    // 2-
const show_authors_and_their_paper_title = 
    `
    select authors.author_name,  Research_Papers.paper_title from authors_research
     join Research_Papers 
     right join authors
     on authors.author_no = authors_research.author_id
     and Research_Papers.paper_id = authors_research.paper_id 
     order by authors.author_name asc;
    ` ;

function addQuery (query) {
connection.query(query, (err, result) => {
    if (err) throw err;
    console.table(result)
 })
}


addQuery(show_authors_and_Collaborator)
addQuery(show_authors_and_their_paper_title)


connection.end();