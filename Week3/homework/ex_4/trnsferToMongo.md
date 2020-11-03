1- make account on Atlas
2-  create Cluster
3- create user
4 -deom newtwork accsess coneect with my ip adress  
5- go to Cluster and click on connect chose connect using mongoDB compass
6- copy the link 
6- download mongoDB compass
7-open mongoDB compass and past the link, in the link change the password with my user password and click connect.
8- in my mongoDB compass click on create collection. database name (world) and name for the collection (city).
 if i click on the collection (city) i can import data from my sqldb. for that i go to my sql command line and export the table city. 

9- open sql command line and past this line to export the city table : select * into outfile 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/city.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from city;
10 - open the city.csv and add coulmn for the attributes name so when i import it to mongoDB compass i can specify the type of the data

10- go back to mongoDB compass and import city.csv

11- add more collection (country) and  (countrylanguage) with the same steps.

NOTE: there are mistakes in (counrty) i had to fix.


