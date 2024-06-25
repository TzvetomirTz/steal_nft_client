import TopBar from '../../components/topBar/TopBar';
import './AboutPage.css';

const AboutPage = () => {
	return (
		<div className='AboutPage'>
			<TopBar />
			<div className='AboutPageBody'>
				<div className='AboutPanel'>
					<div className='AboutPanelTitle NoSelect'>What YoinkNFT is</div>
					<div className='AboutPanelBody'>
						<div className='WhatIsYoinkNftLeft'>YoinkNFT!</div>
						<div className='AboutPanelParagraph'>
							<div>First we've got to define what a yoink is. There's no better definition than the one that can be found 
								<a href='https://www.urbandictionary.com/define.php?term=Yoink' target="_blank" rel="noopener noreferrer"> HERE </a>
							.
							</div>
							<div>By now you should know what an NFT is. In case you don't, click away before it's too late!</div>
							<div>Still here? Ok. YoinkNFT yoinks NFTs.</div>
							<div>It mints a clone of an already existing NFT and sets its owner to whichever owner you pick.</div>
							<div>It could be you, it could be a friend...</div>
							<div>Heck even the president could now afford to own a low quality jpeg of a penguin dressed as a bear.</div>
							<div className='SmallText'>Although still hosted on Google Drive...</div>
						</div>
					</div>
				</div>
				<div className='AboutPanel'>
					<div className='AboutPanelTitle NoSelect'>Why YoinkNFT is important</div>
					<div className='AboutPanelBody'>
						<div className='AboutPanelParagraph'>
							<div>It brings freedon to the people. It questions the authority. Separates the wolves from the sheeps.</div>
							<div>The people are tired of [Right Click] + [Save Image As] and we at YoinkNFT listened...</div>
							<div>We made the alternative, being buying an NFT, cheaper.</div>
							<div className='SmallText'>
								Actually the idea of the project is to bring forward the negatives of how this magnificent 
								technology is being used and spark a discussion on how to improve it. Or not, maybe it's perfect as it is?
							</div>
						</div>
					</div>
				</div>
				<div className='AboutPanel'>
					<div className='AboutPanelTitle NoSelect'>The target group</div>
					<div className='AboutPanelBody'>
						<div className='AboutPanelParagraph'>
							<div>✨ The Degens. ✨</div>
						</div>
					</div>
				</div>
				<div className='AboutPanel'>
					<div className='AboutPanelTitle NoSelect'>How it works</div>
					<div className='AboutPanelBody'>
						<div className='AboutPanelParagraph'>
							<div>In case the collection of the given NFT implements ERC721URIStorage interface YoinkNFT fetches the metadata of the given NFT and mints into our magnificent NFT collection an NFT with that metadata.</div>
							<div>That metadata contains everything that this NFT basically is.</div>
							<div>The NFT is immediately indexed by the major NFT marketplaces and can be used to flex at school/work/Degen Discord servers.</div>
							<div>In case the collection of the given NFT doesn't implement ERC721URIStorage interface YoinkNFT doesn't work.</div>
							<div className='SmallText'>But then again you probably aren't working either...</div>
							<div>But worry not! The vast majority of the NFT collections implement that interface these days, so we cool.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
