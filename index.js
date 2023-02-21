let title = document.getElementById("title");
let button = document.getElementById("btn");
let results = document.getElementById('results');


button.addEventListener("click", function(){
    let movies = title.value;
    let apikey = "8b2760a7";

    let url = `http://www.omdbapi.com/?apikey=${apikey}&t=${movies}`;
   

    fetch(url)
    .then((response) => response.json())
    .then((res) => {

        const movie = res;
       

        const html = `
        <div>
            <img src ="${movie.Poster}" alt="${movie.title}">
            <p>Released in ${movie.Year}</p>
            <p>IMDB Rating: ${movie.imdbRating}</p>
            <p> Cast : ${movie.Actors}</p>
            <p> Director : ${movie.Director}</p>
        </div>                  
            `;
              results.innerHTML = html;
});
  
});