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

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    console.log('🔍 CORS request from origin:', origin);
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      console.log('✅ Allowing request with no origin');
      return callback(null, true);
    }
    
    // Allow localhost (dev)
    if (origin === 'http://localhost:5173') {
      console.log('✅ Allowing localhost request');
      return callback(null, true);
    }

    // Allow Vercel domains
    if (origin.includes('vercel.app')) {
      console.log('✅ Allowing Vercel request:', origin);
      return callback(null, true);
    }

    // Allow specific domains
    const allowedOrigins = [
      'https://mindtypev2-1.vercel.app',
      'https://mindtypev2-1-0kjk.onrender.com',
      'https://mindtypev2-2.onrender.com'
    ];

    if (allowedOrigins.includes(origin)) {
      console.log('✅ Allowing request from:', origin);
      return callback(null, true);
    }

    console.log('❌ Blocked CORS request from:', origin);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Length', 'X-Requested-With'],
  preflightContinue: false,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Handle preflight requests explicitly
app.options('*', cors(corsOptions));

// Additional headers for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
});

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