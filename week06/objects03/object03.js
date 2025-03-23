/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
function User1(username, email) {
  this.username = username;
  this.email = email;
  this.showInfo = function () {
    console.log(`username: ${this.username}, email: ${this.email}`);
  };
}
const newUser = new User1("hrmd", "gdhd@gmail.com");
newUser.showInfo();
/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  //use to show users info
  showInfo() {
    console.log(`username: ${this.username}, email: ${this.email}`);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
    console.log(`Email update is: ${this.email}`);
  }
}

const updatedUser = new User("DGFHG", "DHSJK@Ggmail.com");

updatedUser.showInfo();
updatedUser.changeEmail("newhjks@gmail.com");

updatedUser.showInfo();

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here

const theme = {
  name: "light",
  isAcive: true,
};

//button.addEventListener("clicked", button);
function toggleTheme() {
  const button = document.getElementById("#themeBtn");
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    button.textContent = "switch to dark mood";
  } else {
    button.textContent = "swtich to light mood";
  }
}

/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here

const counterDisplay = document.getElementById("counterDisplay");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

const counter = {
  value: 0,
};

function updateDisplay() {
  counterDisplay.textContent = counter.value;
}

increaseBtn.addEventListener("click", function () {
  counter.value++;
  updateDisplay();
});
decreaseBtn.addEventListener("click", function () {
  counter.value++;
  updateDisplay();
});

/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here
const product = {
  name: "Tesla",
  price: 100,
  quantity: 3,
};

const quantityInput = document.getElementById("quantity");
const totalPriceDisplay = document.getElementById("totalPrice");

// Function to update the total price based on quantity
function updateTotalPrice() {
  product.quantity = parseInt(quantityInput.value); // Update the quantity
  const totalPrice = product.price * product.quantity; // Calculate total price
  totalPriceDisplay.textContent = totalPrice; // Update the displayed total price
}

quantityInput.addEventListener("input", updateTotalPrice);

updateTotalPrice();

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

// Your code here

class Task {
  constructor(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

const addButton = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Array to store tasks
const tasks = [];

function addedTask() {
  const newTask = new Task("New Task", "New task description");

  // Add the new task to the tasks array
  tasks(...newTask);

  taskList.innerHTML = tasks
    .map((task) => `<li>${task.title}: ${task.description} </li>`)
    .join("");
}

addButton.addEventListener("click", addedTask);

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here
const WeatherApp = {
  apiKey: "8613239d62d14c7187d182658252303",

  getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;

    // Making the fetch request to OpenWeather API
    fetch(apiUrl)
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        this.showWeatherDetails(data); // Call method to display the weather data
      })
      .catch(() => {
        // Handle error if the fetch fails or the city is not found
        document.getElementById("weatherInfo").innerText =
          "Unable to retrieve weather data. Try again!";
      });
  },

  // display the weather data in the UI
  showWeatherDetails(data) {
    const weatherDisplay = document.getElementById("weatherInfo");

    // Check if the city was found
    if (data.cod === 200) {
      weatherDisplay.innerHTML = `
      <h3>Weather for ${data.name}, ${data.sys.country}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
    } else {
      weatherDisplay.innerText =
        "City not found. Please check the name and try again.";
    }
  },
};

// Accessing the HTML elements
const weatherButton = document.getElementById("fetchWeatherBtn");
const cityNameInput = document.getElementById("cityName");

// Adding event listener for the button
weatherButton.addEventListener("click", () => {
  const cityName = cityNameInput.value.trim();

  if (cityName) {
    WeatherApp.getWeatherData(cityName); // Fetch weather for the entered city
  } else {
    document.getElementById("weatherInfo").innerText =
      "Please enter a city name.";
  }
});

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  //  calculate the car's age
  this.age = function () {
    const currentYear = new Date().getFullYear(); // Get current year
    return currentYear - this.year; // Calculate the age
  };
}

// Create a new Car instance
const myCar = new Car("Toyota", "Corolla", 2018);

// Display  car age on the webpage
document.getElementById("carInfo").innerHTML = `
  <h3>Car Details:</h3>
  <p>Brand: ${myCar.brand}</p>
  <p>Model: ${myCar.model}</p>
  <p>Year: ${myCar.year}</p>
  <p>Car Age: ${myCar.age()} years old</p>
`;

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here
const users = [
  { name: "Mike", score: 85 },
  { name: "Makar", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Vitalis", score: 90 },
];

// Function to display users
function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name}: ${user.score}`;
    userList.appendChild(li);
  });
}

