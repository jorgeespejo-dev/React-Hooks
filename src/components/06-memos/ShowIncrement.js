import React from 'react'

// momoriza componente si los argumentos no cambian
export const ShowIncrement = React.memo(({increment}) => {

    console.log('Me volvi a generar :(')

    return (
        <button 
            className="btn btn-primary"
            onClick={ ()=>{
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})
