import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null, 
        loading: true, 
        error: null
    });

    useEffect( ()=>{

        //cuando el componente se desmonte
        return ()=>{
            //no dispara la renderizacion del componente
            isMounted.current = false;
        }

    },[]);

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        });
        
        fetch(url)
            .then(resp => resp.json() )
            .then(data =>{


                    //isMounted.current, todavia esta montado
                    if(isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }else{
                        console.log('setState no se llamo')
                    }


            });

    }, [url]);

    return state;
}
