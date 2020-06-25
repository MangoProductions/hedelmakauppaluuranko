
// Import express
var express = require('express');
var app = express();
var template = require('./template');
var path = require('path')
var MongoClient = require('mongodb').MongoClient;
// db url, collection name and db name 
//mongodb+srv://SanjivMain:<password>@srpersonalcluster-qzxy3.mongodb.net/<dbname>?retryWrites=true&w=majority
const dburl = 'mongodb+srv://Mango:PNKLLR90@cluster01-fp4r2.gcp.mongodb.net/luurankohedelmakauppa.luurankohedelmakauppa?retryWrites=true&w=majority';
const dbname = 'luurankohedelmakauppa';
const collname = 'luurankohedelmakauppa';
// tällä lisätään "public" kansio mikä näkyy ns muille.
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
  MongoClient.connect(dburl, function(err, client) {
    if (!err) {
      const collection = client.db(dbname).collection(collname);
      collection.find({}).toArray(function(err, luekauppa) {
        if (!err) {
          var output = template.contenttop();
          output += '          <h4>Hedelmä tarjonta</h4>';
          luekauppa.forEach(function(kauppa){
            output += '<div class="tuote item box">' + '<div class="three columns item box"><img src="images/' + kauppa.tuotekuva +'"><p>' + kauppa.tuote + '<span>' + '<br>' + '<button class="btn1 btn-primary" type="button">' + 'Tuotehinta:' + kauppa.tuotehinta +  '€'+ '</button>' + '<br>' + '</span></p></div>' + '<br>' + '</div>';
          });  //<---!
          output += template.contentbottom();
          res.send(output);
        }
      });
      client.close();
    }
  });
});
app.listen(3000, function() {console.log("serveri pyörii")});