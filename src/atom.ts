import { atom } from "recoil";

export const mineralState = atom({
    key: "mineralState",
    default: 150,
});

export const gasState = atom({
    key: "gasState",
    default: 150,
});
