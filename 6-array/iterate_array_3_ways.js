const movies = ['The Wolf of Wall Street', 'Zootopia', 'Babysitting'];

// for loop
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// forEach method
movies.forEach((movie) => {
  console.log(movie);
});

// for-of
for (const movie of movies) {
  console.log(movie);
}
