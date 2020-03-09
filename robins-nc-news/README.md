## NC-News - Frontend

This is a repo for the React powered frontend application which serves news content from the [northcoders-news Rest API](https://github.com/robinbutler/northcoders-news-api).

The Github repo to the backend API can be found [here](https://github.com/robinbutler/northcoders-news-api).

Please visit (https://r-butlers-nc-news.netlify.com/) for a complete working demo of the frontend application.

## Available functionality

The user can:

1. view a list of all posted articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as a default logged in user).
7. delete own comments (as a default logged in user).
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This application was created using React v16.12.0 on Node v13.7.0.

Clone the repo and install the required dependencies:

```
$ git clone https://github.com/DominicH247/domh-nc-news-frontend.git
$ cd PROJECT
$ npm install
```

## Start and watch

To start and watch the application in development mode :

```
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Simple build for production

Bundles React in production mode and optimizes the build for the best performance.

```
$ npm run build
```

## Update sources

Some packages usages might change so you should run npm prune & npm install often. A common way to update is by doing:

```
$ git pull
$ npm prune
$ npm install
```

Or you can you use the command:

```
$ npm run pull
```

## Languages and tools

### HTML

- HTML 5

### Javascript

- React for the UI
- Axios - HTTP client for making requests to the API
- P5 for creating the 404 page canvas animation

### CSS

- CSS

## Authors

- **[Robin Butler](https://github.com/robinbutler)**
