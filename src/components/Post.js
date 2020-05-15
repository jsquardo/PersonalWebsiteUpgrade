import React from 'react';
import { Link } from 'gatsby';

import './Post.css';

const Post = ({ title, author, date, description, path }) => (
	<div className="post">
		<h3 className="title blog-title is-size-3">{title}</h3>
		<p className="post-description">{description}</p>
		<Link to={path}>Read more</Link>
	</div>
);

export default Post;
