var express = require(espress);
var router = express.Router();

router.get('/home',function(req,res){
    res.send("Hello World!");
});
router.post('/home',function(req,res){
    res.send("You just call the post method at '/hello'!\n");
});

//esport this router to use in exp-demo3b.js
module.exports = router;

