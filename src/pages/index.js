import React from 'react';
import Layout from '../components/Layout';
import PinnedRepos from '../components/PinnedRepos'
// import Projects from '../components/Projects';
// import BlogFeature from '../components/BlogFeature';

// import compIcon from '../styles/icons8-waving-hand-emoji-96.png';
import GitHubButton from 'react-github-btn';

import { Container } from 'rbx';

import '../main.scss';

const Home = () => {
	return (
		<Layout>
			<Container>
				<div className="hero">
					<div className="hero_left">
						<h1 className="title is-size-2">Hi, I'm Johnny</h1>
						<p>
							I'm a software developer with a focus on JavaScript and React with a passion for programming open source
							projects.
						</p>
						<GitHubButton href="https://github.com/jsquardo" data-size="large" aria-label="Follow @jsquardo on GitHub">
							Follow @jsquardo
						</GitHubButton>
					</div>
					<div className="hero_right">
						<h3 className="is-size-4 small_title">Contact Me!</h3>
            
						<p>I'm available for work so feel free to reach out.</p>
					</div>
				</div>
        <PinnedRepos />
				{/* <div className="main_content">
					<Projects />
					<BlogFeature />
				</div> */}
			</Container>
		</Layout>
	);
};

export default Home;