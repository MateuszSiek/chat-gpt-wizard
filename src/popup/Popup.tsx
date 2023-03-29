import {useState} from 'react'
import './Popup.css'
import {localStorage} from "../utils/local-storage";
import {TableSelection} from "./Table";

const MockData = [
    {
        "id": "1",
        "name": "English -> Polish",
        "prompt": "You are a translator between English and Polish. For input text in English, you should output the translation into Polish.",
        "active": true
    },
    {
        "id": "2",
        "name": "Unit test writer",
        "prompt": "Please write tests for given code.",
        "active": true
    },
    {
        "id": "3",
        "name": "Unit test writer 2",
        "prompt": "Please write tests for given code.",
        "active": false
    },
    {
        "id": "4",
        "name": "Unit test writer 3",
        "prompt": "Please write tests for given code.",
        "active": false
    },
]

function App() {
    const [crx, setCrx] = useState('create-chrome-ext')

    const sentMessage = async () => {
        console.log('sentMessage sentMessage');
        let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

        let promptsData = await localStorage.get('promptsData');

        localStorage.set({ a: 'abcd' }).then(({ a, b }) => {
            // Values were set
            // a === 123
            // b === true
            console.log('SET BUTOSDASDSA');
        });
        chrome.tabs.sendMessage(tab.id as number, {greeting: "hello"}, function (response) {
            console.log(response?.farewell);
        });

    }
    return (
        <main>
            <h3>Popup Pageexs!</h3>

            <h6>v 0.0.0</h6>
            <TableSelection data={MockData}/>
            <button onClick={sentMessage}>Test</button>
        </main>
    )
}

export default App

// chrome-extension://affnpgjnnjpbnbbeeffbnbgngapdlihf/popup.html