import React from 'react'

type Props = {
	isSidebarVisible: boolean
	header?: React.ReactNode | string
	main?: React.ReactNode | string
	aside?: React.ReactNode | string
	footer?: React.ReactNode | string
	children?: React.ReactNode | string
}
const MainLayout = ({
	header,
	main,
	aside,
	footer,
	isSidebarVisible
}: Props) => {
	return (
		<div className="ui">
			{header && <header className="ui__header">{header}</header>}

			{aside && (
				<aside
					className={`ui__aside ${
						isSidebarVisible ? 'ui__aside_open' : ''
					}`}
				>
					{aside}
				</aside>
			)}

			{main && (
				<main className="ui__main">
					<div className="ui__box">{main}</div>
				</main>
			)}

			{footer && <footer className="ui__footer p-all-2">{footer}</footer>}
		</div>
	)
}

export default MainLayout
