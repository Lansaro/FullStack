const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

require('./config/mongoose.config');

const AuthorRoutes = require('./routes/author.routes');
AuthorRoutes(app);

app.listen(8000, () => console.log("The server for Pet Shelter is fired up on port 8000"));