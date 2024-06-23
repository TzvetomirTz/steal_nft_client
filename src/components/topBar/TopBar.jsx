import './TopBar.css';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const TopBar = () => {
	const navigate = useNavigate();
	const goToMainPage = useCallback(() => { navigate('/'); });
	const goToFaqPage = useCallback(() => { navigate('/faq'); });

	return (
		<div className='TopBar'>
			<div className='TopBarLeft'>
				<div className='TopBarLogoText NoSelect' onClick={goToMainPage}>YoinkNFT</div>
			</div>
			<div className='TopBarRight'>
				<div className='TopBarButton NoSelect' onClick={goToFaqPage}>FAQ</div>
				<div className='TopBarButton NoSelect'>About</div>
				<div className='TopBarButton NoSelect'>Explore NFTs ↗</div>
			</div>
		</div>
	);
}

export default TopBar;
