# Exam project

- [Exam project](#exam-project)
  - [Project presentation:](#project-presentation)
  - [Dates](#dates)
  - [Overview:](#overview)
  - [Groups:](#groups)
  - [Collaboration requirements:](#collaboration-requirements)
  - [Meeting](#meeting)
  - [Report](#report)
  - [Project delivery](#project-delivery)
- [Project requirements](#project-requirements)
  - [Technology allowed](#technology-allowed)
      - [Backend:](#backend)
      - [Frontend:](#frontend)
      - [Layout:](#layout)
  - [Functional requirements](#functional-requirements)
    - [AJAX and REST API](#ajax-and-rest-api)
    - [Login](#login)
    - [Data items](#data-items)
    - [Data collection display](#data-collection-display)
    - [Validation](#validation)
    - [Layout](#layout-1)
    - [Additional features](#additional-features)
  - [Grading](#grading)
      - [Score table](#score-table)
- [Project presentation](#project-presentation-1)
  - [Help and plagiarism](#help-and-plagiarism)

##  Project presentation:

Find more info [here](projectpresentation.md)

## Dates
| Date   |        |              |
| ------ | ------ | ------------ |
| 08.04. | start  |              |
| 22.04. | report | **deadline** |
| 09.06. | code   | **deadline** 23:59 |
| 10.06. | presentation |  |
| 11.06. | presentation |  |


## Overview:
For the exam project you are required to design and implement a complete web application, frontend and backend.

You are free to chose what kind of application you implement, but restrictions apply to both [technology that you may use](#technology-allowed) and there is some [required functionality](#functional-requirements).

## Groups:
You are expected to do the project in groups of 2.
You can form groups yourself, and register your group on quickfeed.

If you need to find a partner, you can either:
- Write on the group finder channel on discord.
- Write an email to Leander, asking to be put into a group.

If you want to work alone, you need a good reason to do so.
If you want to work alone, and you have a good reason to do so, send an email to leander.

## Collaboration requirements:
After forming a group on quickfeed, you will receive a group repository on github.
Use this repository to coordinate your work.
Both group members need to contribute.
As a rule of thumb, you should make at least 20% of the commits.

## Meeting
Every group should meet at least once with me, before handing in your draft report.
This is to make sure you are on track.
Use the [this link](https://outlook.office.com/bookwithme/user/90a9d200a112481b8677a71c1ab2a195@uis.no/meetingtype/JGZ6VY1RAkW6EEKm8DPmJw2?anonymous&ep=mlink) to book a meeting. Send a message if no times are available.

## Report
2 weeks after the start of the project, you have to upload a report or draft describing the application that you want to implement.
The report must contain the following:

1. What does the application do?
2. What data is stored in files/ database?
3. An initial layout for your page.
   The initial layout can be created as a static HTML page, or simply as an image (e.g. you can use PowerPoint).

The report does not need to include all provided functionality, and you can change specific functionality, data and page layout. 
However, the overall theme for the page is binding.

*The report needs to be uploaded to your groups github repository.*

## Project delivery
On the final delivery you should hand in your complete code, and a README.md markdown file.
Your code should also include a SQLite database or files including example data.

The `README.md` file should contain the following sections:

- How to run: e.g. 
    > Start the application by running `app.py` in the application folder.
- Instructions for testing, e.g. `username` and `password` for existing users.
- List of all functionality: List all implemented functionality, to make sure all your work is taken into account. For example
    * Preferences are stored in a cookie and present if the user revisits the page.
    * New categories can be added on the category pages. 
      * An Icon and color can be chosen for the category.
    * If the user tries to register a password with less than 5 characters, an Error is displayed.



# Project requirements

## Technology allowed
You need to use the technology from the course.
You may only use the frameworks listed below. If you are unsure if something is allowed, please ask on Discord.

#### Backend:
Your web server should be Flask. Data should be stored either in an SQLite database or on files.
You may use the Flask-login plugin, but that is not required. If you do so, note it in your README.md.
If you want to use a Object-Relational-Mapper (ORM), you may use SQLAlchemy.

You cannot use Flask-forms or Flask-WTF or similar.

#### Frontend:
The frontend should be either pure JS or Vue.
You may use plugins like Vuex or Vue-Router in Vue.
You may use the Lodash JS library.
You may use all buildin JS APIs.
You may use use either Vue version 2 or 3.

You are not allowed to use a different JS Framework like React.

You may use additional JS libraries for achieving extra functionality, e.g. showing graphs, or similar. 
Ask on discord, and mention what is used and for what in your README.

#### Layout:
You can either use plain CSS or Bootstrap.
If you copy CSS files from the web, e.g. `reset.css` or `normalize.css`, you must specify this in the README.md. If specified, it will not count as plagiarism.

## Functional requirements
The following are the functional requirements which build the bases for grading your project.
You can omit some features, but this will effect grading.

### AJAX and REST API

You are free to implement a Single page application (SPA) or an application with multiple routes using Flask templates.

However, some part of your application needs to be implemented using AJAX calls.
The naming of routes in your flask application should follow REST API principles.
You can deviate from this is you have good reasons.
If you do not implement an SPA, you need to use AJAX calls a place it makes sense.

For maximum score, your application must be well-organized and separated into components, or base templates, ...

### Login
Your application should allow login and registration of new users.
Users should be stored in the database or on file.

You should enforce some reasonable restrictions on passwords.

### Data items
Besides users, the database or files should contain at least two types of data objects, e.g. two tables. Thus, with users, you need 3 types of data!
The application should allow to add, delete, and update some of the data stored.

Some of these operations should require specific authorization, e.g., not every user is allowed to delete every item.

### Data collection display
The frontend must contain functionality to display a collection of items.
There should be functionality to **filter**, or **sort**.
*Preferences on sorting or filtering should be stored*, to be present when the user revisits the site. (May be stored in cookies or similar.)

### Validation
Forms for login, registration, adding and updating data items should be validated.
Validation should be done both in JS and on the server side.
If validation fails, a meaningful error message must be displayed.

You should also use appropriate HTTP error codes.

Similar, if AJAX requests fail, due to server side validation, meaningful errors should be displayed.

### Layout
You should use semantic HTML tags.
Use tags where it everywhere it makes sense.

- Some elements should be displayed using a flexbox.
- Some elements should use absolute positioning.
- The layout of your page should be fluid, i.e. adjust to different browser window sizes.
- For full points, you page needs to both look like it makes good use of a desktop screen, e.g. `>1200px`, but also be able to adjust to phone size, e.g. `375px`.


### Additional features
You are expected to implement additional, more complex features.

Examples for more complex features can be:
- Storage and handling images uploaded by the user.
- Storage and display of dates.
- Good use of vue components.
- Good use of vue router.

Additional features should be meaningful for the application you are implementing.

## Grading
The submitted project code builds the main basis for the grading.

Additionally, you will have to showcase your application in a short presentation.

Your application should be well tested and working.
All functionality should be error free, including JS code.
The presence of **dysfunctional or unused code** will give a penalty. Remove such code before you submit.

The following table gives a rough overview of grading criteria.
The points given to different criteria may change!

#### Score table

| Project report                              | 5%  |
| ------------------------------------------- | --- |
| **Project code**                        | **95%** |
| Log in and register users	| 6 |
| Example data	| 2 |
| JS Form validation	| 5 |
| Sort or search possible	| 3 |
| Sort or search stored	| 4 |
| Update, delete data	| 3 |
| AJAX request used	| 8 |
| Fluid layout	| 2 |
| Absolute used	| 2 |
| Flex used	| 2 |
| Semantic tags	| 2 |
| Phone layout	| 5 |
| Code separation	| 5 |
| Data stored	| 6 |
| Rest API	| 6 |
| Server side validation	| 5 |
| Errors displayed	| 5 |
| Authentication	| 5 |
| Access control	| 5 |
| Extra feature	| 15 |

# Project presentation
You will have to give a 5 minute presentation about your project.
The goal is that you give a demo, showing how your application works, and we will ask some questions about your code.
The presentation is mandatory and graded pass/fail.
If you fail the presentation, e.g. you show that you do not understand your own code, your project will not be graded.

For the presentation, you need to understand functions and features you use. 
For example, if you use the `forEach` method in Javascript, you should be able to explain:
> `forEach` is a method on a Array. It takes a function (*callback function*) as argument and executes the *callback function* once for each element in the array. The element is given to the *callback function* as argument.

## Help and plagiarism
You need to write the application code yourself, or within the group.

Note that this should not stop you from helping each other.
As long as you do not write code for your fellow students, but help them debug or design a certain functionality, it is not considered plagiarism.

You can use ai to ask for help but do not copy-paste code that you could not have written yourself.

We will also continue labs and offer help.
