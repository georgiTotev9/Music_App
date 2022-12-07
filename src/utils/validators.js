export const albumIsInvalid = (albumData) => {
    const requeredFields = ['name', 'imgUrl', 'price', 'releaseDate', 'artist', 'genre', 'description'];

    return requeredFields.some(x => !albumData[x])
}