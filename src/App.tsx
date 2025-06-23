import './App.css';
import Body from './pages/body';
import Footer from './pages/footer';
import Header from './pages/header';

function App() {
    return (
        <div className="app">
            <div className="main-content">
                <Header />
                <Body />
            </div>
            <Footer />
        </div>
    );
}

export default App;
