import { Movie } from './movie';
 

function Movies(props) {

   const { movies = [] } = props;

   return (<div className="moviesS">
      {movies.length ? (
         movies.map((movie) => <Movie key={movie.imbdID} {...movie} />)
      ) : (
         <div className="noFound">
            <h4 className=''>No results were found for your request</h4>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fru%2Ffree-icon%2Fnot-found_1178479&psig=AOvVaw1pWKzW8R4MAr7MtR2FjPz2&ust=1710334144476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPja_bDh7oQDFQAAAAAdAAAAABAD' alt="" />
         </div>
      )}
   </div>
   );
}

export { Movies };