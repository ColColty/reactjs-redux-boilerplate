import React from 'react';

const useForm = (baseForm = {}) => {
    const [form, setForm] = React.useState(baseForm);
    const [errors, setErrors] = React.useState({});

    const handleForm = (name, value) => {
        if (form[name]?.errorHandle) {
            if (!form[name]?.errorHandle(value)) {
                setForm({...form, [name]: {
                    ...form[name],
                    value: value
                }});
                if (errors[name])
                    setErrors({...errors, [name]: false});
            } else {
                setErrors({...errors, [name]: true});
            }
        } else {
            setForm({...form, [name]: {
                ...form[name],
                value: value
            }});
        }
    }

    return [form, errors, handleForm];
};

export default useForm;