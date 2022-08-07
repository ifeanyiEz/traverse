// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');
h1 = articleList.siblings('h1'); // Your code goes here!
kids = articleList.find('*'); // Your code goes here!
parents = articleList.parents('div'); // Your code goes here!
console.log(articleList, h1, kids, parents);