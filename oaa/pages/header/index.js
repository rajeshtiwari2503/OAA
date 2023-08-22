import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div>
            <div className='container bg-light'>
                <div className='row align-items-center '>
                    <div className='col-2 text-start'>
                        <div className='m-2'>
                            <img width={60} height={60} className='card-img-top rounded' alt='logo' src="/OAALogo.jpeg" />
                        </div>
                    </div>
                    <div className='col-7 d-flex justify-content-center'>
                        <div className='searchBox'>
                            <input  name='search' type="text" placeholder="Search Products"   />

                            <SearchIcon style={{ color: "black", cursor: "pointer" }} className='me-md-1' fontSize='large'  />

                        </div>

                    </div>
                    <div className='col-3 d-flex justify-content-end'>
                        <div className='d-flex align-items-center me-2'>
                            <div className='me-3'>
                                <ShoppingBasketIcon fontSize='large'/>
                            </div>
                            <div>
                                <div>My Cart</div>
                                <div>0 items</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header