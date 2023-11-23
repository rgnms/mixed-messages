const programmingLanguages = ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'];
const htmlFacts = [
    "HTML (HyperText Markup Language) isn't technically a programming language; it's a markup language used for creating the structure of web pages.",
    "The first version of HTML, HTML 1.0, was introduced in 1991 by Tim Berners-Lee.",
    "HTML provides the basic structure for web pages by using tags to define elements such as headings, paragraphs, links, and images.",
    "It's Evolving: HTML has gone through various iterations. As of recent years, HTML5 is the latest version, introducing new features like video, audio, and canvas elements.",
    "HTML5 introduced semantic elements like <header>, <footer>, <article>, and <section>, which help define the meaning of content for better accessibility and search engine optimization.",
    "HTML is universal and used across all platforms and devices to display content on the World Wide Web.",
    "Besides text-based content, HTML also supports multimedia elements like images, videos, and audio files, making web pages more interactive and engaging.",
    "HTML works hand-in-hand with CSS (Cascading Style Sheets) and JavaScript to create modern, visually appealing, and interactive web pages.",
    "Properly structured HTML plays a crucial role in making web content accessible to people with disabilities by enabling screen readers to interpret and present content accurately.",
    "HTML continues to evolve with ongoing updates and improvements, reflecting the changing landscape of web technology and user needs."]
const cssFacts = [
    "The 'C' in CSS stands for cascading, which refers to the way styles are applied.",
    "CSS was introduced in 1996 by Håkon Wium Lie and Bert Bos.",
    "CSS isn't limited to styling web pages; it's also used in eBook formatting, XML documents, and even some programming languages for defining visual styles.",
    "CSS Zen Garden showcases the power of CSS by demonstrating how a single HTML file can be styled in countless ways.",
    "Developers often use CSS preprocessors like Sass, Less, and Stylus, extending CSS's functionality by adding features like variables, nesting, and functions.",
    "Frameworks like Bootstrap and Foundation provide pre-written CSS and HTML templates to help developers create responsive and attractive web layouts quickly.",
    "CSS has evolved with the introduction of Flexbox and Grid, offering powerful layout tools that simplify the creation of complex web layouts.",
    "To implement experimental CSS features, browsers used prefixes like '-webkit-', '-moz-', '-ms-', and '-o-'.",
    "CSS applies styles based on specificity, determining which styles take precedence when conflicting rules are present, following a specific hierarchy.",
    "CSS undergoes regular updates and improvements. CSS3 is the latest version, introducing numerous new features like animations, transitions, transformations, and more."
];
const jsFacts = [
    "JavaScript was created by Brendan Eich in 10 days in 1995.",
    "JavaScript was initially named Mocha, then briefly named LiveScript before finally being named JavaScript.",
    "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
    "JavaScript is not just for web browsers anymore; it's widely used in server-side development, game development, and even in IoT devices.",
    "The 'NaN' in JavaScript stands for 'Not a Number'.",
    "JavaScript has functional programming capabilities, treating functions as first-class objects.",
    "The 'this' keyword in JavaScript refers to the object it belongs to or the global object if it's in a function not associated with an object.",
    "JavaScript frameworks and libraries like React, Angular, and Vue.js have revolutionized web development by simplifying complex tasks and improving efficiency.",
    "JavaScript has asynchronous capabilities, allowing tasks to be executed in the background without interrupting the main thread, using features like callbacks, promises, and async/await.",
    "The JSON (JavaScript Object Notation) format is derived from JavaScript object syntax but is widely used as a data interchange format."
];
const pythonFacts = [
    "Python was created by Guido van Rossum and first released in 1991.",
    "Python emphasizes code readability and its syntax allows programmers to express concepts in fewer lines of code than in other languages.",
    "Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming.",
    "The Zen of Python is a set of guiding principles for writing computer programs in Python, providing aphorisms for software design.",
    "Python has a comprehensive standard library and a vast ecosystem of third-party packages available via package managers like pip.",
    "Python is widely used in various domains, including web development, data analysis, artificial intelligence, scientific computing, and more.",
    "Python uses indentation for indicating blocks of code, relying on whitespace rather than braces.",
    "Guido van Rossum named Python after the British comedy series 'Monty Python's Flying Circus'.",
    "The official mascot of Python is a friendly language-supporting snake called Python's official mascot is a friendly language-supporting snake called 'Python'.",
    "Python's syntax and design philosophy make it an excellent language for beginners."
];
const sqlFacts = [
    "SQL stands for Structured Query Language and is used for managing and manipulating relational databases.",
    "SQL was initially developed by IBM in the 1970s based on Edgar F. Codd's relational model for databases.",
    "SQL allows users to perform various operations on databases, including querying, updating, inserting, deleting, and creating data.",
    "There are different flavors of SQL, such as MySQL, PostgreSQL, SQLite, Microsoft SQL Server, and Oracle SQL.",
    "SQL operates on sets of data, enabling powerful and efficient data manipulation through its declarative syntax.",
    "The SELECT statement is one of the fundamental commands in SQL, used to retrieve data from one or more tables.",
    "SQL joins are used to combine rows from multiple tables based on a related column between them.",
    "ACID (Atomicity, Consistency, Isolation, Durability) properties ensure the reliability of database transactions in SQL.",
    "Stored procedures and triggers are common features in SQL, allowing for the execution of predefined logic and actions within the database itself.",
    "SQL is not limited to relational databases; it's also used in handling non-relational databases, such as NoSQL databases."
];
const programmingJokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why was the JavaScript developer sad? Because he didn't know how to `null` his feelings.",
    "Why do programmers prefer to work alone? Because two's company, but three's a compiler error.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "Why did the programmer go broke? Because he used up all his cache.",
    "How many programmers does it take to change a light bulb? None, that's a hardware issue!",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the developer go broke? Because he used up all his 'cents'.",
    "Why was the function sad? Because it returned `null` instead of its expected value.",
    "Why was the computer cold? It left its Windows open.",
    "Why did the programmer get stuck in the shower? Because the instructions said, 'Lather, rinse, repeat,' but they forgot the base case.",
    "Why don't programmers like nature? It's recursive (it keeps calling itself).",
    "Why was the HTML happy? Because it had good `<tags>`.",
    "Why don't programmers like nature documentaries? Because they always spoil the ending: 'It's a segfault!'",
    "Why did the programmer quit smoking? Because he couldn't afford the `StackOverflow`.",
    "Why did the database administrator leave his wife? She had one-too-many `foreign keys`.",
    "Why did the programmer go to therapy? Because he had too many `issues`.",
    "Why was the JavaScript developer sad? Because he didn't know how to `Object`.",
    "Why did the computer catch a cold? It left its Windows open."
];

