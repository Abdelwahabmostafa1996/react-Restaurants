import react from 'react';
import { Button } from 'react-bootstrap';
import './Header.css';



const Header = () => {
  return (
    <header>
      <div className="container" >
        <div className="col-md-6" >
        </div>
        <h2>Good food choices are good investments.</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam et purus a odio finibus bibendum amet leo. </p>
        < button > Order now </button>
        < button > learn more </button>
        <div className="col-md-6" >
          </div>
        </div>
    </header>
  )

}

export default Header;