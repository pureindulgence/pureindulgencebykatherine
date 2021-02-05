const express = require('express');



require('./db/mongoose')
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require('./route/admin')
const item = require('./route/item')
const testimonial = require('./route/testimonial')
const path = require('path')

let Item_retrieved = require('./models/item');

app.use(express.json())
app.use(cors());
app.use(bodyParser.json({strict: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/admin', admin)
app.use('/item', item)
app.use('/testimonial', testimonial)

// path1 = path.resolve(__dirname, 'frontEnd', 'index.html');
let testimonials_retrieved = require('./models/testimonial');


app.get('/index', function(req, res){
  Item_retrieved.find({}, function(err,items){
    res.json(items)
   
    
   })
});

app.get('/About_us', function(req, res){
  testimonials_retrieved.find({}, function(err,testimonials){
    res.json(testimonials)
   
    
   })
});





//PORT 
// app.get('/index', (req, res) => res.json(items_res))
const port = process.env.PORT || 3000;



    app.use(express.static('frontEnd'));

    
    
    
    app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'frontEnd', 'index.html'));
       
    });
  
app.listen(port, () => {console.log(`Listening on port ${port}.... `)


})
// app.post()
// app.put()
// app.delete()