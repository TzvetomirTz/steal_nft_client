import { useRef, useState } from 'react';
import { ethers } from 'ethers';
import TopBar from '../../components/topBar/TopBar';
import './MainPage.css';
import metamaskIcon from '../../assets/wlt_ics/mtmsk_icn.svg'
import StealNftService from '../../services/StealNftService';

const MainPage = () => {
	const [displayMainPageBanner, setDisplayMainPageBanner] = useState(true);
	const [displayMainPageConnectWalletPanel, setDisplayMainPageConnectWalletPanel] = useState(false);
	const [walletProvider, setWalletProvider] = useState(null);
	const [currentStealPrice, setCurrentStealPrice] = useState("???");

	const collectionAddressRef = useRef();
	const nftIdRef = useRef();
	const destinationAddressRef = useRef();

	const onStart = () => {
		setDisplayMainPageBanner(false);
		setDisplayMainPageConnectWalletPanel(true);
	};

	const connectMetaMask = async () => {
		const provider = new ethers.BrowserProvider(window.ethereum);
		setWalletProvider(provider);
		setCurrentStealPrice(await StealNftService.getStealPrice(provider));
	};

	return (
		<div className='MainPage'>
			<TopBar />
			<div className='MainPageBody'>
				{displayMainPageBanner && !walletProvider && <div className='MainPageBanner'>
					<div className='MainPageBannerTitle NoSelect'>YoinkNFT</div>
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
					<div className='MainPageStealPanelTitle NoSelect'>✨ Yoink ✨</div>
					<div className='MainPageStealPanelFormWrap'>
						<div className='StealFormFieldTitle NoSelect'>Collection Address:</div>
						<input className='StealFormInputField' ref={collectionAddressRef} />
						<div className='StealFormFieldTitle NoSelect'>NFT ID:</div>
						<input className='StealFormInputField' ref={nftIdRef} />
						<div className='StealFormFieldTitle NoSelect'>Destination Address:</div>
						<div className='DestinationAddressInputFieldWrapper'>
							<input className='StealFormInputField DestinationAddressInputField' ref={destinationAddressRef}/>
							<div className='MeButton Button NoSelect' onClick={
								async () => {destinationAddressRef.current.value = (await walletProvider.getSigner()).address}
							}>Me</div>
						</div>
						<div className='StealFormBottom'>
							<div className='StealButton Button NoSelect' onClick={() => {
								StealNftService.stealNft(
									walletProvider,
									collectionAddressRef.current.value,
									nftIdRef.current.value,
									destinationAddressRef.current.value,
									currentStealPrice
								)}
							}>Yoink</div>
						</div>
						<div className='YoinkPriceIndicator NoSelect'>Price: { currentStealPrice } ETH</div>
					</div>
				</div>}
			</div>
		</div>
	);
}

export default MainPage;
