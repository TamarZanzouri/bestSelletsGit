var fs = require('fs');
var BooksBestSellers = JSON.parse(fs.readFileSync('data.json', 'utf8'));

exports.getAllBestSellers = function(){
	console.log(BooksBestSellers)
	return BooksBestSellers;
}

exports.getBookNameById = function(BookId){
	var bookName = "book not found";
	BooksBestSellers.forEach(function(book){
		console.log(book.id)
		if (book.id == BookId) {
			console.log(book.name)
			bookName = book.name;
		}
		// console.log("book not found")
	})
	return bookName;
}

exports.getBestSellerByMoth = function(month){
	var bestSellerOfMothArray = [];
	BooksBestSellers.forEach(function(book){
	if (book.bestSellerOfMoth == month) {
		// console.log(book.id)
		bestSellerOfMothArray.push(book);
		// return book.name;
	};
	// console.log("book not found")
})
	if(bestSellerOfMothArray) 
		console.log(bestSellerOfMothArray)
		return bestSellerOfMothArray;
	return "books not found in this month"
}


