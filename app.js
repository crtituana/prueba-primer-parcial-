const express = require ('express');
const mongoose = require ('mongoose');

const app = express ();
const db = mongoose.connect('mongodb://localhost/studentAPI');
const studentRouter = express.Router();
const port = process.env.PORT || 3000;
const Student = require('./models/studentModel');

studentRouter.route ('/students')
.get ((req, res) =>{ 
    Student.find ((err, students) =>{
        if (err){
            return res.send(err);
        }
        return res.json(students);
    });
});
app.use ('/api', studentRouter);
app.get ('/', (req, res) =>{

    res.send('Hola mundo');
});

app.listen(port,( ) => {
    console.log('Runing on port ${port}');
});
