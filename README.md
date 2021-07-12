# mySQL-weekly-challenge

Video Link: https://drive.google.com/file/d/1AHGlYfnChpqLHulBqi4wjX1mi72cw6-Q/view


This challenge required the mysql2 package to connect to the mySQL databases, as well as the inquirer package to collect user input and use it to create and update 
records stored in the tables. The cTable package was used to make the returned tables look more readable in the terminal.

This application displays options to view one of the SQL tables, add information to any of the tables, or update existing information for records in the employees table. 
One issue that I encountered during this was the use of a Foreign Key in my tables. I intended on using the primary key of the department table (which is department IDs), as a foreign key in my roles table, but for some reason I was unable to. I asked for help using the AskBCS learning assistant, and both assistants were unable to help me. 
They were able to clone my code and said that it was functioning properly on their devices, but for some reason it was not functioning on mine. This is why the 'departments_id' column in the roles table displays nulls.
