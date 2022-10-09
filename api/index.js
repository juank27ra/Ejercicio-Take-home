require('dotenv').config()
const PORT = process.env.PORT
const server = require('./src/app');


server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`); 
  });