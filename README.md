# Project Title

Grand Haven - Website

## Overview

Grand Haven is a luxury hotel, a place to unwind and relax. Book now through our website.

### User Profile

- Guest
  - Have a hassle free hotel booking
- admin
  - Maintain bookings and reservations with ease.
- user
  - Logs in and look at the booking history.

### Features

- As a user, I want to be know about the hotel I'm going to stay in.
- As a user, I want to check the types of rooms available.
- As a user, I want to check the availability for the date I'm looking for.

- As a logged in user, I want to be able to create an account to view/review my bookings.

- As an admin user, I want to look at the rooms booked and available.(Admin cannot signup for now. Admin login can be found at /admin/login/  username:admin4@example.com, password: admin1 )
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

### APIs

- No external APIs will be used for the this.

### Sitemap

- Home page
- Bookings page
- booking registration
- user - login and signup
- user - view their past/upcoming reservations.
- admin - login
- admin - view reservations for all rooms.

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

**POST /guest/checkavailability**

- Gives the list of room types with details
  
Parameters:

- inDate: check in date
- outDate: checkout date
- guestcount: Number of guests.

Response:

```
[
    {
        "type_id": 1,
        "type_name": "Studio suite",
        "description": "Comfortable and functional",
        "price_per_night": "100.00",
        "guest_count": 2,
        "pictures": [
            "/rooms/suite/balcony.jpeg",
            "/rooms/suite/Bathroom.jpeg",
            "/rooms/suite/LivingArea.jpg",
            "/rooms/suite/rooftop.jpeg",
            "/rooms/suite/View.jpeg"
        ],
        "bedrooms": 1,
        "queen": 1,
        "king": 0,
        "full_bath": 1,
        "three_quarter_bath": 0,
        "wifi": 1,
        "stove": 0,
        "fridge": 1,
        "microwave": 1,
        "full_kitchen": 0,
        "kitchenette": 1
    },
]
```

**POST /guest/bookrooms**

- For booking the selected room

Parameters:

- inDate: check in date
- outDate: checkout date
- details: Guest details
- roomtype: Type of room chosen by the user

Response:

```
{
    "message": "Successful booking",
    "details": {
        "room_id": 1,
        "type_id": 1,
        "room_number": "101",
        "status": "Available",
        
    }
}
```

**POST /user/signup**

- Signup an user

Parameters:

- username: User provided username
- email: email
- password: password

Response:

```
{ 
    status: 201
}
```

**POST /users/login**

- Login an existing user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlMgU25hcGUiLCJpYXQiOjE3NDI4MDEwODAsImV4cCI6MTc0MjgwNDY4MH0.AdF2T25GN8UYl_jpFX6hpmMHfp-DJDuZtDt3jYwK57M",
}
```

**POST /admin/login**

- Login an admin user

Parameters:

- email: Admin's email
- password: Admin's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /user/getbookingdetails**

- Get the booking details of an user

Parameters:

- email: User's email (taken from session storage)

Response:

```
{
    [
    {
        "Arrival": "Mon Mar 24 2025",
        "Departure": "Wed Mar 26 2025",
        "Nights": 3,
        "Booked On": "Mon Mar 24 2025",
        "Room Type": "One-bedroom rooftop suite",
        "booking_id": 23
    }
]
}
```

**DELETE /user/cancelbooking**

- Delete an user's upcoming booking

Parameters:

- booking_id

Response:

```
{
    status: 204
}
```

**GET /admin/view/**

- Get the details of the rooms that are booked and available

Response:

```
[
    {
        "booking_id": 10,
        "room_id": 901,
        "check_in_date": "2025-03-21T07:00:00.000Z",
        "check_out_date": "2025-03-21T07:00:00.000Z",
        "total_price": "2000.00",
        "status": "Confirmed",
        "email": "rweasley@gmail.com",
        "details": {
            "zip": "V9L 0A6",
            "city": "Duncan",
            "email": "rweasley@gmail.com",
            "phone": "2507101263",
            "state": "British Columbia",
            "prefix": "",
            "country": "Canada",
            "address1": "6258 Selkirk Terrace",
            "address2": "",
            "language": "",
            "lastName": "Lansingh Danie",
            "firstName": "Felcia Preethi",
            "additionalGuest": {
                "lastName": "",
                "firstName": ""
            }
        },
        "type_id": 2,
        "created_at": "2025-03-21T07:04:24.000Z",
        "updated_at": "2025-03-21T07:04:24.000Z",
        "type_name": "One-bedroom rooftop suite"
    },
]
```


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

- Feature: BookingsPage

  - Get inputs as date from calendar
  - Create POST /checkavailability
  - Display to the user.

- Feature: Home page

- Feature: Create account(Both admin and Guest)

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login(Both admin and Guest)

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Show user's booking history

  - Once the user logs in successfully, show their booking history.
  
- Feature: Show the rooms that are booked for admin

  - Once an admin logs in successfully, they can look at the rooms that are booked.
  - Implement filter option to filter based on the rooms, email, etc.

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
