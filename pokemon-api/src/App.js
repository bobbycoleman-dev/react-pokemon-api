import { useState } from "react";
import FetchButton from "./components/FetchButton";
import PokemonList from "./components/PokemonList";

function App() {
	const [pokemonList, setPokemonList] = useState([]);

	const fetchPokemon = () => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				console.log(response);
				setPokemonList(response.results);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container mt-5 d-flex flex-column align-items-center">
			<FetchButton fetchPokemon={fetchPokemon} />
			<PokemonList pokemonList={pokemonList} />
		</div>
	);
}

export default App;
