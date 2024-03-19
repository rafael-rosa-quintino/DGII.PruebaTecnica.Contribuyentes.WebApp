import axios from 'axios';

const HttpClient = {

    get: function (url) {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    deleteWitParams: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.delete(url, {
                params: params
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    delete: function (url) {
        return new Promise((resolve, reject) => {
            axios.delete(url)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    post: function (url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    put: function (url, data) {
        return new Promise((resolve, reject) => {
            axios.put(url, data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },


    postFile: function (url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                resolve(response.data);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    },


    patch: function (url, data) {
        return new Promise((resolve, reject) => {
            axios.patch(url, data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },


    handleError: function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    }

};


export default HttpClient;