import './TopBar.css';

const TopBar = () => {
	return (
		<div className='TopBar'>
			<div className='TopBarLeft'>
				<div className='TopBarLogoText NoSelect'>YoinkNFT</div>
			</div>
			<div className='TopBarRight'>
				<div className='TopBarButton NoSelect'>FAQ</div>
				<div className='TopBarButton NoSelect'>Rights</div>
				<div className='TopBarButton NoSelect'>About</div>
				<div className='TopBarButton NoSelect'>Explore</div>
			</div>
		</div>
	);
}

export default TopBar;
