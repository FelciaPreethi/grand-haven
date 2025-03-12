# Project Title

Grand Haven - Website

## Overview

Grand Haven is a luxury hotel, a place to unwind and relax. Book now through our website.

### User Profile

- Guest
  - Have a hassle free hotel booking
- admin
- Maintain bookings and reservations with ease.

### Features

- As a user, I want to be know about the hotel I'm going to stay in.
- As a user, I want to check the types of rooms available.
- As a user, I want to check the availability for the date I'm looking for.

- As a logged in user, I want to be able to create an account to view/review my bookings.
- As a logged in user, I want to leave comments after my stay.

- As an admin user, I want to look at the rooms booked and available.
- As an admin user, I need the details of the users that will occupy the rooms for verification.

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Home page
- room-suites
- individual room type
- availability
- booking registration
- admin - login and signup
- guest - login and signup
- admin - update room info

### Mockups

#### Home Page

![](/proposalAssets/homepage.jpeg)

#### Availability Page

![](/proposalAssets/availability.jpeg)

#### Room-Suites Page

![](/proposalAssets/room-suites.jpeg)

#### Room type Page

![](/proposalAssets/room/roomtype.jpeg)

#### Booking Page

![](/proposalAssets/booking-modal.jpeg)

#### Confirm booking Page (Rated state)

![](/proposalAssets/confirm-booking.jpeg)

### Reservation page

![](/proposalAssets/reservationForm.jpeg)

### Endpoints

**GET /rooms**

- Gives the list of room types with details

Response:

```
[
    {
        "id": 1,
        "type": "Studio suite",
        "Bedroom": 1,
        "Wifi": "available",
        "occupancy": 2
    },
    ...
]
```

**GET /rooms/room-type**

- availability and room type details

Parameters:

- id: type id as number

Response:

```
{

        "id": 1,
        "type": "Studio suite",
        "Bedroom": 1,
        "Wifi": "available",
        "occupancy": 2
        "available_date": [array of dates available]
}
```

**POST /user/:id/comment**

- Logged in user can add comment

Parameters:

- id: userid
- token: JWT of the logged in user
- comment: User provided comment.

Response:

```
{
    "id": 1,
    "name": "Username",
    "comment": User provided comment
}
```

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /admin/users/register**

- Add an admin user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /admin/users/login**

- Login an admin user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**GET /admin/room/**

- Get the details of the rooms that are booked and available

Response:

```
{
    "roomnumber" : 201,
    "roomtype" : "One bedroom suite",
    "status" : "Booked/Vacant",
    "Dates available" : [List of dates available]
}
```

**POST /admin/room/**

- Add new room to the inventory

Parameters:

- roomtype
- roomtype
- room details

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Add about details for 7 types of room.

- Create seeds with sample data.

- Deploy client and server projects so all commits will be reflected in production

- Feature: List the rooms that are currently available for booking

  - Implement a filter that filters the room types based on criteria
  - Create GET /rooms endpoint

- Feature: Single room

  - Implement single room page which has the details of the feature available.
  - Create GET /room/:roomtype
  - Display the dates available for booking.

- Feature: Book room

  - Add form input to get details from the user.
  - Create POST /bookingdetails
  - Store the details and update the inventory.

- Feature: Home page

- Feature: Create account(Both admin and Guest)

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login(Both admin and Guest)

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Post comments

  - Add form so the user can post comments
    -Create POST /user/comment endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- A mail confirmation 36 hrs to the guest.
- Integrate Google Places / Maps
  - To show the way to reach the hotel from the user's location.
- Forgot password functionality.
