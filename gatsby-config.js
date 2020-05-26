module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `fonts`,
				path: `${__dirname}/src/fonts`
			}
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GITHUB",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer 0699211bd9c128f98b71e62a13771b19a975355b`
        }
        // 0699211bd9c128f98b71e62a13771b19a975355b
      }
    }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
