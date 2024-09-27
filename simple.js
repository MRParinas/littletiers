//from lecture
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
// YOUR CODE
// Set some defaults
db.defaults({ posts: [] }).write();

// add post

db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome', published: true})
  .write()
db.get('posts')
  .push({ id: 2, title: 'lowdb is great', published: true})
  .write()
db.get('posts')
  .push({ id: 3, title: 'lowdb is good', published: true})
  .write()
db.get('posts')
  .push({ id: 4, title: 'lowdb is not good', published: false})
  .write()
db.get('posts')
  .push({ id: 5, title: 'lowdb is bad', published: false})
  .write()


//commented after running to show persistence
//write get post and then run again to see persistence
console.log(db.get('posts').value());

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE

//from current lowdb documentation
//import { JSONFilePreset } from 'lowdb/node'

// Read or create db.json
//const defaultData = { posts: [] }
//const db = await JSONFilePreset('db.json', defaultData)

// Update db.json
//await db.update(({ posts }) => posts.push('hello world'))

// Alternatively you can call db.write() explicitely later
// to write to db.json
//db.data.posts.push('hello world')
//await db.write()
