const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

//db connection
connectDB();


const corsOptions = {
  origin: function (origin, callback) {
    // Allow localhost (dev)
    const localhost = /^http:\/\/localhost:5173$/;

    // Allow all Vercel environments for your project
    const vercelRegex = /^https:\/\/mindtypev2-1(?:-[\w-]+)?\.vercel\.app$/;

    if (!origin || localhost.test(origin) || vercelRegex.test(origin)) {
      callback(null, true);
    } else {
      console.log('❌ Blocked CORS request from:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));


//  Middleware
app.use(express.json());

//  Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));


app.get('/', (req, res) => {
  res.send('API is running ✅');
});


// Start server
mongoose.connection.once('open', () => {
    app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
});