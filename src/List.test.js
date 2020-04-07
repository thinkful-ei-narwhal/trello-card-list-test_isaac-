import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

describe('<List />', () => {
	//Smoke Testing
	it('Smoke Testing List Component: render List without crashing', () => {
		//DOM element to render into
		const div = document.createElement('div');

		//Render List component
		ReactDOM.render(
			<List
				header='header'
				cards={[
					{ id: 'a', title: 'First card', content: 'lorem ipsum' },
					{ id: 'b', title: 'Second card', content: 'lorem ipsum' },
					{ id: 'c', title: 'Third card', content: 'lorem ipsum' },
				]}
			/>,
			div
		);
	});

	//Snapshot Testing
	it('Snapshot Testing Lis Component: render List UI as expected', () => {
		//Render the component as JSON
		const tree = renderer
			.create(
				<List
					header='header'
					cards={[
						{ id: 'a', title: 'First card', content: 'lorem ipsum' },
						{ id: 'b', title: 'Second card', content: 'lorem ipsum' },
						{ id: 'c', title: 'Third card', content: 'lorem ipsum' },
					]}
				/>
			)
      .toJSON();
      
      //Check if it matches the previous snapshot
    //stored in __snapshots__/List.test.js.snap
    expect(tree).toMatchSnapshot();
	});
});
