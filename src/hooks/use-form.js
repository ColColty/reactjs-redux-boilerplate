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
            if (form[i]?.isRequired && newErrors[i])
                return false;
        }
        return true;
    }

    const toSendFormat = () => {
        let data = {};

        Object.keys(form).forEach(el => {
            data[el] = form[el].value;
        });
        return data;
    }

    const handleForm = (name, value) => {
        if (name === "reset") {
            setForm(baseForm);
            return;
        }
        if (form[name]?.errorHandle) {
            if (form[name]?.errorHandle(value)) {
                setForm({...form, [name]: {
                        ...form[name],
                        value: value
                    }
                });
            } else {
                setErrors({...errors, [name]: true});
                return;
            }
        } else {
            setForm({...form, [name]: {
                    ...form[name],
                    value: value
                }
            });
        }
        if (errors[name])
            setErrors({...errors, [name]: false});
    }

    return [form, errors, handleForm, handleSubmit, toSendFormat];
};

export default useForm;