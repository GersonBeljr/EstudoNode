function extraiLinks(arraylinks) {
    return arraylinks.map((objLink)=>Object.values(objLink).join(","))
}





//
export default function listaValidada(listaDelinks){
    return extraiLinks(listaDelinks);
}