const bookapikey = `vem6bjG9QLoaHhi1cJVquNnoojijS3r1`;
const movietvapikey = `daa116e318f6510e3187f5a14dd286c4`;

export const getallbooks = () => {
    return fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${bookapikey}`)
      .then((res) => res.json())
  };

export const getallmovies = () => {
    const randomNumber = Math.floor(Math.random() * 500) + 1;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWExMTZlMzE4ZjY1MTBlMzE4N2Y1YTE0ZGQyODZjNCIsInN1YiI6IjY1YmJkN2U4MmI4YTQzMDE3YjFjMTkxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fwxuyXsDPLTWtEDFMV1M5vKy_Y8WCyJrbRofqGr1do4'
        }
      };
      
      return fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${randomNumber}`, options)
        .then(response => response.json())
  };

  export const getallmusic = () => {
    var client_id = '147aa376103a479d841ac45c25308c9c';
    var client_secret = '0de7fcb4aa734e8f97827c0a02889ec9';
    

  }