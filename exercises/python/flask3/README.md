# Server Side Programming exercises (Flask, JSON, SQLite), Part III.

## Exercise #1: JSON

Folder [ex_1](ex_1) contains the playlist application as a flask app.
Update the application, to store the playlist in a JSON file.
The file [fileaccess_json.py](ex_1/fileaccess_json.py) contains some ready utility functions for
creating, reading and storing a json file.

This includes the following steps:
* Create the JSON file with initial data.
* Load the file on server start.
* Write to the file, when the playlist is updated.

## Exercise #2 SQL

Use the [SQLite tryit editor](https://www.sqlitetutorial.net/tryit/) to create a table for the playlist.
Add 3 songs to the table.
Write a select statement, that returns all songs from a certain band.
Check [here](../../../examples/python/sqlite/postcodes.sql) SQL examples from the lecture.

#### Extra: 
Add a row `played` that contains how often a song was played.
- Write an update statement, that increments `played` for a given song.
- Write a `SELECT` statement that returns the two songs played most often.

You may want to use [ORDER BY](https://www.sqlitetutorial.net/sqlite-order-by/) and [LIMIT](https://www.sqlitetutorial.net/sqlite-limit/). 

