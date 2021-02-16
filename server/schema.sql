CREATE DATABASE movies;

USE movies;

CREATE TABLE movielist (
    id INT AUTO_INCREMENT,
    title TEXT, 
    overview VARCHAR(255),
    releaseDate VARCHAR(255),
    voterAverage VARCHAR(255),
    PRIMARY KEY(id)
);

