// Write your Character component here
import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'
import Starships from './Starships'

const headerKF = keyframes `
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.2)
    }
    100% {
        transform: scale(1)
    }
`

const H2 = styled.h2 `
    color: yellow;
    transform: scale(0);
    animation: ${headerKF} 1s ease-in-out forwards;

    &:hover{
        color: black;
    }

`
const Div = styled.div `
    display: flex;
    justify-content: space-around;
`

const P = styled.h4 `
    color: blue;

    &:hover{
        color: black;
    }
`

const Character = (props) => {
    const characters = props
    const getData = props


    return (
        <div>
            {
                characters.characters.results.map(character =>{
                    return ( 
                        <Div>
                            <div>
                                <H2>Name: {character.name}</H2>
                                {character.starships.map(starship =>{
                                    return <Starships key={starship} starship={starship} getData={getData}/>
                                })}
                            </div>
                            <div>
                                <P>Gender: {character.gender != 'n/a' ? character.gender : 'unkown'}</P>
                                <P>Birth year: {character.birth_year}</P>
                            </div>
                        </Div>
                            
                    );
                })
            }
        </div>
    )
}

export default Character