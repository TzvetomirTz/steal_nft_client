import TopBar from '../../components/topBar/TopBar';
import './MainPage.css';

const MainPage = () => {
	return (
		<div className='MainPage'>
			<TopBar />
			<div className='MainPageBody'>
				<div className='MainPageBanner'>
					<div className='MainPageBannerTitle NoSelect'>StealNFT</div>
					<div className='MainPageBannerSubtext  NoSelect'>
						When “right click” + “save image as” just doesn’t do it for you anymore...
					</div>
					<div className='MainPageBannerStartButton  NoSelect'>Start</div>
				</div>
				{/* <div className='MainPageMidPanel'> </div> */}
			</div>
		</div>
	);
}

export default MainPage;
