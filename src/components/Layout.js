import React from "react"
import PropTypes from "prop-types"

import Nav from "./Nav"

const Layout = ({ children }) => (
  <>
    <div className="container">
      <Nav />
      <main>{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
