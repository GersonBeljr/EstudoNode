import chalk from 'chalk';


async function checaStatus(listaURL) {
    const arrStatus = await Promise.all(
        listaURL.map(async (url) => {
            try {
                const response = await fetch(url);
                return response.status;
            } catch (erro) {
                return manejaErros(erro);
            }

        })
    )
    return arrStatus;
}

function extraiLinks(arraylinks) {
    return arraylinks.map((objLink) => Object.values(objLink).join(","))
}

function manejaErros(erro) {
    //console.log(chalk.red(erro,":algo deu errado"))
    if (erro.cause.code === "ENOTFOUND") {
        return "link não encontrado"
    } else {
        return "Erro encontrado"
    }
}


//
export default async function listaValidada(listaDelinks) {
    //return extraiLinks(listaDelinks);
    const links = extraiLinks(listaDelinks);
    const status = await checaStatus(links);
    return listaDelinks.map((objt, ind) => ({
        ...objt, status: status[ind]
    }));
}