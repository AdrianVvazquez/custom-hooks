
// v1
import { useState } from 'react';

export const useForm = ( initialState = {} ) => {

    const [ values, setValues ] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }
    
    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
        
    }

    return [ values, handleInputChange, reset ]; // Arreglo
};

// v2
import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState(initialForm);

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const resetForm = () => {
        setFormState( initialForm );
    }

    return { 
        ...formState, 
        formState,
        onInputChange, 
        resetForm 
    }; 
};