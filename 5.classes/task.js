class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		return this.state = this.state * 1.5;
	}

	set state(number) {
		if (number > 100) {
			this._state = 100;
		} else if (number < 0) {
			this._state = 0;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super();
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let check = this.books.find(item => item[type] === value);
		if (check !== undefined) {
			return check;
		} else {
			return null;
		}
	}

	giveBookByName(bookName) {

		let check = this.books.findIndex(item => item.name === bookName);

		if (check !== -1) {
			let deleteBook = this.books.splice(check, 1);
			return deleteBook.find(item => item.name === bookName);

		} else {
			return null;
		}


	}

}
/*Артем, доброе утро!

Спасибо за присланную работу.

В классе Magazine параметры name, releaseDate, pagesCount должны приходить из родительского класса PrintEditionItem, то есть должны пробрасываться в функцию super. Хоть тесты и закрываются, они не покрывают всю кодовую базу, и по сути это ошибка. Из-за этого не буду возвращать работу на доработку, но поправьте это у себя в репозитории.

Метод splice возвращает массив из удаленных элементов. В нашем случае deleteBook - это массив из одной книги. А так как по условию задачи нужно вернуть книгу, в этой строке достаточно было вернуть первый и единственный элемент этого массива, то есть return deleteBook[0].

Методы findBookBy и giveBookByName можно немного порефакторить:

1
2
3
4
5
6
7
8
9
10
11
findBookBy(type, value) {
 const findResult = this.books.find((item) => item[type] === value);
 return findResult || null;
}

giveBookByName(bookName) {
  const book = this.findBookBy("name", bookName);
  if (!book) return null;
  this.books = this.books.filter((item) => item.name !== bookName);
  return book;
}
Вы отлично справились с домашним заданием. Ставлю зачет. Удачи в дальнейшем обучении!*/