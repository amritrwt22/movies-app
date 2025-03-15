// import '../css/App.css'
import Home from './pages/Home'
//importing
import Favourites from './pages/Favourites';
import {Routes, Route } from "react-router-dom"
//import navbar in app.jsx becz we want navbar in all the pages of app rather than just homepage
import NavBar from './components/NavBar';



function App() {
  return (

    <div>
      <NavBar/>

      {/*here we will create a router -tells where to go & what comp. to display based on
        // slash(/route) on the web page .... try this by putting /favourites on url */}
        <main className='main-content'>
            <Routes> 
                <Route path="/" element={<Home/>}   />
                <Route path="/favourites" element={<Favourites/>}   />
            </Routes>
        </main>

    </div>
  );
}

export default App
