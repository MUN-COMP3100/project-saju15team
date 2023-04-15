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
- mongoimport --db=course_catalog --type=csv --headerline --collection=faq faq.csv

### Link to Demonstration Video: 
[Drive Link](https://drive.google.com/file/d/1o2_zaCm0DHubTf7-2G0o2MDzRDlvJcyf/view?usp=sharing)

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
1. To run : after the database in initiated successfuly, run 'node app.mjs' command in the terminal.
2. To shutdown: after the test, press 'ctrl + c' to close the connection/ server.


####Server-side Feature Description:

###### Feature #1: Login
1. Description - This feature allows students to log in to the system using their credentials, i.e. their university email and password.
2. Implementation Strategy - The html labels allow students to enter their email and password in the appropriate labels. The credentials are then sent to the server side for validation. If the credentials are valid, the student is logged in and directed to the dashboard. If not, the user is notified of the error
3. Dependencies - *login.html* file and *login.js* file.
4. State of the Implementation - Completed



###### Feature #2: Course Search
1. Description - This feature allows students to search for courses by crn, subject and number.
2. Implementation Strategy - The html labels allow the user to input a course name, number or crn. The data is then sent to the server side to retrieve the course. If the course is found, its details are displayed, if not,the user is notified that the course could not be found
3. Dependencies - *search.js* file and *search.html* file.
4. State of the Implementation - Complete 


###### Feature #3: Registration
1. Description - This feature allows users to register for a course/drop a course.
2. Implementation Strategy -  The user enters crn of the course they want to register for/drop in the search bar. The information is then sent to the server side to update the database. The changes are then reflected on the client side. 
3. Dependencies - *registration.js* file and *registration.html* file. 
4. State of the Implementation - completed


###### Feature #4: Personal-Info 
1. Description - This feature allows students to view their personal information such as name, email address, phone number, and address.
2. Implementation Strategy - User information is stored in a database and retrieved to display on the personal-info page. Users can update their information using a form, and the updated information is stored in the database.(yet to implement)
3. Dependencies - *findStudentById* method of the *student* class and the *find_student_info* method of the *students* class.
4. State of the Implementation - Completed

###### Feature #5: Course Schedule
1. Description - This feature allows students to view their course schedule.
2. Implementation Strategy - The course schedule is stored in a database, student object is retrieved to display the course schedule. The schedule is displayed in a table format with information such as course name, number, days of class and time.
3. Dependencies - *getRegisteredCourses* method in the *student* class and *get_reg_courses* method of the *students* class.
4. State of the Implementation - Completed

###### Feature #6: Detail page(Button)
1. Description - This feature allows students to view detailed information about a particular professor.
2. Implementation Strategy - The professor information is stored in a database and retrieved to display on the detail page. The detail page displays information such as the professor's name, email, office , and department.
3. Dependencies - *Professor* class 
4. State of the Implementation - Complete
#### Feature Description:

###### Feature #1: Login
1. Description - This feature allows students to log in to the system using their credentials, i.e. their university email and password.
2. Implementation Strategy - The student's credentials are verified against the database of registered students. If the user's credentials are correct, the user is redirected to their dashboard(will be implemented in the future). Otherwise, an error message is displayed.
3. Dependencies - *matchLoginCredentials* method of the *student* class and *verifyLoginCredentials* method in the *students * class.
4. State of the Implementation - Completed



###### Feature #2: Course Search
1. Description - This feature allows students to search for courses by crn, subject and number.
2. Implementation Strategy - The course information is stored in a database collection 'fall', and the search query is used to filter the courses that match the search criteria. The search results are then displayed to the user.
3. Dependencies - All the methods implemented by the *Course* class.
4. State of the Implementation - Complete 


###### Feature #3: Registration
1. Description - This feature allows users to register for a course/drop a course.
2. Implementation Strategy -  The user enters crn of the course they want to register for/drop. The course's registration list is stored in a database and is updated. 
3. Dependencies - Methods from *Student* and *Course* classes. 
4. State of the Implementation - completed


###### Client-side Feature #4: Personal-Info 
1. Description - This feature allows students to view their personal information such as name, email address, phone number, and address.
2. Implementation Strategy - User information is requested from server and presented in the form of an html table
3. Dependencies - *studentInfo.html* file and *studentInfo.js* file.
4. State of the Implementation - Completed

###### Feature #5: Course Schedule
1. Description - This feature allows students to view their course schedule.
2. Implementation Strategy - An array of registered courses corresponding to the user is requested from server and presented in the form of a table in the format of a course schedule
3. Dependencies - *schedule.js* file and *schedule.html* file.
4. State of the Implementation - Completed

###### Feature #6: Professor Detail page
1. Description - This feature allows students to view detailed information about a particular professor.
2. Implementation Strategy - The professor information is stored in a database and retrieved to display on the detail page. The detail page displays information such as the professor's name, email, office , and department.
3. Dependencies - *Professor* class 
4. State of the Implementation - Complete
