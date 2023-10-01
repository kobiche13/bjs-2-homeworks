function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName; //создаем в объектах свойство такое
}
Student.prototype.addMarks = function(...marks) {
  if (this.marks) {
      this.marks.push(...marks); //пушим оценки
  }
}
Student.prototype.getAverage = function() {
  if (this.marks && this.marks.length > 0) {
      return this.marks.reduce((acc, value) => acc + value, 0) / this.marks.length; // находим среднее оценок
  } else {
      return 0;
  }
}
Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}