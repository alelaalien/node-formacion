// const getPokemonById = (id) =>{

const { http } = require("../pluggins");

    
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     fetch(url).then((response) =>{

//         response.json().then((pokemon) =>{
//             console.log(pokemon);
//         })
//     })
// }

// const getPokemonById = (id, callback) =>{
    
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     fetch(url)
//     .then((response) => response.json())
//     .then((pokemon) => callback(pokemon));
// }

const getPokemonById = async (id) =>{
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // return fetch(url)
    // .then((response) => response.json())
    // .then(()=>{throw new Error('Not found')})
    // .then((pokemon) => pokemon);

    const pokemon = await http.get(url);

    

    return pokemon.name;
}

module.exports = getPokemonById;