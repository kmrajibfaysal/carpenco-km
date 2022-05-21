import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index_Home';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
