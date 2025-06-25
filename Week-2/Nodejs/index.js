// const express= require('express');
// const Path= require('path');

// const app=express();

// app.use(express.json());
// app.use(express.static(Path.join(__dirname,'public')));


// app.listen(3000,()=>{
//     console.log("Server is running on port number 3000");
// })

const express = require('express');
const path = require('path');
const logger = require('../Nodejs/Day-07/midleware/logger');
const errorHandler = require('../Nodejs/Day-07/midleware/errorhandler');

const userRoutes = require('../Nodejs/Day-07/routes/users');
const bookRoutes = require('../Nodejs/Day-07/routes/books');

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(logger);


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
