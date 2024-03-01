export const allArtist = async (callApi) => {
    return await callApi({ url: "artist/all" }).then(data => data)
}