(function () {
  'use strict';
    
  var fs = require('fs')
    , Firebase = require('firebase')
    , fb = new Firebase('https://fiery-heat-3490.firebaseio.com/')
    , postFiles = []
    , post = ''
    , stub = ''
    , postMeta = {};
  
  function getFiles(dir) {
    var filePath;
    
    return fs.readdirSync(dir).filter(function (file) {
      filePath = dir + '/' + file;
      return fs.statSync(filePath).isFile();
    });
  }
  
  // Check for existence of required files
  postFiles = getFiles('./content');
  if (postFiles.length === 2) {
    console.log('Correct number of files located');
  }
  
  post = fs.readFileSync('./content/post.markdown', 'utf8');
  stub = fs.readFileSync('./content/stub.markdown', 'utf8');
  postMeta = JSON.parse(fs.readFileSync('./content/post.json', 'utf8'));
  
  fb.child('blogEntries').child(postMeta.url).setWithPriority(
    { date: postMeta.date
    , post: post
    , stub: stub
    , title: postMeta.title
    , url: postMeta.url
    }
    , Firebase.ServerValue.TIMESTAMP
    , function () {
      console.log('Finished pushing to firebase');
      process.exit();
    });
}());