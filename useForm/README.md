# useCounter

Ejemplo de uso:
## v1
```
    const initialForm = {
        nombre: '',
        edad: '',
        email: '',
    };
    
    const [ formValues, handleInputChange, reset ] = useForm ( initialForm );

    const { nombre, edad, email } = formValues;
```

## v2
```
    const initialForm = {
        nombre: '',
        edad: '',
        email: '',
    };
    
    const { nombre, edad, email, onInputChange, resetForm } = useForm ( initialForm );

```
