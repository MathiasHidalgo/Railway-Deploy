/*YOU NEED TO EXECUTE THIS CODE IN THE COMMAND PROMPT IN THE SV OF MYSQL*/
/*Creating a table called users and it has and ID who increment everytime you acces to /create*/
/*And a name that is written in VALUES*/
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);