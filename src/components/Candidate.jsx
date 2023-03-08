import { useVotesContext } from '../context/store';
import './candidate.css';

export const Candidate = ({ name }) => {
	const { votes, totalVotes, setVotes, showPercentage, showQuantity } = useVotesContext();
	const percentage = (+votes[name] / +totalVotes) * 100;
	const quantity = +votes[name];

	const handlerVotes = () => {
		const exist = Object.keys(votes).find((e) => e === name);
		if (exist) {
			setVotes({
				...votes,
				[name]: votes[name] + 1,
			});
		} else {
			setVotes({
				...votes,
				[name]: 1,
			});
		}
	};

	return (
		<div className='candidate'>
			<button onClick={handlerVotes} className='candidateBtn'>
				Candidate {name}
			</button>
			{showPercentage && <div>{percentage ? percentage.toFixed(1) : 0}%</div>}
			{showQuantity && <div>{quantity ? quantity : 0}</div>}
		</div>
	);
};
