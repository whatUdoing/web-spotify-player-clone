import React from 'react'

type Props = {
	header: React.ReactNode | string
	main: React.ReactNode | string
	aside: React.ReactNode | string
	footer: React.ReactNode | string
	children?: React.ReactNode
}
const MainLayout = ({ header, main, aside, footer }: Props) => {
	return (
		<div>
			{header && <header>{header}</header>}
			{aside && <aside>{aside}</aside>}
			{main && <main>{main}</main>}
			{footer && <footer>{footer}</footer>}
		</div>
	)
}

export default MainLayout
