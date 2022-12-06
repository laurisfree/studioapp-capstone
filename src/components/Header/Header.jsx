import './Header.scss';
import logo from '../../assets/logo/logo-dance-studio.png'


export default function Header() {
	return (
		<>
            <div className="header-main">
                <div className="header-main__img-wrp">
                    <img src={logo} alt="" className='header-main__img'/>
                </div>
                <div className='header-main__wrp-nav'>
                    <button className="header-main__nav">
                        <label>HOME</label>
                    </button>
                    <button className="header-main__nav">
                        <label>BOOK</label>
                    </button>
                    <button className="header-main__nav">
                        <label>BUY</label>
                    </button>
                    <button className="header-main__nav">
                        <label>DANCER</label>
                    </button>
                </div>
            </div>
		</>
	);
}