
import Login from './components/Login';
import Navbar from './components/Navbar';
const App = () => {
    return (
        <div className="bg-slate-100 h-screen">
            <Navbar/>
            <div className="container mx-auto">
                   <Login/>
                </div>
        </div>
    )
}

export default App;
