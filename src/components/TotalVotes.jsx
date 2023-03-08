import { useVotesContext } from '../context/store';
import './totalVotes.css';

export const TotalVotes = () => {
	const { votes, totalVotes } = useVotesContext();

	return (
		<div
			style={{
				width: '100%',
				backgroundColor: 'black',
				marginTop: '1rem',
				padding: '.5rem',
				borderRadius: '16px',
			}}
		>
			Total votes: {totalVotes}
		</div>
	);
};
