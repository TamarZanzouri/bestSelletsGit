var express = require('express');
var app = express();
var Books = require('./books_ws');

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