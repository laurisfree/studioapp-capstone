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
                        <div className="header-main__nav">
                            <img src="" alt="" />
                            <p>Home</p>
                        </div>
                        <div className="header-main__nav">
                            <img src="" alt="" />
                            <p>Book</p>
                        </div>
                        <div className="header-main__nav">
                            <img src="" alt="" />
                            <p>Buy</p>
                        </div>
                        <div className="header-main__nav">
                            <img src="" alt="" />
                            <p>Profile</p>
                        </div>
                    </div>
            </div>
		</>
	);
}