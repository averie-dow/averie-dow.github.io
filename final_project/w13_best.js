document.addEventListener("DOMContentLoaded", () => {
  if (typeof booksData === "undefined" || !booksData.length) return;

  const randomBook = booksData[Math.floor(Math.random() * booksData.length)];
  const titleEl = document.querySelector(".title");
  const authorEl = document.querySelector(".author");
  const imageEl = document.querySelector(".book-cover");

  if (titleEl) titleEl.textContent = randomBook.name;
  if (authorEl) authorEl.textContent = `by ${randomBook.author}`;
  if (imageEl && randomBook.image) imageEl.src = randomBook.image;
});