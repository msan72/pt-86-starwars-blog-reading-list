async function getAllCharacters() {
        const response = await fetch('https://swapi.tech/api/people')
        const data = await response.json()

        const arrAux = Promise.all(
            data.results.map(async (item) => {
                const res = await fetch(item.url)
                const details = await res.json()

                details.result["image"] = `https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${details.result.uid}.jpg`
                return details.result
            })
        )
        return arrAux
}


async function getAllPlanets() {
        const response = await fetch('https://swapi.tech/api/planets')
        const data = await response.json()

        const arrAux = Promise.all(
            data.results.map(async (item) => {
                const res = await fetch(item.url)
                const details = await res.json()

                details.result["image"] = `https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${details.result.uid}.jpg`
                return details.result
            })
        )

        return arrAux
}


async function getAllVehicles() {
        const response = await fetch('https://swapi.tech/api/vehicles')
        const data = await response.json()

        const arrAux = Promise.all(
            data.results.map(async (item) => {
                const res = await fetch(item.url)
                const details = await res.json()

                details.result["image"] = `https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${details.result.uid}.jpg`
                return details.result
            })

        )

        return arrAux
}

export {
  getAllCharacters,
  getAllPlanets,
  getAllVehicles
}