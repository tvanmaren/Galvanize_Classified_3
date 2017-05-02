# WARNING: Be sure to disable any ad-blocking software, or the site will not load

# Galvanize Classified

## Project Description

The app is a simple classified ad posting board.

### Requirements

You are responsible for:

- [ ] Forking and cloning this GitHub Repo.
- [ ] Creating the test and development databases locally.
- [ ] Creating the database migration.
- [ ] Creating the database seed data.
- [ ] Creating the RESTful API to handle classified resource.
- [ ] Deployment of the API on Heroku.

You are responsible for:

- [ ] Styling your Angular front end.
- [ ] Deployment of the App on Heroku.

### Must haves

The app should implement the following:

- Valid, well-implemented HTML and CSS
- Readable and logical JavaScript
- Responsiveness for different screen sizes and orientations
- A logical and intuitive UI

- [ ] Creating a simple Angular front end.
- [ ] Deployment of the App on Heroku.

### Functionality

The app should do the following:

- Display all of the ads
- Post a new ad
- Edit existing ads
- Delete an ad
- Filter ads (titles and descriptions)
- Sort ads based on posting date and price

### Tests

We have provided tests to help you build the database migrations, seeds and routes.  *Use them.* If you are unsure of what the test is asking for, open the test and read it. You can ask an instructor for test clarifications.

At the command line type `npm test` to run the tests.

**TIP: When testing your migrations you may need to drop and recreate your database before running the test so that your migration changes are reflected in the database.**

### Classified Object

You need to create routes, seed data and migrations for the following object.

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
│                                          classified                                        │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
|title        │varchar(255)             │not null                                          │
|description  │varchar(255)             │not null      
|price        │decimal                  │not null      
|item_image   │varchar(255)             │not null                                          │
│created_at   │timestamp with time zone │not null default now()                            │
│updated_at   │timestamp with time zone │not null default now()                            │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```
