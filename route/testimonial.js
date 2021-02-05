var router = require('express').Router();


let Testimonial = require('../models/testimonial')

router.post('/add', async(req,res) => {
    

    const testimonial = new Testimonial({
       authorName: req.body.authorName,
       testimonialDescription:req.body.testimonialDescription,
        
    });

    try {
        const savedTestimonial = await testimonial.save();
        res.redirect("/admin_login.html")
    }
    catch(error) {
        res.status(400).json({error})
    }
});


router.post('/delete', async(req,res) => {
    var id = req.body.delete_name
    Testimonial.findByIdAndDelete(id, (err,result) => {
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Deleted : ", id); 
            res.redirect("/admin_login.html")
        } 
    })
})




module.exports = router;