// add http server
// -----------------------
// YOUR CODE
const express = require('express');
const app     = express();


var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// configure express to serve static files from public directory
// ------------------------------------------------------------------
// YOUR CODE to create a static file
app.use(express.static('public'));

// init the data store
db.defaults({ posts: []}).write();

// list posts
app.get('/data', function(req, res){     

    // YOUR CODE to display the data
    res.send(db.get('posts').value());

});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:title/:id/:published', function(req, res){

// YOUR CODE to collect the data 
        //this is the object for the post
    var post = {
        'id' : req.params.id,
        'title' : req.params.title,
        'published' : req.params.published,
    }
    //to handle the post and get a handle on the post to push on to the post
    db.get('posts').push(post).write();
    //write to the console so you can see it
    console.log(db.get('posts').value());
    //then respond to the client and send the information back to confirm
    res.send(db.get('posts').value());

});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    // YOUR CODE

});

// start server
// -----------------------
// YOUR CODE
app.listen(3000, function() {
    console.log('Running on port 3000!');
});