const funFacts = {
    HTML: htmlFacts,
    CSS: cssFacts,
    JavaScript: jsFacts,
    Python: pythonFacts,
    SQL: sqlFacts
}

const randFive = () => {
    return Math.floor(Math.random() * 5);
}
const randTen = () => {
    return Math.floor(Math.random() * 10);
}
const randTwenty = () => {
    return Math.floor(Math.random() * 20);
}

const randomMessage = () => {
    let progLang = programmingLanguages[randFive()];
    return `Programming Language: ${progLang}\nFun Fact: ${funFacts[progLang][randTen()]}\nSoftware Joke: ${programmingJokes[randTwenty()]}`;
}



console.log(randomMessage());

// I originally encountered issues when trying to access my fun facts from a randomly seleted programming language using dot notation. Below is ChatGPT's explanation of why. I fixed it by using bracket notation.


// ME
// thanks. why does it give an error when I used the dot notation vs the bracket notation to try to access the facts associated with a randomly selected programming language?

// ChatGPT
// The reason you encountered an error when using dot notation (funFacts.progLang) to access the facts associated with a randomly selected programming language is due to how dot notation works in JavaScript.

// Dot notation expects the property name to be a literal identifier (a valid variable name) rather than a variable or an expression. When you use dot notation like funFacts.progLang, JavaScript looks for a property named progLang within the funFacts object, not for the value of the progLang variable.

// In your scenario, progLang holds the name of a programming language stored in a variable, and you want to use this variable's value to dynamically access a property within the funFacts object. For dynamic property access based on a variable, you should use bracket notation.

// So, funFacts[progLang] correctly accesses the property named by the value stored in the progLang variable within the funFacts object, while funFacts.progLang attempts to access a property named exactly "progLang" within the funFacts object, which doesn't exist.
