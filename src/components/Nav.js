import React from "react"
import { Link } from "gatsby"

import { Navbar } from "rbx"

const Nav = () => (
  <Navbar>
    <Navbar.Brand>
      <Navbar.Item href="#">
        <h2 className="is-size-4 has-text-weight-bold">John Michael</h2>
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Segment align="start"></Navbar.Segment>

      <Navbar.Segment align="end">
        <Navbar.Item>
          <Link to="/">Home</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to="/blog">Blog</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to="/contact">Contact</Link>
        </Navbar.Item>

        <Navbar.Item dropdown>
          <Navbar.Link>More</Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item>About</Navbar.Item>
            <Navbar.Item>Jobs</Navbar.Item>
            <Navbar.Item>Contact</Navbar.Item>
            <Navbar.Divider />
            <Navbar.Item>Report an issue</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar.Segment>
    </Navbar.Menu>
  </Navbar>
)

export default Nav
