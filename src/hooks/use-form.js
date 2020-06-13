import React from 'react';

const useForm = (baseForm = {}) => {
    const [form, setForm] = React.useState(baseForm);
    const [errors, setErrors] = React.useState({});

    const handleSubmit = () => {
        let newErrors = errors;

        Object.keys(form).forEach(el => {
            if (form[el]?.isRequired) {
                if (!form[el]?.value) {
                    newErrors[el] = true;
                } else if (form[el]?.submitCheck && form[el]?.submitCheck(form[el].value)) {
                    newErrors[el] = true;
                } else if (form[el]?.errorHandle && form[el]?.errorHandle(form[el].value)) {
                    newErrors[el] = true;
                }
            }
        })
        setErrors(newErrors);
        for (var i in newErrors) {
            if (newErrors[i])
                return false;
        }
        return true;
    }

    const toSendFormat = () => {
        let data = {};

        Object.keys(form).forEach(el => {
            if (Array.isArray(form[el].value)) {
                data[el] = JSON.stringify(form[el].value);
            } else {
                data[el] = form[el].value;
            }
        });
        return data;
    }

    const handleForm = (name, value, error = false) => {
        if (error) {
            setErrors(state => ({...state, [name]: value}));
            return;
        }
        if (name === "reset") {
            setForm(baseForm);
            return;
        }
        if (form[name]?.errorHandle && form[name]?.errorHandle(value)) {
            setErrors({...errors, [name]: true});
            return;
        } else {
            setForm(state => ({...state, [name]: {
                    ...state[name],
                    value: value
                }
            }));
        }
        if (errors[name])
            setErrors({...errors, [name]: false});
    }

    const fillForm = (newForm) => {
        if (!newForm)
            return;
        let regenForm = form;
        Object.keys(newForm).forEach(el => {
            if (regenForm[el]) {
                regenForm[el].value = newForm[el];
            } else {
                regenForm[el] = {
                    value: newForm[el]
                };
            }
        })
        setForm(regenForm);
    }

    return [form, errors, handleForm, handleSubmit, toSendFormat, fillForm];
};

export default useForm;