import React from 'react';
import { Link } from 'gatsby';

import './Nav.css'

import { Navbar } from 'rbx';

const Nav = () => (
	<Navbar>
		<Navbar.Brand>
			<Navbar.Item href="#">
				<h2 className="my-title is-size-4 has-text-weight-bold">
					<span>
						johnmichael<span className="green">.</span>dev
					</span>
				</h2>
			</Navbar.Item>
			<Navbar.Burger />
		</Navbar.Brand>
		<Navbar.Menu>
			<Navbar.Segment align="start">
      <Navbar.Item>
					<Link to="/">Home</Link>
				</Navbar.Item>
				<Navbar.Item>
					<Link to="/blog">Blog</Link>
				</Navbar.Item>
				<Navbar.Item>
					<Link to="/contact">Contact</Link>
				</Navbar.Item>
      </Navbar.Segment>

			<Navbar.Segment align="end">


			</Navbar.Segment>
		</Navbar.Menu>
	</Navbar>
);

export default Nav;
