# Vet Health web based system

## How to Run and start the backend / server

1. install [node js](https://nodejs.dev/) in the client development machine and ensure npm is installed by the command

   ### `npm -v`

   to check npm version

2. install [mongoDb](https://www.mongodb.com/)

3. install node_modules / dependencies as specified in the package.json at `311-vet-health` this is done by the command
   ### `npm install --save`
4. Configure environment variables in a .env file
   1. SESSION_SECRET
   2. MONGO_URI
   3. PORT
   4. SKIP_PREFLIGHT_CHECK
   5. MONGO_TEST_URI
   6. EMAIL
   7. REFRESH_TOKEN
   8. CLIENT_ID
   9. CLIENT_SECRET
5. At the Project root folder `311-vet-health` after installing the modules run the command
   ### `node index.js`
6. The above command runs and starts the server at
   ### `port 3100`
7. On your web browser navigate to [http://localhost:3100](http://localhost:3100)
8. After creating an account to login as a vet use address [http://localhost:3100/mifugo/login/vet](http://localhost:3100/mifugo/login/vet)
   and to login as a client use [http://localhost:3100/mifugo/login](http://localhost:3100/mifugo/login).

## How to Run and start the client in development mode

1. The client has been bootstraped with
   ### `npx create-react-app`
2. Configure following REACT env variables in a .env file
   1. REACT_APP_OPENCAGE_API_KEY
   2. REACT_APP_OPENCAGE_URI
      For the project scenarial Open cage API was chosen but its your choice to use whatever API You wish for.
3. additional dependencies can be found at `client/package.json file`
