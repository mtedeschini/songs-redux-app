import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selected }) => {
	if (!selected) {
		return <h4>Select a Song</h4>;
	}

	return (
		<div>
			<h3>Details for:</h3>
			<p>Title: {selected.title}</p>
			<p>Duration: {selected.duration}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		selected: state.selectedSong,
	};
};

export default connect(mapStateToProps)(SongDetail);
