import { useState, useEffect, useRef } from "react";

// Aquí se recibe el url para hacer la petición a la api
export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [ state, setState ] = useState({ data: null, loading: true, error: null })

    useEffect( () => {
        // Se dispara cuando el componente sea desmontado y cancelar la petición
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({ data:null, loading: true, error: null })
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                
                if ( isMounted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    }) 
                }

            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'La información no pudo ser cargada'
                })
            })

    }, [url]);
    
    // data, loading, true
    return state;

};
