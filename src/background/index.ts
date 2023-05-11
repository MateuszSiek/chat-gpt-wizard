import Browser from "webextension-polyfill";
import { initialiseLocalStorage } from "../utils/local-storage";

console.log("background script loaded");

// TODO - handle updates, to not initialise but to update the local storage
Browser.runtime.onInstalled.addListener(async () => initialiseLocalStorage());

export {};
