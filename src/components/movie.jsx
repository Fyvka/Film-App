function Movie(props) {

   const {
      Title: title,
      Year: year,
      imbdID: id,
      Type: type,
      Poster: poster,
   } = props;

   return <div id={id} className="movie card">
      <div className="card-image waves-effect waves-block waves-light">
         {
            poster === 'N/A' ? (
               <img className="activator" alt='' src={`http://via.placeholder.com/300x400?text=${title}`} />
            ) : <img src={poster} alt=' ' className="activator" />
         }
      </div>
      <div className="card-content">
         <span className="card-title activator gray-text text-darken-4">{title}</span>
         <p>{year}<span className="right">{type}</span></p>
      </div>
   </div>
}

export { Movie }