import React from 'react';
import './App.scss';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Main } from './layout/main';

function App() {
    return (
        <div className="App">
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        </div>
    );
}

export default App;
