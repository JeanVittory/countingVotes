import { ContextProvider } from './context/store';
import { Candidate } from './components/Candidate';
import { TotalVotes } from './components/TotalVotes';
import { TypeVotes } from './components/TypeVotes';
import './App.css';

function App() {
	const candidate = ['Gustavo Petro', 'Jair Bolsonaro', 'Joe Biden'];
	return (
		<div className='App'>
			<ContextProvider>
				<TotalVotes />
				<div className='candidate-container'>
					{candidate.map((e) => {
						return <Candidate key={e} name={e} />;
					})}
				</div>
				<TypeVotes />
			</ContextProvider>
		</div>
	);
}

export default App;
