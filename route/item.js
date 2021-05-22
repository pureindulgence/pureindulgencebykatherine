var router = require('express').Router();


let Item = require('../models/item')

router.post('/add', async(req,res) => {
    

    const item = new Item({
        name: req.body.name,
        instalink:req.body.instalink,
        description:req.body.description,
        category:req.body.category,
        photo:req.body.photo
    });

    try {
        const savedItem = await item.save();
        res.redirect("/admin_login.html")
    }
    catch(error) {
        res.status(400).json({error})
    }
});


router.post('/delete', async(req,res) => {
    var id = req.body.del_name
    Item.findByIdAndDelete(id, (err,result) => {
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