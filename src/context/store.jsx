import { createContext, useContext, useState, useMemo } from 'react';

export const VotesContext = createContext();

export const ContextProvider = ({ children }) => {
	const [votes, setVotes] = useState({});
	const [showPercentage, setShowPercentage] = useState(false);
	const [showQuantity, setShowQuantity] = useState(false);
	const totalVotes = useMemo(() => {
		return Object.values(votes).reduce((prev, acc) => prev + acc, 0);
	}, [votes]);

	return (
		<VotesContext.Provider
			value={{
				votes,
				setVotes,
				totalVotes,
				showPercentage,
				setShowPercentage,
				showQuantity,
				setShowQuantity,
			}}
		>
			{children}
		</VotesContext.Provider>
	);
};

export const useVotesContext = () => {
	const context = useContext(VotesContext);
	return context;
};
