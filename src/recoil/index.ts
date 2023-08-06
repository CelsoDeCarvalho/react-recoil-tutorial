import { atom } from "recoil";
//👇 My atom state with a theme background color 
// By default it start with light theme
export const backgroundColor = atom({
    key: "background-color",
    default: "light"
})