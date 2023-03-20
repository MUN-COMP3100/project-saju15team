Late Submission: Monday 
## COMP3100 - Project 2
### The Shire University: Course registration and management tool

#### How to initiate the Database
###### We are using mongodb to implement the Database
1. Download '2021-fall.csv' in the root folder using the following link: [Drive Link](https://drive.google.com/file/d/131Equ05JJ30mu-5HY0k5FleI5NteF0x5/view?usp=sharing) 
2. Other csv files, 'students.csv' and 'professors.csv' are already uploaded in the root folder.
3. Open terminal and run the following commands in the root folder:
- mongoimport --db=course_catalog --type=csv --headerline --collection=fall 2021-fall.csv
- mongoimport --db=course_catalog --type=csv --headerline --collection=students students.csv
- mongoimport --db=course_catalog --type=csv --headerline --collection=professors professors.csv

#### Program Architecture:

#### Server side
1. Model folder --> includes course, student and professor classes with methods that will be used to implement Server Features.
2. Controller folder --> Organizes methods above to receive and send request/response objects.
2. App.js --> Main server implementation that invokes methods from controller.

#### Client side
1. ModuleTests folder --> Client side architecture to test class methods individually.
(Not the main test)
2. ServerFeatures folder --> Implements 6 server features individually.
(Read more about each features below.)
3. node_modules --> all required packages are installed.

#### Implementation Description 

###### How to run/shutdown the Server:
1. To run : after the database in initiated successfuly, run 'node app.mjs' command in the terminal
2. To shutdown: after the test, press 'ctrl + c' to close the connection/ server.

###### Mocha Test:
1. 'main-test.mjs' inside the test folder implements mocha tests for all 6 features.
2. To run the test, type the following command in the terminal(root folder) --> npm test
3. Features can be also tested seperately. (read Description section.)

#### Feature Description:

###### Feature #1: Login
1. Description - 
2. Implementation Strategy - 
3. Dependencies - 
4. State of the Implementation - 
5. How to test - 

###### Feature #2: Course Search
1. Description - 
2. Implementation Strategy - 
3. Dependencies - 
4. State of the Implementation - 
5. How to test - 

###### Feature #3: Registration
1. Description - 
2. Implementation Strategy - 
3. Dependencies - 
4. State of the Implementation - 
5. How to test - 

###### Feature #4: Personal-Info 
1. Description - 
2. Implementation Strategy - 
3. Dependencies - 
4. State of the Implementation - 
5. How to test - 

###### Feature #5: Course Schedule
1. Description - 
2. Implementation Strategy - 
3. Dependencies - 
4. State of the Implementation - 
5. How to test - 

###### Feature #6: Detail page
1. Description - 
2. Implementation Strategy - 
3. Dependencies - 
4. State of the Implementation - 
5. How to test - 
