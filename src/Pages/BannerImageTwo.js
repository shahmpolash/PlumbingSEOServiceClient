import React, { useEffect, useState } from 'react';

const BannerImageTwo = () => {
   
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/banner-two`)
          .then((res) => res.json())
          .then((info) => setBanners(info));
      }, []);


    return (
        <div>
            {
                banners.map( banner => 
                    <img className='w-full my-4' src={banner.bannerImageTwo} alt="Banner Two"></img>
                    )
            }
        </div>
    );
};

export default BannerImageTwo;