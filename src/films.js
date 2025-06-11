// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 const result = array.filter(movie => movie.director == director)
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const movies = array.filter(movie => movie.director == director);
  const sum = movies.reduce((acc, med) => acc + med.score, 0);
  const average = sum / movies.length;
  let result = parseFloat(average.toFixed(2));
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(movie => movie.title);
  let titlesAlphabetic = titles.sort();
  let result = titlesAlphabetic.slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
  console.log("EXERCICE 5 ->", sortedMovies);
  return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, movieGenre) {
  const movies = array.filter(movie => movie.genre.includes(movieGenre)); 
  const sum = movies.reduce((acc, med) => acc + med.score, 0);
  const average = sum / movies.length;
  let result = parseFloat(average.toFixed(2));
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const converted = movies.map(movie => {
    const { duration } = movie;
    let totalMinutes = 0;

    if (typeof duration === "string") {
      const hourMatch = duration.match(/(\d+)\s*h/);
      const minMatch  = duration.match(/(\d+)\s*min/);

      if (hourMatch) {
        totalMinutes += parseInt(hourMatch[1], 10) * 60;
      }
      if (minMatch) {
        totalMinutes += parseInt(minMatch[1], 10);
      }
    } else if (typeof duration === "number") {
      totalMinutes = duration;
    }

    return {
      ...movie,
      duration: totalMinutes
    };
  });

   console.log("EXERCICI 7 ->", converted);
  return converted;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const filmsOfThatYear = movies.filter(movie => movie.year === year);
  if (filmsOfThatYear.length === 0) {
    return null;
  }
  const bestMovie = filmsOfThatYear.reduce((currentBest, movie) => {
    return (movie.score > currentBest.score) ? movie : currentBest;
  });

  let result = [bestMovie]
  console.log("EXERCICE 8 ->", result);
  return result;

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
