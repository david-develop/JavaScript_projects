// The program state (movieList and nolanMovieList) hasn’t changed. However, all our functions are now pure; instead of accessing the state, they use parameters to achieve their desired behavior. As an added benefit, the function averageRating() can now compute the average rating of any movie list; it has become more generic.
// Functional programming is about writing programs by combining functions expressing what the program should do, rather than how to do it.

const movieList = [
  {
    title: 'Batman',
    year: 1989,
    director: 'Tim Burton',
    imdbRating: 7.6
  },
  {
    title: 'Batman Returns',
    year: 1992,
    director: 'Tim Burton',
    imdbRating: 7.0
  },
  {
    title: 'Batman Forever',
    year: 1995,
    director: 'Joel Schumacher',
    imdbRating: 5.4
  },
  {
    title: 'Batman & Robin',
    year: 1997,
    director: 'Joel Schumacher',
    imdbRating: 3.7
  },
  {
    title: 'Batman Begins',
    year: 2005,
    director: 'Christopher Nolan',
    imdbRating: 8.3
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    imdbRating: 9.0
  },
  {
    title: 'The Dark Knight Rises',
    year: 2012,
    director: 'Christopher Nolan',
    imdbRating: 8.5
  }
];

// Get movie titles
const titles = movies => {
//   const titles = [];
//   for (const movie of movies) {
//     titles.push(movie.title);
//   }
//   return titles;
  return movies.map(movie => movie.title);
};

// Get movies by Christopher Nolan
const nolanMovies = movies => {
  // const nolanMovies = [];
  // for (const movie of movies) {
  //   if (movie.director === 'Christopher Nolan') {
  //     nolanMovies.push(movie);
  //   }
  // }
  // return nolanMovies;
  return movies.filter(movie => movie.director === 'Christopher Nolan');
};

// Get titles of movies with an IMDB rating greater or equal to 7.5
const bestTitles = movies => {
  // const bestTitles = [];
  // for (const movie of movies) {
  //   if (movie.imdbRating >= 7.5) {
  //     bestTitles.push(movie.title);
  //   }
  // }
  // return bestTitles;
  return movies.filter(movie => movie.imdbRating >= 7.5).map(movie => movie.title);
};

// Compute average rating of a movie list
const averageRating = movies => {
  // let ratingSum = 0;
  // for (const movie of movies) {
  //   ratingSum += movie.imdbRating;
  // }
  // return ratingSum / movies.length;

  // Compute the sum of all movie IMDB ratings
  const ratingSum = movies.reduce((acc, movie) => acc + movie.imdbRating, 0);
  return ratingSum / movies.length;
};

console.log(titles(movieList));
const nolanMovieList = nolanMovies(movieList);
console.log(nolanMovieList.length);
console.log(bestTitles(movieList));
console.log(averageRating(nolanMovieList));
