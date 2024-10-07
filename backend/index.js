const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// middleware step 
app.use(express.json({limit: "25mb"}));
app.use((express.urlencoded({limit: "25mb"})));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true
}))


// all routs

const authRoutes = require('./src/users/user.route');
app.use('/api/auth', authRoutes)



//kXvCbo6eayDUrvi4/Wynethopp0402@
// admin 
main().then(()=> console.log('Mongodb is successfully connected.')).catch(err => console.log(err))

async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get('/', (req, res) => {
    res.send('Afrozon Ecommerce Application is running...!')
  });

}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})