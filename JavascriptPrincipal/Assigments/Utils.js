async function getUsers() {
    const resp = await fetch('https://randomuser.me/api/?results=30', {
        method: 'GET'
    })
    const jsonResp = {
        body: await resp.json(),
        status: resp.status
    }
    if (jsonResp.status === 200) {
        return jsonResp.body.results
    }

    return [];
}