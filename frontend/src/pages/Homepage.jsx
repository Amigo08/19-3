import React from 'react';
import { Button } from '@mui/material';
// import image from '../assets/images/img.jpg'
/*import './Homepage.css'*/
import { useNavigate } from 'react-router-dom';
function Homepage() {
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate('/movie-list');
  }

  return (
    <div className="homepagebody">
        {/* <img src={image} alt="background image" className='backgroundimage'/> */}
  <form className="container">
      <h1>Welcome to Our Amigo Cinemas</h1>
    
      <Button onClick={handleNavigate}>Get started</Button>
</form>
    </div>
  );
}

export default Homepage;
