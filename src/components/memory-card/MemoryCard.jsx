import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './MemoryCard.css';

function MemoryCard(props) {
	const {children, onClick, isOpen} = props;

	// TODO: add onFocus, onTouchStart handlers
	// TODO: add dynamic (open close) aria-label on each button

	return (
		<button onClick={onClick} className="memoryCard wrapper">
			<span
				className={classnames('innerWrapper', {
					['innerWrapperOpened']: isOpen,
				})}>
				<span className="head" />
				<span className="tail">{isOpen ? children : ''}</span>
			</span>
		</button>
	);
}

MemoryCard.propTypes = {
	children: PropTypes.node,
	isOpen: PropTypes.bool,
	onClick: PropTypes.func,
};

export default MemoryCard;
