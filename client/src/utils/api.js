class Api
{
    static fetchLaunches(nextPage) {
        return fetch(`${process.env.REACT_APP_API_SERVER}:${process.env.REACT_APP_API_PORT}?nextPage=${nextPage}`,
            {
                method: 'GET',
                mode: "cors", // no-cors, cors, *same-origin
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
            })
            .then((response) => {
                return response.json()
            })
            .catch(error => {
                console.error('Error:', error)
                return error
            })
    }
}

export default Api;