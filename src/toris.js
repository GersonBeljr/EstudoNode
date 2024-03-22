async function checaStatus(listaURL) {
    const arrStatus = await Promise.all(
        listaURL.map(async (url) => {
            const response = await fetch(url);
            return response.status;
        })
    )
    return arrStatus;
}

function extraiLinks(arraylinks) {
    return arraylinks.map((objLink) => Object.values(objLink).join(","))
}

//
export default async function listaValidada(listaDelinks) {
    //return extraiLinks(listaDelinks);
    const links = extraiLinks(listaDelinks);
    const status = await checaStatus(links);
    return status
}