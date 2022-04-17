import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
.scrollBarStyle::-webkit-scrollbar {
    width: 4px;
    height: 2px;
    background-color: hsla(0, 0%, 96.5%, 0.5);
}
.scrollBarStyle::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #9b9b9b;
}
.scrollBarStyle::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(148, 148, 148, 0.3);
    background-color: #f5f5f5;
}
`