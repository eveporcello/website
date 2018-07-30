High Fives Foundation Website
===================
This project contains the source code for the High Fives Foundation website.

## Project Setup

1. Download or Clone the Repo
2. Run `yarn` -or- `npm install`
3. Run `yarn start:dev` -or- `npm run start:dev`

### yarn commands

| Command        | Description                            |
| ---            | ---                                    |
| yarn start     | Starts React App                       |
| yarn mock:api  | Runs GraphQL Service                   |
| yarn start:dev | Runs GraphQL Service && React App 🌟   |


### Using AWS Dev endpoint
If you have taken the time to clone and deploy the [graphql-lambda](https://github.com/HighFivesFoundation/graphql-lambda) backend, you can use your own dev environment by adding an environment variable called `REACT_APP_GRAPHQL_ENDPOINT`,

1. Create a `.env` file in the root of your project
2. Add the following declaration to that file:

```
REACT_APP_GRAPHQL_ENDPOINT=<YOUR ENDPOINT HERE>
```

### Staging and Production Websites
* __staging__: [https://staging--highfivesfoundation.netlify.com](https://staging--highfivesfoundation.netlify.com)
* __production__: [https://highfivesfoundation.netlify.com](https://highfivesfoundation.netlify.com)
