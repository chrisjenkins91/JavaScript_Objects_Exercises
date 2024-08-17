//! Personal Contact Book
//? Create a simple contact book where you can add, view, and search for contacts by name.

//TODO Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.

//TODO Store Contacts in an Array: Use an array to store multiple contact objects.

//TODO Create Functions: Create functions to add a contact, view all contacts, and search for a contact by name.

let contacts = [
    {
         name: "Chris Jenkins", phoneNum: "228-447-5620", email: "chris.jenkins@gmail.com"
    },
    {
         name: "Kebra Brown", phoneNum: "228-754-0977", email: "kebra.brown@gmail.com"
    },

    {
         name: "Sondra Johnson", phoneNum: "870-010-8892", email: "sondra.johnson@gmail.com"
    
    }
];

function addNewContact(name, phoneNum, email) {
    contacts.push({name, phoneNum, email})
};

addNewContact("Wallace Smith", "228-235-8583", "wallace.smith@gmail.com");


function displayContacts(){
    console.log(contacts)
};



function searchContacts(name) {
    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i].name.toLowerCase() === name.toLowerCase() ) {
            console.log(contacts[i].name.toLocaleLowerCase() + " is in my contacts")
        }
    } ;
};

displayContacts();
searchContacts("WaLlace SmitH");

//* Output Results: Use console.log to display the contacts and search results.

//! Student Grade Management
//? Create a program to manage student grades, where you can calculate the average grade for the class and identify students who need to improve.

//TODO Predefine Student Objects: Each student should be an object with properties like name and grade, stored inside an array.
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 76 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 63 },
    { name: "Eve", grade: 78 }
  ];
//TODO Calculate Average Grade: Write a function to calculate the average grade of the class.

function calClassAverage() {
    let sum = 0
    for(let i = 0; i < students.length; i++) {
        sum += students[i].grade
    }
    let average = sum / students.length
    return average;
}
let classTotalAverage = calClassAverage(students);
console.log("The average grade for the class is " + classTotalAverage)



//TODO Identify Students Below Average: Write a function to find and list students with grades below the class average.
function belowClassAverage() {
    for(let i = 0; i < students.length; i++) {
        if (students[i].grade < classTotalAverage) {
            console.log(`${students[i].name} has a grade of ${students[i].grade} which is below the class average`)
        }
    }

}

let badGradeStudent = belowClassAverage(students)

//! Movie Collection Tracker
//? Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.

//TODO Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
//TODO Store Movies in an Array: Use an array to store multiple movie objects.
//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
//* Output Results: Use console.log to display the movie collection and ratings.
let movies = [
    { title: "Bad Boyz", genre: "action", rating: "R"},
    { title: "Waterboy", genre: "comedy", rating: "PG-13"},
    { title: "The Avengers", genre: "adventure", rating: "PG"},

];

function addMovie(title, genre, rating) {

    movies.push({title, genre, rating})

};

addMovie("Spiderman", "adventure", "PG-13");
console.log(movies);


function rateMovie(rating) {
    
    
    for(let i = 0; i < movies.length; i++) {
        // let rating = movies[i].rating;

        if (rating.toUpperCase() === movies[i].rating.toUpperCase()) {
            console.log(movies[i].title + " " + movies[i].genre + " this movie is rated " + rating)
        } 
    }

};

rateMovie("PG");





//! Library Book Tracker

//? Create a program to manage a small library, where you can check which books are available or borrowed, and filter the books by their status.


//TODO Predefine Book Objects: Each book should be an object with properties like title and status (available or borrowed), stored inside an array.

let books = [
    { title: "The Great Gatsby", status: "available" },
    { title: "1984", status: "borrowed" },
    { title: "To Kill a Mockingbird", status: "available" },
    { title: "The Catcher in the Rye", status: "borrowed" },
    { title: "Moby-Dick", status: "available" }
  ];

  console.log(books);

//TODO Filter Available Books: Write a function to list all available books.
let availableBooks = [];
function booksCanRead(title, status) {

    for (let i = 0; i < books.length; i++) {
        
        let title = books[i].title; // created a variable so I could use parameters of the function to store
        let status = books[i].status;// data and console.log it out

        if (status === "available") {

            availableBooks.push(title)
    
        }
    };
    
};

booksCanRead();
console.log(availableBooks);

//TODO Filter Borrowed Books: Write a function to list all borrowed books.

let unavailableBooks = [];

function borrowedBooks(title, status) {
    for (let i = 0; i < books.length; i++) {

        let title = books[i].title;
        let status = books[i].status;

            if (status === "borrowed") {

                unavailableBooks.push(title)

            }
    };
};

borrowedBooks();
console.log(unavailableBooks);

//? Create a program to manage recipes, where some recipes are predefined, and the user can add or update recipes.

//TODO  Each recipe should have properties like title, ingredients (an array of strings), and instructions.
let recipes = [
    { title: "Pancakes", ingredients: ["Flour", "Eggs", "Milk"], instructions: "Mix and cook on a griddle." },
    { title: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], instructions: "Chop and toss with dressing." }
  ];
//TODO Add a New Recipe: Allow the user to input a new recipe's title, ingredients, and instructions, then add it to the list.

function addNewRecipe(title, ingredients, instructions) {

    recipes.push({title, ingredients, instructions})

}

addNewRecipe("Soup", ["Chicken Broth", "Green Onions", "Potatoes"], "Stir in pot and keep temp at a slow simmer.");


//TODO Update Recipe Instructions: Enable the user to update the instructions of an existing recipe.

function updateRecipe(instructions) {

    

    for(let i = 0; i < recipes.length; i++) {

        let instructions = recipes[i].instructions;

        if (recipes[0].instructions === recipes[i].instructions) {
            recipes[i].instructions = "Don't forget to add seasoning!"
        } else if (recipes[1].instructions === recipes[i].instructions) {
            recipes[i].instructions = "Add some bacon bits and croutons"
        } else {
            if (recipes[2].instructions === recipes[i].instructions) {
                recipes[i].instructions = "Throw in some slices of chicken breast"
            }
        }
    };
};

//* Display All Recipes: Write a function to display all recipes with their details.

function displayRecipes() {
    console.log(recipes);
};

displayRecipes();
updateRecipe();
displayRecipes();


//! Car Dealership Inventory

//? Create a program to manage a car dealership inventory, where some cars are predefined, and the user can add or update car details.

let cars = [
    { make: "Toyota", model: "Camry", year: 2020, price: 24000 },
    { make: "Honda", model: "Civic", year: 2019, price: 22000 }
  ];
//TODO Each car should have properties like make, model, year, and price.
//TODO Add a New Car: Allow the user to input a new car's make, model, year, and price, then add it to the inventory.
function addNewCar(make, model, year, price) {
    cars.push({make, model, year, price})
}



//TODO Update Car Price: Enable the user to update the price of an existing car.

function updateCarPrice(price) {
    for (let i = 0; i < cars.length; i++) {

        if (cars[0].price === cars[i].price) {
            cars[i].price = 20350;
        } else if (cars[1].price === cars[i].price) {
            cars[i].price = 1800;
        } else {
            if (cars[2].price === cars[i].price) {
                cars[i].price = 95000;
            }
        }

    }
}

//* Display All Cars: Write a function to display all cars in the inventory.
function displayCars(){
    console.log(cars);
}

displayCars();
addNewCar("Mercedes", "S63 AMG", 2024, 112000);
displayCars();
updateCarPrice();
displayCars();


//! Pet Names with Details

//TODO Create a program that manages a list of pet names, where each pet has a name, type (e.g., dog, cat), and age.

let pets = [
    {name: "Sonic", type: "Cat", age: 3},
    {name: "Max", type: "Dog", age: 5},
    {name: "Kya", type: "Dog", age: 9},
];

//TODOEach object should contain name, type, and age.
//TODO  Add a New Pet: Allow the user to input a new pet's name, type, and age, then add it to the list.

function addNewPet(name, type, age) {
    pets.push({name, type, age})
};

function displayPets() {
    console.log(pets);
};

//* Display All Pet Names: Write a function to display all pets with their details.


displayPets();
addNewPet("Cookie", "Cat", 1);
displayPets();
