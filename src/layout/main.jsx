import React from "react";
import { Movies } from "../components/movies";
import { Search } from "../components/serach";
import { Preloader } from "../components/preloader";

class Main extends React.Component {
   state = {
      movies: [],
      loading: true,
   };

   componentDidMount() {
      fetch('http://www.omdbapi.com/?apikey=dd85ad69&s=terminator')
         .then((response) => response.json())
         .then((data) => this.setState({ movies: data.Search, loading: false }));
   }

   searchMovies = (str, type = "all") => {
      fetch(
         `http://www.omdbapi.com/?apikey=dd85ad69&s=${str}${type !== "all" ? `&type=${type}` : ""}`

      )
         .then((response) => response.json())
         .then((data) => this.setState({ movies: data.Search, loading: false }));
   }

   render() {
      const { loading } = this.state;

      return <main className="container content">
         <Search searchMovies={this.searchMovies} />
         {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
      </main>
   }
}

export { Main };