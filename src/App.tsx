
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext.tsx';
import { MessageSquare } from 'lucide-react';
import Products from './pages/Products';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="relative min-h-screen font-primary bg-surface-base selection:bg-white selection:text-black">

                    <Navbar />
                    <CartDrawer />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>

                    <button
                        aria-label="Open chat"
                        className="fixed bottom-8 right-8 bg-white text-surface-base p-4 rounded-full shadow-2xl hover:bg-gray-100 transition-colors z-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4"
                    >
                        <MessageSquare size={24} strokeWidth={1.5} />
                    </button>

                </div>
            </Router>
        </CartProvider>
    );
}

export default App;