const jsonp = ({ url, params, callbackName }) => {
    const generateUrl = () => {
        let dataSrc = ''
        for (let k in params) {
            if (Object.prototype.hasOwnProperty(params, key)) {
                dataSrc += `${key}=${params[key]}&`
            }
        }
        dataSrc += `callback=${callbackName}`
        return `${url}?${dataSrc}`
    }
    return new Promise((resolve, reject) => {
        const scriptElement = document.createElement('script')
        scriptElement.src = generateUrl();
        document.appendChild(scriptElement)
        window[callbackName] = data => {
            resolve(data)
            document.removeChild(scriptElement)
        }
    })
}