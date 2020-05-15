import React from 'react';
import Layout from '../components/Layout';
import Post from '../components/Post';

import { graphql } from 'gatsby';

const Blog = ({ data }) => (
	<Layout>
		{/* <h1>Blog</h1> */}
		{data.allMarkdownRemark.edges.map((post) => {
			const { title, date, description, path } = post.node.frontmatter;

			return <Post title={title} date={date} description={description} key={`${date}__${title}`} path={path} />;
		})}
	</Layout>
);

export default Blog;

export const AllBlogsQuery = graphql`
	query AllBlogPosts {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						date
						title
						description
						path
					}
				}
			}
		}
	}
`;
