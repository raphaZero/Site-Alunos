function random() {
    return Math.floor(Math.random() * 10000000);
}

const movies = [
    {
        movieName: "Pulp Fiction",
        imdbRanting: "8.6",
        number: random(),
        char: ["Jules", "Vincent", "Mia Wallace"]
    },
    {
        movieName: "Interestellar",
        imdbRanting: "8.4",
        number: random(),
        char: ["Cooper", "Murph", "Brand"]
    },
    {
        movieName: "Inception",
        imdbRanting: "8.7",
        number: random(),
        char: ["Cobb", "Arthur", "Adridne", "Saito"]
    },
    {
        movieName: "Whiplash",
        imdbRanting: "8.5",
        number: random(),
        char: ["Andrew", "Fletcher", "Nicole", "Jim"]
    },
    {
        movieName: "Aliens",
        imdbRanting: "8.3",
        number: random(),
        char: ["Ripley", "Newt", "Burke"]
    }
];

function lookingMovie(name, prop) {
    for (let i = 0; i < movies.length; i++) {
        
        if (movies[i].movieName === name) {
            
            if (prop in movies[i]) {
                return movies[i][prop];
            } else {
                return "Propriedade não encontrada"
            }

        }
        
    }
    return "Filme não encontrado"
}

console.log(lookingMovie("Interestellar", "char"));