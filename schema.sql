DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;


CREATE TABLE message(

`id` Int(11) AUTO_INCREMENT  NOT NULL,    
`author` VARCHAR (255) NOT NULL,
`body` VARCHAR (255) NOT NULL,
`created_at` DATETIME NOT NULL,

PRIMARY KEY (`id`);
);

-- Note the backticks dont work on sql pro


------------------
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE message(
id INT(11) AUTO_INCREMENT NOT NULL,
author VARCHAR (255) NOT NULL,
body VARCHAR (255) NOT NULL,
created_at DATETIME NOT NULL,

PRIMARY KEY (id)
);