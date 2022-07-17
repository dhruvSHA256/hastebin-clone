# Hastebin - Clone

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- [Live Demo](https://whispering-hollows-93908.herokuapp.com/) 
- using [node.js](https://nodejs.org/en) and [express.js](https://expressjs.com/) 
- user can store code and retrieve snippets from [mongoDB](https://www.mongodb.com/)
- supports creating new snippets and duplicating existing snippets
- code snippet highlighting is supported using [highlightjs](https://highlightjs.org/)

# Setup 

- ensure node.js and yarn is installed on your machine
- install the required packages using 
```bash
$ yarn install
```
- export DB_USER and DB_PASS variables (additionally user [direnv](https://direnv.net/) to manage env variables )
```bash
export DB_USER="<your-mongoDB-username>"
export DB_PASS="<your-mongoDB-password>"
```
- run app 
```bash
yarn run app
# yarn run dev # if in production
```


![Made with love in India](https://madewithlove.now.sh/in?colorA=%233d3846&colorB=%23f66151&template=for-the-badge)
