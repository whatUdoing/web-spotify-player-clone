export const trimString = (maxLength: number) => (value: string) => {
	return value.length > maxLength ? `${value.slice(0, maxLength)}...` : value
}
