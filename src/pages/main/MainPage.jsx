import { useState } from 'react';
import TopBar from '../../components/topBar/TopBar';
import './MainPage.css';
import metamaskIcon from '../../assets/wlt_ics/mtmsk_icn.svg'

const MainPage = () => {
	const [displayMainPageBanner, setDisplayMainPageBanner] = useState(true);
	const [displayMainPageConnectWalletPanel, setDisplayMainPageConnectWalletPanel] = useState(false);
	const [displayMainPageStealPanel, setDisplayMainPageStealPanel] = useState(false);

	const onStart = () => {
		setDisplayMainPageBanner(false);
		setDisplayMainPageConnectWalletPanel(true);
	};

	return (
		<div className='MainPage'>
			<TopBar />
			<div className='MainPageBody'>
				{displayMainPageBanner && <div className='MainPageBanner'>
					<div className='MainPageBannerTitle NoSelect'>StealNFT</div>
					<div className='MainPageBannerSubtext  NoSelect'>
						When "Right Click" + "Save Image As" just doesn't do it for you anymore...
					</div>
					<div className='MainPageBannerStartButton  NoSelect' onClick={ onStart }>Start</div>
				</div>}
				{displayMainPageConnectWalletPanel && <div className='MainPageConnectWalletPanel'>
					<div className='MainPageConnectWalletPanelTitle NoSelect'>Connect Wallet</div>
					<div className='MainPageConnectWalletList'>
						<div className='WalletOption'>
							<img src={ metamaskIcon } alt='' className='WalletIcon NoSelect' />
							<div className='WalletOptionTitle NoSelect'>MetaMask</div>
							<div className='WalletOptionArrow NoSelect'>→</div>
						</div>
					</div>
				</div>}
			</div>
		</div>
	);
}

export default MainPage;
