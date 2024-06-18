// Array of programming languages

document.querySelector("h2").textContent = "My Favorite Programming Languages :";
var languages = ['C++', 'Python', 'C'];

        // the list items
var ul = document.querySelector('.programmingLanguages');

        // Loop array and create list items 
languages.forEach(function(language) {
var li = document.createElement('li');
li.textContent = language;
          ul.appendChild(li);
});
 

