import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

  // [0] = charmeleon
  // [1] = charizard

  const evoluirPokemon = () => {

    if(props.pokemon.evolved === true && props.pokemon.stage === "1"){
        props.setPokemon(props.evolucaoPokemon[0])

          

    } else if (props.pokemon.evolved === true && props.pokemon.stage === "2"){
          props.setPokemon(props.evolucaoPokemon[1])
    } else{
        console.log("Evolução final!")
    }
      
    }
    


  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>
        <p>{props.pokemon.evolved}</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard