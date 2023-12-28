export type JSONdecoded = string | number | boolean | object | Array<JSONdecoded>

export const darkModeOptions = ['dark', 'light', 'system'] as const
export type DarkModeOption = (typeof darkModeOptions)[number]

export interface IconProps {
	size?: number
}
