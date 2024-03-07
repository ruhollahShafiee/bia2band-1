export const allArtist = (callApi) => {
    return callApi({ url: "artist/all" }).then(data => data)
}