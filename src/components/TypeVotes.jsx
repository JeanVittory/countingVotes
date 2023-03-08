import { useVotesContext } from '../context/store';

export const TypeVotes = () => {
	const { votes, setShowPercentage, showPercentage, setShowQuantity, showQuantity } =
		useVotesContext();

	const handlerShowPercentage = () => {
		setShowPercentage(!showPercentage);
		setShowQuantity(false);
	};

	const handlerShowQuantity = () => {
		setShowQuantity(!showQuantity);
		setShowPercentage(false);
	};
	return (
		<div>
			<button onClick={handlerShowPercentage}>%</button>
			<button onClick={handlerShowQuantity}>Nº</button>
		</div>
	);
};

export default TypeVotes;
