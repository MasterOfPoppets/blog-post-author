/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    
    var fs = require('fs'),
        Firebase = require('firebase'),
        fb = new Firebase('https://fiery-heat-3490.firebaseio.com/'),
        postFiles = [],
        post = '',
        postMeta = {};
    
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
    postMeta = JSON.parse(fs.readFileSync('./content/post.json', 'utf8'));
    
    fb.child('blogEntries').child(postMeta.url).set({
        date: postMeta.date,
        post: post,
        stub: postMeta.stub,
        title: postMeta.title
    }, function () {
        console.log('Finished pushing to firebase');
        process.exit();
    });
}());