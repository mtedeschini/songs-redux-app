import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
	return (
		<div className="ui divided list">
			{props.songs.map((song) => {
				return (
					<div className="item" key={song.title}>
						<div className="right floated content">
							<button
								onClick={() => props.selectSong(song)}
								className="ui button primary"
							>
								Select
							</button>
						</div>
						<div className="content">{song.title}</div>
						<b>{song.title === props.favoriteTitle && "Favorite!"}</b>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state)
	return { 
        songs: state.songs, 
        favoriteTitle: state.favoriteTitle, 
        selectedSong: state.selectedSong
        };
};

export default connect(mapStateToProps, { selectSong })(SongList);
