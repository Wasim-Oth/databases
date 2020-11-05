
// 1- How can you convert the table into 1NF ?
// in the attribute food_code and food_description there are dublicated values and that violate 1NF 
// so we can have separate columns food_code1, food_code2, food_code3 and same for food_description.


// 2- What are the super, candidate, primary keys in the table created in step (1)? 

//   super key 1 { member_name + member_address + any other attribute}
//   super key 2 { member_id + any attrbute }
//   candinate key 1 {member_name + any attrbute } or { member_address +  any attrbute }
//   candinate key 2 member_id
//   primary key member_id



// 3- How can you develop the set of 2NF tables? (Think of relationships between different tables)?
// 4- How can you develop the set of 3NF tables?


// answer 3- there is Partial Dependency which violate the 2NF.  food and venue depend on dinner_id  NOT on member_id PK. 
// answer 4- there is transitive dependency which violate the 3NF. venue_description depend on venue_code which is not part of PK AND 
//  food_description depend on  food_code  which os also not part of PK
// now lets make it in 2 and 3NF.

// table members ( member_id primary key,  member_name, member_address )
// table venue (venue_code primary key, venue_description)
// table food ( food_code primary key, food_description )
// table dinner ( dinner_id primary key, dinner_date, member_id foreign key, venue_code foreign key, food_code foreign key)

// relationship between tables
// 1- The relation between dinner and  members is 1-M because each dinner have one or more members while in members table each member is invited to one dinner. 
// 2-  the relation between venue and dinner is also 1-1 each venue_code has one dinner AND each dinner has one venue_code.
// 3-the relation between food and dinner is M-M because each dinner has many food_code AND each food_code has many dinners.
// so for that we need to create new table dinner_food, this table has the 2 pk from the food and dinner tables as an foreign keys and both keys together are pk for this new table.  
