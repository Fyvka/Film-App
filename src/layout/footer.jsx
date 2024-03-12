function Footer() {
   return <footer className="page-footer #212121 grey darken-4">
      <div className="container">
         <div className="row">
            <div className="col l6 s12">
               <h5 className="white-text">Nech likes Movies</h5>
               <p className="grey-text text-lighten-4">Your favorite movies and series in one App</p>
            </div>
            <div className="col l4 offset-l2 s12">
            </div>
         </div>
      </div>
      <div className="footer-copyright">
         <div className="container right-align">
            {new Date().getFullYear()} Copyright 
            <a href="https://t.me/mrFyvka" className="zeros"> Dan Nech</a>  
         </div>
      </div>
   </footer>
}

export { Footer };