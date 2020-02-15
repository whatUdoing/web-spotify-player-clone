export const SHOW_SIDEBAR = '[ ui ] SHOW_SIDEBAR'
export const HIDE_SIDEBAR = '[ ui ] HIDE_SIDEBAR'

export type IShowSidebar = {
	type: typeof SHOW_SIDEBAR
}

export type IHideSidebar = {
	type: typeof HIDE_SIDEBAR
}

export type UiActionsType = IShowSidebar | IHideSidebar
