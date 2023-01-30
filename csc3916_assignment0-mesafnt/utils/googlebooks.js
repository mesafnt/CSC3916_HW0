const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })


    //
    //TODO: return a formattedObj
    let object = {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        //requestHeader: results.config.headers
        requestHeader: (results.config ? results.config.headers : null)
    }

    //TODO: return the formattedObject
    return JSON.stringify(object);
}
