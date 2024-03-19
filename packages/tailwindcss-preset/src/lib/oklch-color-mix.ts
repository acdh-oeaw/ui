export function createColor(color: string) {
	return ({ opacityValue }) => {
		return `color-mix(in oklch, ${color} calc(${opacityValue} * 100%), transparent)`
	}
}

