async function getData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
    return response.json();
}

async function Pokemons() {

    const {results} = await getData();

    return (
        <>
            <h1>Pokemons</h1>
            <ul>
                {
                    results.map(pk => (<li>{pk.name}</li>))
                }
            </ul>
        </>
    )
}

export default Pokemons;