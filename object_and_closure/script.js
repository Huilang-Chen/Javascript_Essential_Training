//var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);

// constructor
function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function () {
    return ++this.views;
  }
}

// call the constructor
var newCourse = new Course("new course", "JS instructor", "beginner", true, 10);
console.log(newCourse);
console.log(newCourse.title);
console.log(newCourse.views);
console.log(newCourse.updateViews);
console.log(newCourse.updateViews());

// Object dot notation and bracket notation
console.log(newCourse.title);   // properly-named porperty
console.log(newCourse["title"]);


//closure : A function that remembers the environment they were created in
function doSomeMath() {
	var a = 5;
	var b = 4;

  function multiply(){
    return a*b;
  }
	return multiply;
}

var theResult = doSomeMath();

console.log("The function: ", theResult);
console.log("The result: ", theResult());
