# Galvanize Classified

## Deployment

View the app at http://tvanmaren-classifieds.herokuapp.com/
### WARNING: Be sure to disable any ad-blocking software, or the site will not load

## Project Description

This app is a simple classified ad posting board.

### Requirements

I was responsible for:

- [ ] Creating the test and development databases locally.
- [ ] Creating the database migration.
- [ ] Creating the database seed data.
- [ ] Creating the RESTful API to handle classified resource.
- [ ] Creating a simple Angular front end.
- [ ] Deployment of the App & API on Heroku.
- [ ] Styling the Angular front end.

### Must haves

The app implements the following:

- Valid, well-implemented HTML and CSS
- Readable and logical JavaScript
- Responsiveness for different screen sizes and orientations
- A logical and intuitive UI

### Functionality

This app provides the following services:

- Display all of the ads
- Post a new ad
- Edit existing ads
- Delete an ad
- Filter ads (titles and descriptions)
- Sort ads based on posting date and price

### Tests

Our instructors provided tests to help build the database migrations, seeds and routes. As they oversimplified some API expectations, I had to customize and readjust the tests during the front-end phase.

### Given Object

I built routes, seed data and migrations for the following object:

```javascript
[{
	id:1,
  	title:'NES Classic',
  	description:'I got lucky and found it, and decided to charge 10x what it was worth.',
	price:600,
	item_image:'http://www.nintendo.com/images/page/nes-classic/nes-classic-edition-box.png'
},{
	id:2,
  	title:'Pikachu 9" Plush Stuffed Toy',
  	description:'Polyester fiber construction Officially licensed.',
	price:10,
	item_image:'https://images-na.ssl-images-amazon.com/images/I/41VwGotRZsL._SY300_.jpg'
}]
```

```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                          classified                                      │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
|title        │varchar(255)             │not null                                          │
|description  │varchar(255)             │not null                                          │      
|price        │decimal                  │not null                                          │      
|item_image   │varchar(255)             │not null                                          │
│created_at   │timestamp with time zone │not null default now()                            │
│updated_at   │timestamp with time zone │not null default now()                            │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```
