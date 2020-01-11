import React, { ReactNode } from 'react'
import { ThemeProvider } from 'emotion-theming'

const theme = {
	theme1: '#000000',
	theme2: '#FFFFFF',
	theme3: '#C6CEFF',
	theme4: '#2039CC',
	theme5: '#192DA1',
	theme6: '#111E6C',
	theme7: '#0C154A',
	theme8: '#080E33'
}

type Props = {
	children: ReactNode
}
const ThemeManager = ({ children }: Props) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeManager
