const React = require('react')
const Def = require('./default')

function error404 () {
	render (
		<Def>
			<main>
				<h1>404: Page Not Found</h1>
				<p>Oh well, try again.</p>
			</main>
		</Def>
	)
}

module.exports = error404