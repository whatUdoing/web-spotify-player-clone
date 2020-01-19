export const converMsToMin = (value: number) => {
	return (value / 1000 / 60)
		.toFixed(2)
		.split('.')
		.join(':')
}
