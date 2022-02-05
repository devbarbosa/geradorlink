
// Buscar links salvos.
export async function getLinkSave(key){
    const myLink = await localStorage.getItem(key)
    
    let linksSaves = JSON.parse(myLink) || [];

    return linksSaves;

}

// Salvar um link no localStorage.
export async function saveLink(key, newLink){
    let linksStored = await getLinkSave(key);

    // Se já estiver um link salvo com algum ID, não pode duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('Essse link já existe na sua lista');
        return;
    }

    // Adicionando link à lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("link salvo com sucesso");

}


// Deletar link salvo.
export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log("Link deletado com sucesso!");

    return myLinks;
}