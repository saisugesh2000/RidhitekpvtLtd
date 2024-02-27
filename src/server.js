const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Syedraja@PASSWORD',
  database: 'sampleRidhitek'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.use(bodyParser.json());
// post the data
app.post('/api/contact', (req, res) => {
    const { fullname, email, phone, subject, message } = req.body;
    const insertQuery = 'INSERT INTO contact_us (fullname, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)';
    
    db.query(insertQuery, [fullname, email, phone, subject, message], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error inserting data into database' });
      } else {
        res.status(200).json({ success: true, message: 'Data inserted successfully' });
      }
    });
  });

  // get the data
  app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM contact_us', (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.json(results);
    });
  });

  // Route to handle deletion of data
app.delete('/api/data/:id', (req, res) => {
  const id = req.params.id;
  
  // Perform deletion operation in MySQL database using the ID
  const sql = 'DELETE FROM contact_us WHERE id = ?'; // Adjust 'your_table' with your actual table name
  
  db.query(sql, [id], (error, results) => {
    if (error) {
      console.error('Error deleting data from database:', error);
      res.status(500).json({ message: 'Error deleting data' });
    } else {
      console.log('Data deleted successfully');
      res.json({ message: 'Data deleted successfully' });
    }
  });
});

  
  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });