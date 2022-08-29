# useCounter

Ejemplo de uso:
```
    const initialForm = {
        nombre: '',
        edad: '',
        email: '',
    };
    
    const [ formValues, handleInputChange, reset ] = useForm ( initialForm );

    const { nombre, edad, email } = formValues;
```
