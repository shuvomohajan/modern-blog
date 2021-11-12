/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../images/logo.png';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="" style={{width:'60px', height:'60px'}} />
            <span className="ml-3 text-4xl text-red-600">Bloges</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap text-red-400 items-center text-base justify-center">
            <a href="#" className="mr-5 hover:text-gray-900 cursor-pointer">First Link</a>
            <a href="#" className="mr-5 hover:text-gray-900 cursor-pointer">Second Link</a>
            <a href="#" className="mr-5 hover:text-gray-900 cursor-pointer">Third Link</a>
            <a href="#" className="mr-5 hover:text-gray-900 cursor-pointer">Fourth Link</a>
          </nav>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
