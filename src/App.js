import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {


  const [charmander, setCharmander] = useState({
          name: "Charmander" ,
          type: "Fire" ,
          weight: "3" ,
          image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c8a2987f-3e2e-4e4d-9aac-27d02b24bdd3/d6th2ej-b07148ff-57c7-46c6-be65-04d41dbb2b97.png/v1/fill/w_400,h_400/pokemon_charmander_icon_by_betatus_d6th2ej-fullview.png" ,
          color: 'red',
          evolved: true,
          id: '0',
          stage: "1"
  })

  const charmeleon = {
    ...charmander,
    name: "Charmeleon",
    weight: "7" ,
    image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/4/40/Pokemans_005.gif" ,
    stage: "2"
  }

  const charizard = {
    ...charmander,
    name: "Charizard",
    weight: "20" ,
    image: "https://pbs.twimg.com/media/DZp86NcW4AEurlc.png" ,
    evolved: false
  }

  const evolucoesCharmander = [ charmeleon, charizard ]

  const [poliwag, setPoliwag] = useState({
    name: "Poliwag" ,
    type: "Water" ,
    weight: "1" ,
    image: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/470c56bc34140ee.png" ,
    color: 'blue',
    evolved: true,
    id: '1',
    stage: "1"
  })

  const poliwhirl = { 
    ...poliwag,
    name: "Poliwhirl",
    weight: "10" ,
    image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/1/13/Pokemans_061.gif" ,
    stage: "2"
  }

  const poliwhrat = { 
    ...poliwag,
    name: "Poliwhrat",
    weight: "14" ,
    image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/7/72/Pokemans_062.gif" ,
    evolved: false
  }

  const evolucoesPoliwag = [ poliwhirl, poliwhrat ]
    
    //Se o pokemon ainda evoluir, entao eu passo a nova props
  

  return ( 
  <>
  <GlobalStyles/>
    <FlexContainer>
      <PokemonCard 
        pokemon= {charmander}
        setPokemon= {setCharmander}
        evolucaoPokemon= {evolucoesCharmander}
          
      />
      <PokemonCard 
        pokemon= {poliwag}
        setPokemon= {setPoliwag}
        evolucaoPokemon= {evolucoesPoliwag}
      />
    </FlexContainer>
  </>
    
  );
}

export default App;