// sort users by score in descending order
function sortUsers() {
  users.sort((a, b) => b.score - a.score); // Sort in descending order
  displayUsers(); // Update the displayed list
}

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here
// Shopping list object with an array of items
const shoppingList = {
  items: [],

  // Method to add a new item
  addItem(item) {
    if (item.trim() !== "") {
      // Prevent empty items
      this.items.push(item);
      this.displayItems();
    }
  },

  displayItems() {
    const shoppingLists = document.getElementById("shoppingList");
    shoppingLists.innerHTML = "";
    this.items.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}.${item}`;
      shoppingLists.appendChild(li);
    });
  },
};

// Event listener for the Add Item button
document.getElementById("addItemBtn").addEventListener("click", function () {
  const itemInput = document.getElementById("itemInput");
  shoppingList.addItem(itemInput.value);
  itemInput.value = "";
});

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here

// Array of posts with title, content, and likes
const posts = [
  { title: "Lord of the rings", content: "About a movie.", likes: 0 },
  { title: "The mountain is you", content: "Self-Sabotage.", likes: 1 },
  { title: "First Project", content: "Pancake Maker.", likes: 3 },
];

// Function to display posts
function displayPosts() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const postDiv = document.createElement("div");
    const title = document.createElement("h3");
    const content = document.createElement("p");
    const likes = document.createElement("p");
    const likeBtn = document.createElement("button");

    title.textContent = posts[i].title;
    content.textContent = posts[i].content;
    likes.textContent = "Likes: " + posts[i].likes;
    likeBtn.textContent = "Like";

    likeBtn.onclick = function () {
      posts[i].likes++;
      likes.textContent = "Likes: " + posts[i].likes;
    };

    // Append elements
    postDiv.appendChild(title);
    postDiv.appendChild(content);
    postDiv.appendChild(likes);
    postDiv.appendChild(likeBtn);
    postDiv.appendChild(document.createElement("hr")); // Separator

    container.appendChild(postDiv);
  }
}

displayPosts();

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;

  // increase salary
  this.increaseSalary = function (percent) {
    let increase = (this.salary * percent) / 100;
    this.salary += increase;
  };
}
const employee = new Employee("John Doe", "Software Engineer", 5000);

// Function to update and display employee details

function displayEmployee() {
  const container = document.getElementById("employeeContainer");
  container.innerHTML = `
    <h3>${employee.name}</h3>
    <p>Position: ${employee.position}</p>
    <p>Salary: $<span id="salary">${employee.salary.toFixed(2)}</span></p>
    <button onclick="increaseSalaryBy10()">Increase Salary by 10%</button>
    <hr>
  `;
}
// increase salary by 10%
function increaseSalaryBy10() {
  employee.increaseSalary(10);
  document.getElementById("salary").textContent = employee.salary.toFixed(2);
}
displayEmployee();

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here
const timer = {
  seconds: 0,
  intervalId: null,

  // this method  counts seconds
  start: function () {
    if (this.intervalId === null) {
      // prevents multiple intervals
      this.intervalId = setInterval(() => {
        this.seconds++;
        document.getElementById("timerDisplay").textContent = this.seconds;
      }, 1000);
    }
  },
};

document.getElementById("startTimerBtn").addEventListener("click", function () {
  timer.start();
});

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const library = [];

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  for (let i = 0; i < library.length; i++) {
    const li = document.createElement("li");
    li.textContent = `"${library[i].title}" by ${library[i].author} - ${library[i].pages} pages`;
    bookList.appendChild(li);
  }
}

//  add a new book
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  if (title && author && pages) {
    const newBook = new Book(title, author, pages);
    library = [...library, newBook];
    displayBooks(); // Update book list

    // Clear input fields
    document.getElementById("bookForm").reset();
  }
}

document.getElementById("bookForm").addEventListener("submitBtn", addBook);

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

const foxTracker = {
  foxes: [], // Initialize empty array to hold foxes

  //  add a new fox
  addFox: function (name, location) {
    const newFox = { name: name, location: location };
    this.foxes.push(newFox);
    displayFoxes(); // Update the list
  },
};

// Function to display the list of foxes
function displayFoxes() {
  const foxList = document.getElementById("foxList");
  foxList.innerHTML = "";

  // Loop through the foxes array and display each fox
  for (let i = 0; i < foxTracker.foxes.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${foxTracker.foxes[i].name} - Location: ${foxTracker.foxes[i].location}`;
    foxList.appendChild(li);
  }
}

// submit button
document.getElementById("foxForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page from refreshing on form submit

  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;

  if (name && location) {
    foxTracker.addFox(name, location); // Add new fox
    document.getElementById("foxForm").reset(); // Clear the input fields
  }
});

// Your code here
