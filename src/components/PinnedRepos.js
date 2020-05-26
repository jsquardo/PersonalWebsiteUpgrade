import React from 'react';
import { graphql } from 'gatsby';

import githubIcon from '../styles/github-logo.svg'

const PinnedRepos = () => (
	<div className="projects">
		<h1 className="title is-size-2 osp-title">Open Source Projects</h1>
		<div className="container">
			<div className="project">
				<div className="title is-size-5">ChainData</div>
				<p>A CryptoCurrency price website with live updates and info. Created with Vue</p>
        <div className='link-buttons'>
          <img className='project-icon' src={githubIcon} />
          <button className="button">Demo</button>
        </div>
			</div>
      <div className="project">
				<div className="title is-size-5">React Ecom</div>
				<p>An ecommerce website created with React, Redux and a firebase backend.</p>
        <div className='link-buttons'>
          <img className='project-icon' src={githubIcon} />
          <button className="button">Demo</button>
        </div>
			</div>
      <div className="project">
				<div className="title is-size-5">PickAPallette</div>
				<p>Create a color palette website that was made with React and redux.</p>
        <div className='link-buttons'>
          <img className='project-icon' src={githubIcon} />
          <button className="button">Demo</button>
        </div>
			</div>
      <div className="project">
				<div className="title is-size-5">VueShuffle</div>
				<p>Card Shuffle challenge using the Fisher-Yates shuffle algorithm and Vue.js.</p>
        <div className='link-buttons'>
          <img className='project-icon' src={githubIcon} />
          <button className="button">Demo</button>
        </div>
			</div>
      <div className="project">
				<div className="title is-size-5">PyChain</div>
				<p>A blockchain ecosystem built in Python.</p>
        <div className='link-buttons'>
          <img className='project-icon' src={githubIcon} />
          <button className="button">Demo</button>
        </div>
			</div>
      <div className="project">
				<div className="title is-size-5">Booking Site</div>
				<p>Front-end design for an apartment booking website.</p>
        <div className='link-buttons'>
          <img className='project-icon' src={githubIcon} />
          <button className="button">Demo</button>
        </div>
			</div>
		</div>
	</div>
);

export default PinnedRepos;
