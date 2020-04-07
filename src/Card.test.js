import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () => {
	//Smoke Testing
	it('Smoke Testing Card Component: render without crashing', () => {
		//DOM element to render into
		const div = document.createElement('div');

		//Render the component
		ReactDOM.render(<Card titile='title' content='content' />, div);

		//Clean up
		ReactDOM.unmountComponentAtNode(div);
	});

	//Snapshot Testing
	it('Snapshot Testing Card Component: render this UI as expected', () => {
		//Render the component as JSON
		const tree = renderer
			.create(<Card titile='title' content='content' />)
			.toJSON();

		//Check if it matches the previous snapshot
		//stored in __snapshots__/Card.test.js.snap
		expect(tree).toMatchSnapshot();
	});
});
