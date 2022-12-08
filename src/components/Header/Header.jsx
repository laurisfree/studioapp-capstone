import './Header.scss';
import logo from '../../assets/logo/logo-dance-studio.png'
import {Link} from 'react-router-dom'


export default function Header() {
	return (
		<>
            <div className="header-main">
                <div className="header-main__img-wrp">
                    <img src={logo} alt="" className='header-main__img'/>
                </div>
                <div className='header-main__wrp-nav'>
                    <Link to="/">
                        <button className="header-main__nav">
                            <label>HOME</label>
                        </button>
                    </Link>
                    <Link to="/book">
                        <button className="header-main__nav">
                            <label>BOOK</label>
                        </button>
                    </Link>
                    <Link to="/buy">
                        <button className="header-main__nav">
                            <label>BUY</label>
                        </button>
                    </Link>
                    <Link to="/dancer">
                        <button className="header-main__nav">
                            <label>DANCER</label>
                        </button>
                    </Link>
                </div>
            </div>
		</>
	);
}