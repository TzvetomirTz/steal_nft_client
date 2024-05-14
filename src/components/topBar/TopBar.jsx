import './TopBar.css';

const TopBar = () => {
	return (
		<div className='TopBar'>
			<div className='TopBarLeft'>
				<div className='TopBarLogoText NoSelect'>StealNFT</div>
			</div>
			<div className='TopBarRight'>
				<div className='TopBarButton NoSelect'>How It Works</div>
				<div className='TopBarButton NoSelect'>Rights</div>
				<div className='TopBarButton NoSelect'>About</div>
				<div className='TopBarButton NoSelect'>Preview Data</div>
			</div>
		</div>
	);
}

export default TopBar;
