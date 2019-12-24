import React from 'react'

type Props = {
	header: React.ReactNode | string
	main: React.ReactNode | string
	aside: React.ReactNode | string
	footer: React.ReactNode | string
	children?: React.ReactNode
}
const MainLayout = ({ header, main, aside, footer }: Props) => {}

export default MainLayout
