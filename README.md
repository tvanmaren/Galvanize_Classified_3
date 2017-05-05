# Galvanize Classified

## Deployment: http://tvanmaren-classifieds.herokuapp.com/
### WARNING: Be sure to disable any ad-blocking software, or the site will not load

## Project Description

This app is a simple classified ad posting board.

### Requirements

I was responsible for:

- [ ] Creating the database, including migration & seed data.
- [ ] Creating the RESTful API back end.
- [ ] Crafting a logical and intuitive UI
- [ ] Styling the Angular front end.
- [ ] Writing valid, well-implemented HTML and CSS
- [ ] Including responsiveness for different screen sizes and orientations
- [ ] Writing readable and logical JavaScript
- [ ] Deploying the App & API to Heroku.

### Functionality

This app provides the following services:

- View all ads
- Post a new ad
- Edit existing ads
- Delete an ad
- Filter ads by title/description
- Sort ads based on posting date and price

### Tests

I was provided tests from which to build the appropriate database migrations, seeds and routes. As the tests' expectations of the API were oversimplified, I customized and readjusted the tests during the front-end phase.

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
