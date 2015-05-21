var express = require('express');
var app = express();
var Books = require('./books_ws');

app.get('/', function(req, res){
	res.status(200).send("<h1>welcome to best sellers inventory!!!</h1><br>to get all books add router /getAllBestSellersBooks<br>to get book by name go to router /getBookName/:bookId<br>to get all sest sellers in month got to router /getBSForMonth/:BSOfmoth")
})

app.get('/getAllBestSellersBooks', function(req, res){
	res.json(Books.getAllBestSellers())
})

app.param('bookId', function(req, res, next, value){
	console.log("\nrecived book id: " + value);
	next();
})

app.get('/getBookName/:bookId', function(req, res){
	var book_id = req.params.bookId;
	// console.log(book_id)
	var bookName = Books.getBookNameById(book_id)
	console.log(bookName)
	res.json(bookName)
})

app.param('BSOfmoth', function(req, res, next, value){
	console.log("\nrecived moth: " + value);
	next();
})

app.get('/getBSForMonth/:BSOfmoth', function(req, res){
	var BSofmonth = req.params.BSOfmoth;
	// console.log(book_id)
	var booksOfMoth = Books.getBestSellerByMoth(BSofmonth)
	console.log(booksOfMoth)
	res.json(booksOfMoth)
})



var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log("listenting to port " + port);
})