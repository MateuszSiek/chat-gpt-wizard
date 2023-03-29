import Browser from 'webextension-polyfill';
import {initialiseLocalStorage} from "../utils/local-storage";

console.info('chrome-ext template-react-ts background script2456')

Browser.runtime.onInstalled.addListener(async () => initialiseLocalStorage())

Browser.runtime.onStartup.addListener(async () => initialiseLocalStorage()) // TEMP

export {}
