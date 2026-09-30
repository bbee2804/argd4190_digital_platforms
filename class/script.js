// create a global variable to store movie
let movies 

// fetch data and append html when the website first loads
fetch("data.json").then(response => response.json())
    .then(json => {
        console.log(json)
        movies = json
        for(let i = 0; i < movies.length; i++) {
            let movie = movies[i]
            makeMovie(movie)
        }
    })
    .catch(error => console.log("error", error))


// a function for generating movie card
function makeMovie(movie) {
    let moviesSection = document.querySelector("#movies")
    let genres = movie.genres.split(",")
    let newMovie = document.createElement("div")
    let genreList = document.createElement("p")
    
    newMovie.classList.add("card")
    newMovie.innerHTML = `
            <h2 class="movieTitle">${movie.title}</h2>
            <span>${movie.minutes} min</span>
            <div>
                <img class="movieCover" src="${movie.path}" alt="${movie.alttext}" />
            </div>
    `
    genreList.classList.add("genres")
    for(let j = 0; j < genres.length; j++) {
        genreList.innerHTML += `<span>${genres[j]}</span>`
    }
    newMovie.appendChild(genreList)
    moviesSection.appendChild(newMovie)
}

function createGenreFilter(genre) {
    document.querySelector(`[data-genre="${genre}"]`).addEventListener("click", function(event) {
        let selectedGenreFilter= event.target
        let selectedGenre = selectedGenreFilter.getAttribute("data-genre")
        let moviesSection = document.querySelector("#movies")
        moviesSection.innerHTML = "" // always empty moviesSection before re-generating filtered data
        let filters = document.querySelectorAll(".filter")
        
        for(let i = 0; i < movies.length; i++) {
                let movie = movies[i]
                let genres = movie.genres.toLowerCase().split(",") // lowercase the string before split into an array
                if (genres.includes(`${genre}`) || selectedGenre === "all") {
                    makeMovie(movie)
                }
                
        }
        // remove and set filter element style
        styleFilters(filters, selectedGenre)
    })
}
function createRatedFilter(rated) {
    document.querySelector(`[data-rated="${rated}"]`).addEventListener("click", function() {
    let moviesSection = document.querySelector("#movies")
    moviesSection.innerHTML = ""
    let filteredMovies = movies.filter(movie => movie.rated.toLowerCase() === rated);
    for(let i = 0; i < filteredMovies.length; i++) {
        makeMovie(filteredMovies[i])
    }
    let filters = document.querySelectorAll(".filter")
    styleFilters(filters, rated)
})
}

createGenreFilter("drama")
createGenreFilter("all")
createGenreFilter("thriller")
createGenreFilter("animation")
createGenreFilter("adventure")
createGenreFilter("fantasy")
createGenreFilter("sci-fi")
createGenreFilter("action")
createGenreFilter("comedy")
createGenreFilter("romance")
createRatedFilter("r")
createRatedFilter("pg")
createRatedFilter("pg-13")

// let rates = ["r", "pg", "pg-13"]
// for(let i = 0; i < rates.length; i++) {
//     createRatedFilter(rates[i])
// }

// document.querySelector('[data-genre="drama"]').addEventListener("click", function(event) {
//     let selectedGenreFilter= event.target
//     let selectedGenre = selectedGenreFilter.getAttribute("data-genre")
//     console.log(selectedGenre)
//     let moviesSection = document.querySelector("#movies")
//     moviesSection.innerHTML = "" // always empty moviesSection before re-generating filtered data
//     let filters = document.querySelectorAll(".genreFilter")
    
//     for(let i = 0; i < movies.length; i++) {
//             let movie = movies[i]
//             let genres = movie.genres.toLowerCase().split(",") // lowercase the string before split into an array
//             if (genres.includes("drama") || selectedGenre === "all") {
//                 makeMovie(movie)
//             }
            
//     }
//     // remove and set filter element style
//     for(let i = 0; i < filters.length; i++) {
//         let filter = filters[i]
//         if (filter.getAttribute("data-genre") === selectedGenre) {
//             filter.classList.add("selected")
//         } else {
//             filter.classList.remove("selected")
//         }
        
//     }
// })

// document.querySelector('[data-genre="all"]').addEventListener("click", function(event) {
//     let selectedGenreFilter= event.target
//     let selectedGenre = selectedGenreFilter.getAttribute("data-genre")
//     let moviesSection = document.querySelector("#movies")
//     moviesSection.innerHTML = "" // always empty moviesSection before re-generating filtered data
//     let filters = document.querySelectorAll(".genreFilter")
    
//     for(let i = 0; i < movies.length; i++) {
//             let movie = movies[i]
//             let genres = movie.genres.toLowerCase().split(",") // lowercase the string before split into an array
//             if (genres.includes("all") || selectedGenre === "all") {
//                 makeMovie(movie)
//             }
            
//     }
//     // remove and set filter element style
//     styleFilters(filters, selectedGenre)
// })

// document.querySelector('[data-genre="thriller"]').addEventListener("click", function(event) {
//     let selectedGenreFilter= event.target
//     let selectedGenre = selectedGenreFilter.getAttribute("data-genre")
//     console.log(selectedGenre)
//     let moviesSection = document.querySelector("#movies")
//     moviesSection.innerHTML = "" // always empty moviesSection before re-generating filtered data
//     let filters = document.querySelectorAll(".genreFilter")
    
//     for(let i = 0; i < movies.length; i++) {
//             let movie = movies[i]
//             let genres = movie.genres.toLowerCase().split(",") // lowercase the string before split into an array
//             if (genres.includes("thriller") || selectedGenre === "all") {
//                 makeMovie(movie)
//             }
            
//     }
//     // remove and set filter element style
//     styleFilters(filters, selectedGenre)
// })

// R Rated filter eventListener
// document.querySelector('[data-rated="r"]').addEventListener("click", function() {
//     let moviesSection = document.querySelector("#movies")
//     moviesSection.innerHTML = ""
//     let filteredMovies = movies.filter(movie => movie.rated.toLowerCase() === "r");
//     for(let i = 0; i < filteredMovies.length; i++) {
//         makeMovie(filteredMovies[i])
//     }
//     let filters = document.querySelectorAll(".filter")
//     styleFilters(filters, "r")
// })

// remove and set filter element style
function styleFilters(filters, selected) {
    for(let i = 0; i < filters.length; i++) {
        let filter = filters[i]
        if (filter.getAttribute("data-genre")  === selected || filter.getAttribute("data-rated") === selected) {
            filter.classList.add("selected")
        } else {
            filter.classList.remove("selected")
        }
        
    }
}