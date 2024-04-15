import { mockData } from "./transformer"

export const allArtist = (callApi) => {
    return callApi({ url: "artist/all" }).then(data => mockData["artist/all"])
}

export const artist = (callApi, id) => {

    console.log(id)
    return callApi({ url: `artist/${id}` }).then(({ ...response }) => {
			return { user: response };
		})
}