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
            </div>
		</div>
	);
}

export default FaqPage;
