import React from 'react';
import {Link} from 'react-router-dom';

import {ROUTES} from 'configs/routes';

import './Home.css';

function Home() {
	return (
		<section className="home wrapper">
			<h1 className="title">Memory Challenge</h1>
			<Link className="link" to={ROUTES.GAME}>
				Start
			</Link>
		</section>
	);
}

export default Home;
