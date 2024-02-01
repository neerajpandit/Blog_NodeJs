const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//DataBase Conn-
mongoose.connect('mongodb://127.0.0.1:27017/blogs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log("Mongo Connected"))
.catch((err)=>console.log(("Mongo Err",err)));






//  routes
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
