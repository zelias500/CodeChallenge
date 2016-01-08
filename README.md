### Solution
Gulp to start the server @ localhost:3000

Relevant files:
* app/models/models.js contains the classes themselves (normally would split them up, but didn't seem necessary here)
* app/controllers/home.js exposes the API via express routing

Some notes:
* I thought it might be pertinent to create an API that an actual web app might use, so I opted to structure the API using an MVC model. 
* I used a yeoman generator (generator-express) to set up the framework so I could focus on actually building the API.
* I spent almost no time on the front end, since it seemed (to me) outside the scope of this challenge. Used a default swig templating framework rather than worrying about angular/another framework
* Tested the routes using Postman



#### CodeChallenge: Eventbrite Mini

Please spend no more than **1 hour** to complete the following challenge.

We need three classes in either **Ruby or Javascript**: 
* **Event** - An event has a name, date, and attendees.
* **Person** - A person has a first name and a last name.
* **Invite** -  An invite has a person and an event.

Once completed you should easily be able to create events, and get them attended by many people by way of invites.  The way you structure your api, and how to interact with it is totally up to you.

**Fork this repository** for you solution, and send us the link.
