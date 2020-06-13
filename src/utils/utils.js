
// eslint-disable-next-line
const MOBILE_REGEX = /^([0-9]+[ \.]?)+$/;
// eslint-disable-next-line
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const HAS_MAYUS = /[A-Z]+/;
const HAS_MINUS = /[a-z]+/;
const HAS_NBR = /[0-9][0-9]+/;

export const handleMobileNumber = (value) => {
    if (!value)
        return false;
    if (value?.match(MOBILE_REGEX))
        return false;
    return true;
}

export const handleEmail = (value) => {
    if (!value)
        return false;
    if (value?.match(EMAIL_REGEX))
        return false;
    return true;
}

export const isGoodPassword = (value) => {
    if (!value)
        return false;
    if (!value?.match(HAS_MAYUS) || !value?.match(HAS_MINUS) || !value?.match(HAS_NBR))
        return true;
    return false;
}

export const camelToSnake = (string) => {
    return string.replace(/[\w]([A-Z])/g, function (m) {
        return m[0] + "_" + m[1]
    }).toLowerCase();
}

export const keysToSnake = (o) => {
    if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
        const n = {};

        Object.keys(o).forEach(el => {
            n[camelToSnake(el)] = keysToSnake(o[el]);
        });
        return n;
    } else if (Array.isArray(o)) {
        return o.map(el => keysToSnake(el));
    }
    return o;
}

export const onlyGetModified = (newObj, oldObj) => {
    const changedObj = {};

    Object.keys(newObj).forEach(el => {
        if (newObj[el] !== oldObj[el]) {
            changedObj[el] = newObj[el];
        }
    })
    return changedObj;
}

export const capitalize = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const loadImage = (url, image) => {
    if (!image)
        return "";
    if (image.includes("assets/"))
        return image;
    if (image.includes("base64"))
        return image;
    if (url)
        return url + image;
    return image;
}

export function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}
