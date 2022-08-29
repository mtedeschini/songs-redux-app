import { combineReducers } from "redux";

//Reducers
export const songs = () => {
		return [
			{ title: "No scrubs", duration: "4.05"},
			{ title: "Macarena", duration: "2.30"},
			{ title: "All Star", duration: "3.15"},
			{ title: "I want it That Way", duration: "1.45"}
		];
};

export const favoriteTitle = () =>{
	return 'All Star'
}

export const selectedSong = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({songs, selectedSong, favoriteTitle})