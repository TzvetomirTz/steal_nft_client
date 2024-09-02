import TopBar from '../../components/topBar/TopBar';
import './FaqPage.css';

const FaqPage = () => {
	return (
		<div className='FaqPage'>
			<TopBar />
            <div className='FaqPageBody'>
                <div className='QuestionAnswerWrapper'>
                    <div className='Question NoSelect'>► My Yoink request doesn't work</div>
                    <div className='Answer NoSelect'>Have you tried [Right Click] + [Save Image As] instead?</div>
                </div>
                <div className='QuestionAnswerWrapper'>
                    <div className='Question NoSelect'>► Am I going to get charged if my yoink request fails?</div>
                    <div className='Answer NoSelect'>Nope. You'll only be charged if the yoink has passed successfully.</div>
                </div>
                <div className='QuestionAnswerWrapper'>
                    <div className='Question NoSelect'>► Is this a scam?</div>
                    <div className='Answer NoSelect'>Nope. Quite the opposite. You're a scam.</div>
                </div>
                <div className='QuestionAnswerWrapper'>
                    <div className='Question NoSelect'>► What networks are supported?</div>
                    <div className='Answer NoSelect'>The Mainnet and Sepolia.</div>
                </div>
                <div className='QuestionAnswerWrapper'>
                    <div className='Question NoSelect'>► Can I contribute to this magnificent project?</div>
                    <div className='Answer NoSelect'>
                        Yes you can! It's open source and can be found 
                        <span> </span>
                        <a href='https://github.com/TzvetomirTz/steal_nft_client' target="_blank" rel="noopener noreferrer">HERE</a>
                        .
                    </div>
                </div>
                <div className='QuestionAnswerWrapper'>
                    <div className='Question NoSelect'>► Is this legal?</div>
                    <div className='Answer NoSelect'>I don't know.</div>
                </div>
                <div className='QuestionAnswerWrapper'>
                    <div className='Question NoSelect'>► To who and where should I flex my newly obtained NFTs?</div>
                    <div className='Answer NoSelect'>Preferably to people entirely unfamiliar with the topic of NFTs 
                        or in dedicated self-contained Discord servers.</div>
                </div>
            </div>
		</div>
	);
}

export default FaqPage;
