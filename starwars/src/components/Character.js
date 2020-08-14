// Write your Character component here
import React, {useState} from 'react'

const Character = (props) => {
    const characters = props
    console.log(characters.characters.results)
    return (
        <div>
            {
                characters.characters.results.map(character =>{
                    return ( 
                        <div>
                            <h2>{character.name}</h2>
                            <p>{character.gender}</p>
                            <p>{character.birth_year}</p>
                        </div>
                            
                    );
                })
            }
        </div>
    )
}

export default Character