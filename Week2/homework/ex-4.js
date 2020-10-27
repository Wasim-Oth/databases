
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
const research_papers_and_authors_that_wrote_it =
    `
    select r.paper_title, a.author_name as author_name, a.author_no as author_id
    from authors_research a1
    join research_papers r
    join authors a
    on a.author_no = a1.author_id
    and r.paper_id = a1.paper_id
    order by r.paper_title asc ;
   `;


    // 2
const research_papers_published_by_female =
     `
     select count(r.paper_id) as research_papers_published_by_female
     from Research_Papers r
     join authors a
     on a.author_no =  r.paper_id
     where a.gender = "f" ;
    `;

    // 3-
const Average_h_index_all_authors_per_university =
    `
    select a1.university, avg(a2.h_index) as Average_h_Index
    from authors a1 
    join authors a2
    on a1.author_no = a2.author_no
    group by a1.university;
    `;


    // 4-
const Sum_research_papers_authors_per_university =
    `
    select a.university,  count(r.paper_id) as research_papers
    from authors_research a1
    join authors a
    join Research_Papers r
    on a.author_no = a1.author_id
    and r.paper_id = a1.paper_id
    group by a.university;
    `;


    // 5-
const Minimum_and_maximum_h_index_all_authors_per_university =
    `
    select a1.university, min(a2.h_index) as Minimumh_index, max(a2.h_index) as Maximum_h_index
    from authors a1
    join authors a2 
    on a1.author_no = a2.author_no
    group by a1.university;
    `;

function addQuery (query) {
connection.query(query, (err, result) => {
    if (err) throw err;
    console.table(result)
 })
}

addQuery(research_papers_and_authors_that_wrote_it)
addQuery(research_papers_published_by_female)
addQuery(Average_h_index_all_authors_per_university)
addQuery(Sum_research_papers_authors_per_university)
addQuery(Minimum_and_maximum_h_index_all_authors_per_university)


connection.end();