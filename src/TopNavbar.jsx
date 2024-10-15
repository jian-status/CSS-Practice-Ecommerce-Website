import {Link} from 'react-router-dom';
import logo from './assets/logo.png';
import cart from './assets/shopping-cart.png';
import {useState} from "react";

export default function TopNavbar() {
    // hide categories dropdown
    const [hidden, setHidden] = useState(true);
    const categories = ['Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip Liner', 'Lipstick', 'Mascara', 'Nail polish'];

    return (

        <div className="flex gap-x-20 justify-end pe-5 pb-5 items-center sticky z-50 bg-white w-full top-0">
            <Link to="/" className="flex mr-auto items-center gap-2 text-2xl">
                <img src={logo} alt="Logo" className="rounded size-16 border-2 rounded"/>
                <p>Find your beauty</p>
            </Link>
            <Link to="about" className="py-2">ABOUT</Link>
            <div onClick={() => setHidden(!hidden)}>
                PRODUCTS
            </div>
            <Link to="stores" className="py-2">STORES</Link>
            <Link to="contact" className="py-2">CONTACT</Link>
            <div className="flex items-center gap-5 mr-5">
                <Link to="auth" className="py-2">LOG IN</Link>
                <div id="shopping_cart_icon" className="relative hover:cursor-pointer"
                     onClick={() => console.log('hello!')}>
                    <img src={cart} className="size-5 z-40"/>
                    <div className="
                            absolute top-0 translate-x-3 -translate-y-3
                            -z-50 size-5 bg-[#cbdac5] rounded-full text-center leading-5 text-sm font-light"
                    >3
                    </div>
                </div>
            </div>
            {hidden ? "" :
                <div
                    className="absolute z-30 w-[50rem] h-[10rem] bg-white left-1/2 top-3/4 rounded-b p-5 shadow"
                    onMouseLeave={() => setHidden(true)}
                >
                    <div className="grid grid-cols-4">
                        {categories.map((item, id) =>
                            <Link
                                to={`/products/${item}`} key={id}
                                className="p-1"
                            >{item}

                            </Link>
                        )}
                    </div>
                </div>
            }
        </div>

    )
}