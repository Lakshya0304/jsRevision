// const insta = {}
const insta = new Object()      //Singleton object 

insta.id = "xyz"
insta.name = "crazy"

// console.log(insta);

const user = {
    email : "lakshya@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Lakshya",
            lastname : "Khandelwal"
        }
    }
}

// console.log(user.fullname.userfullname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1,obj2)        //This change the obj1 

const obj3 = Object.assign({},obj1,obj2)       //It does not change hte original array ,therefore it is good 
// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);
// console.log(obj1);


// console.log(Object.keys(insta));        //[ 'id', 'name' ]
// console.log(Object.values(insta));      //[ 'xyz', 'crazy' ]
// console.log(Object.entries(insta));     //[ [ 'id', 'xyz' ], [ 'name', 'crazy' ] ]

const course = {
    courseName : "JavaScript",
    price : "999",
    courseInstructor : "Lakshya"
}

// course.courseInstructor
// const {courseInstructor} = course
// const {courseInstructor : instructor} = course

// console.log(courseInstructor);


//JSON
// {
//     "courseName" : "JavaScript",
//     "price" : "999",
//     "courseInstructor" : "Lakshya"
// }