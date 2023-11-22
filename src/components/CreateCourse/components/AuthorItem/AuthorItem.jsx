import { Button } from '../../../../common/Button/Button';
import PropTypes from 'prop-types';

export const AuthorItem = (props) => (
	<div>
		{props.title}
		<Button icon='bin' onClick={props.onClick} />
	</div>
);
AuthorItem.propTypes = {
	title: PropTypes.string,
	onClick: PropTypes.func,
};
