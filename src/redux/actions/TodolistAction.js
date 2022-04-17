import { CHANGE_THEME } from '../constants/TodolistConst'

export const changeThemeAction = (idTheme) => {
    return {
        type: CHANGE_THEME,
        id: idTheme,
    }
}