import React from 'react';

const Frase = ({frase}) => {

    const {quote, author} = frase;

    return (
        <div>
            <h1>{quote}</h1>
            <p>{author}</p>
        </div>
     );
}
 
export default Frase;