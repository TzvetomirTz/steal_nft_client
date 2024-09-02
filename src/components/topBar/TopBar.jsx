import './TopBar.css';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const TopBar = () => {
	const navigate = useNavigate();
	const goToMainPage = useCallback(() => { navigate('/'); }, [navigate]);
	const goToFaqPage = useCallback(() => { navigate('/faq'); }, [navigate]);
	const goToAboutPage = useCallback(() => { navigate('/about'); }, [navigate]);

	return (
		<div className='TopBar'>
			<ToastContainer className="ToastContainer" />
			<div className='TopBarLeft'>
				<div className='TopBarLogoText NoSelect' onClick={goToMainPage}>YoinkNFT</div>
			</div>
			<div className='TopBarRight'>
				<div className='TopBarButton NoSelect' onClick={goToFaqPage}>FAQ</div>
				<div className='TopBarButton NoSelect' onClick={goToAboutPage}>About</div>
				<div className='TopBarButton NoSelect' onClick={() => {toast("WIP. Soon this button will redirect you to an NFT browser! For now use: nftscan.com")}}>Explore NFTs ↗</div>
			</div>
		</div>
	);
}

export default TopBar;
