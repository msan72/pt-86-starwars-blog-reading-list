async function getAllCharacters() {
    try {
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

    } catch (error) {
        console.log(error)
    }
}


async function getAllPlanets() {
    try {
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

    } catch (error) {
        console.log(error)
    }
}


async function getAllVehicles() {
    try {
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

    } catch (error) {
        console.log(error)
    }
}

export {
  getAllCharacters,
  getAllPlanets,
  getAllVehicles
}