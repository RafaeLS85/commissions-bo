export const sessionService = {
    get: async () => {
        return fetch('/api/cookies')
            .then(response => response.json())
            .then(data => {
                // console.log("data from session service", data)
                return data
            })
            .catch(error => console.error(error));
    }
}

