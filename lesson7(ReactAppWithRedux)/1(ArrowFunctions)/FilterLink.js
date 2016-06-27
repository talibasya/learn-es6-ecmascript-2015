import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from './Link';

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.setVisibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(setVisibilityFilter(ownProps.filter));
	}
});

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);