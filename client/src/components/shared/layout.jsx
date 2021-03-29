import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';


const Layout=({ children }) => { 
    return (
    <>
    <Header />
    <main className="container">
        {
            children
        }
    </main>
    <Footer />
    </>
    );
}

export default Layout;