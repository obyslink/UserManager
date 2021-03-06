[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# User Manager
This is an ALC with Microsoft Assessment to perform CRUD operations using a school administrative panel. Here, Admins
can modify and register new students into the school's database.

This repository contains a simple demo API built with NodeJS.
The API is used to manage users in a MongoDB database with CRUD (create, read, update and delete) operation.

### Development
This application was developed using [ExpressJS](http://expressjs.com/). MongoDB was used for persisting data with [Mongoose](https://mongoosejs.com/) as [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping).

### Installation
* Start up your terminal (or Command Prompt on Windows OS).
* Ensure that you've `node` installed on your PC.
* Clone the repository by entering the command `git clone https://github.com/obyslink/UserManager` in the terminal.
* Navigate to the project folder using `cd UserManager` on your terminal (or command prompt)
* After cloning, install the application's dependencies with the command `npm install`.

* Note that `.env` file in your the directory available for this test. Variables such as DB_URL (which must be a mongoDB URL) and PORT are defined in the .env file and it is essential you check this file before running the application.

* Start mongodb using `net start mongodb` in the command prompt terminal in `mongodb\bin` installation directory as `Administrator`.

* After this, you can then start the app with the command: `npm start`.

### API Documentation
The API only has one endpoint which is the `/users` endpoint for saving users to the database. The endpoint works with the HTTP verbs: `POST`, `GET`, `PUT`, `DELETE`.

##### Examples

###### POST HTTP Request
-   `POST` /users
-   INPUT:
```x-form-url-encoded
name: John Doe
email: john.doe@gmail.com
username: johnny
password: johndoe
```

###### HTTP Response

-   HTTP Status: `201: created`
-   JSON data
```json
{
  "_id": "59071791b0lkscm2325794",
  "name": "John Doe",
  "email": "john.doe@gmail.com",
  "password": "johndoe",
  "__v": 0
}
```

###### GET HTTP Response
-   `GET` /users

```json
[
    {
        "_id": "59071791b0lkscm2325794",
        "name": "John Doe",
        "email": "john.doe@gmail.com",
        "password": "johndoe",
        "__v": 0
    }
]
```

###### GET HTTP Response
-   `GET` /users/:id

```json
{
    "_id": "59071791b0lkscm2325794",
    "name": "John Doe",
    "email": "john.doe@gmail.com",
    "username":"johnny"
    "password": "johndoe",
    "__v": 0
}
```

###### DELETE HTTP Response
-   `DELETE` /users/:id

```json
User John Doe was deleted
```

###### POST HTTP Request
-   `PUT` /users/:id
-   INPUT:
```x-form-url-encoded
name: Jane Doe
email: jane.doe@gmail.com
password: janedoe
```

###### HTTP Response

-   HTTP Status: `200: OK`
-   JSON data
```json
{
  "_id": "59071791b0lkscm2325794",
  "name": "Jane Doe",
  "email": "jane.doe@gmail.com",
  "username": "janny",
  "password": "janedoe",
  "__v": 0
}
```



### Initial Author
**Olajide Bolaji 'Nuel** - Software Developer at Andela

#### Forked, Cloned and Completed  to perform CRUD (create, read, update and delete) operation for  Andela Learning Community with Microsoft Assessment by -
#### Olebuezi Obinna David - Web App Developer
