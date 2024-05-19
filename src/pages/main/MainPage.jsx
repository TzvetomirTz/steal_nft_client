import { useState } from 'react';
import { ethers } from 'ethers';
import TopBar from '../../components/topBar/TopBar';
import './MainPage.css';
import metamaskIcon from '../../assets/wlt_ics/mtmsk_icn.svg'

const MainPage = () => {
	const [displayMainPageBanner, setDisplayMainPageBanner] = useState(true);
	const [displayMainPageConnectWalletPanel, setDisplayMainPageConnectWalletPanel] = useState(false);
	const [walletProvider, setWalletProvider] = useState(null);

	const onStart = () => {
		setDisplayMainPageBanner(false);
		setDisplayMainPageConnectWalletPanel(true);
	};

	const connectMetaMask = async () => {
		const provider = new ethers.BrowserProvider(window.ethereum);
		const signer = await provider.getSigner();
		console.log("Account:", await signer.getAddress());
		setWalletProvider(provider);
	};

	return (
		<div className='MainPage'>
			<TopBar />
			<div className='MainPageBody'>
				{displayMainPageBanner && !walletProvider && <div className='MainPageBanner'>
					<div className='MainPageBannerTitle NoSelect'>StealNFT</div>
					<div className='MainPageBannerSubtext  NoSelect'>
						When "Right Click" + "Save Image As" just doesn't do it for you anymore...
					</div>
					<div className='MainPageBannerStartButton  NoSelect' onClick={ onStart }>Start</div>
				</div>}
				{displayMainPageConnectWalletPanel && !walletProvider && <div className='MainPageConnectWalletPanel'>
					<div className='MainPageConnectWalletPanelTitle NoSelect'>Connect Wallet</div>
					<div className='MainPageConnectWalletList'>
						<div className='WalletOption' onClick={ connectMetaMask }>
							<img src={ metamaskIcon } alt='' className='WalletIcon NoSelect' />
							<div className='WalletOptionTitle NoSelect'>MetaMask</div>
							<div className='WalletOptionArrow NoSelect'>→</div>
						</div>
					</div>
				</div>}
				{walletProvider && <div className='MainPageStealPanel'>
					<div className='MainPageStealPanelTitle NoSelect'>✨ Steal ✨</div>
					<div className='MainPageStealPanelFormWrap'>
						<div className='StealFormFieldTitle NoSelect'>Collection Address:</div>
						<input className='StealFormInputField' />
						<div className='StealFormFieldTitle NoSelect'>NFT ID:</div>
						<input className='StealFormInputField' />
						<div className='StealFormFieldTitle NoSelect'>Destination Address:</div>
						<input className='StealFormInputField' />
						<div className='StealFormBottom'>
							<div className='StealButton NoSelect'>Steal</div>
						</div>
					</div>
				</div>}
			</div>
		</div>
	);
}

export default MainPage;
