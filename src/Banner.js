import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import './Banner.css';
import banner_pic from './NTOfondo.png';
import Search from './Search';

function Banner() {
    const [showSearch, setShowSearch] = useState (false);
  return (
    <div className='banner' style={{ backgroundImage: `url(${banner_pic})`}}>
        {/* <img 
        className='banner_pic'
        src={banner_pic}
        /> */}
        <div className='banner_search'>
        {showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)}
        className='banner_searcButton' variant='outlined'>
          {showSearch ? "Hide" : "Search Dates"}
          </Button>
        </div>

        <div className='banner_info'>
            <h1>tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc</h1>
            <h5>laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit</h5>
            <Button variant='outlined'>Explore Near By</Button>
        </div>
    
    </div>
  )
}

export default Banner