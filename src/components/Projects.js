import React from 'react';

import { Box, Media, Image } from 'rbx';

// import axios from 'axios';

const Projects = () => {
	// const [ data, setData ] = useState({});

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await axios('https://gh-pinned-repos.now.sh/?username=jsquardo');

	// 		setData(result.data);
	// 	};

	// 	fetchData();
	// }, []);

	return (
		<div className="mt3">
			<Box>
				<Media>
					<Media.Item align="left">
						<Image.Container size={64}>
							<Image alt="Image" src="https://bulma.io/images/placeholders/128x128.png" />
						</Image.Container>
					</Media.Item>
				</Media>
			</Box>
		</div>
	);
};

export default Projects;
