import React from 'react';

import Footer from './components/Footer';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { UserProvider } from './context/UserContext';

const App = () => {
    return (
        <UserProvider>
            <CartProvider>
                <WishlistProvider>
                   <Home />
                    <Footer />
                </WishlistProvider>
            </CartProvider>
        </UserProvider>
    );
};

export default App;
