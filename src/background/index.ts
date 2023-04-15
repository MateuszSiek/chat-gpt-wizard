import Browser from "webextension-polyfill";
import { initialiseLocalStorage } from "../utils/local-storage";

console.info("chrome-ext template-react-ts background script2456");

// TODO - handle updates, to not initialise but to update the local storage
Browser.runtime.onInstalled.addListener(async () => initialiseLocalStorage());

export {};
