import './Header.scss';
import logo from '../../assets/logo/logo-ds.png'


export default function Header() {
	return (
		<>
            <div className="header">
                    <div className="header__img-wrp">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header__nav">
                        <img src="" alt="" />
                        <p>Home</p>
                    </div>
                    <div className="header__nav">
                        <img src="" alt="" />
                        <p>Book</p>
                    </div>
                    <div className="header__nav">
                        <img src="" alt="" />
                        <p>Buy</p>
                    </div>
                    <div className="header__nav">
                        <img src="" alt="" />
                        <p>Profile</p>
                    </div>
            </div>
		</>
	);
}