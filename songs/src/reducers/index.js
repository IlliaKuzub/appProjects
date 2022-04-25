import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Wash it all away', duration: '4:24'},
        {title: 'All Star', duration: '3:15'},
        {title: 'Macarena', duration: '2:30'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});