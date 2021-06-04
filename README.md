# Vet Health web based system

How to Run and start the backend / server

1. install node js in the client development machine
2. install mongoDb
3. At the Project root folder(311_project) run the command
   # node index.js
4. The above command runs and starts the server at
   # port 3100

How to Run and start the client

1. run the command below to install client server
   # npm install -g serve
2. Run the command below at the client root folder (Located at 311_project)
   to start the client server.
   # serve -s build
3. The last command shown above will serve static site on the port 5000.
   Like many of serve’s internal settings, the port can be adjusted using the -l or --listen flags:
   # serve -s build -l 4000
