import './Popup.css'
import {useEffect, useState} from 'react'
import {addNewPrompt, getPrompts, removePrompt, Prompt, updatePrompt} from "../utils/local-storage";
import {PromptsAccordion} from "./Accordion";

function App() {
    const [prompts, setPrompts] = useState<Prompt[]>([])

    useEffect(() => {
        getPrompts().then((prompts) => {
            setPrompts(prompts);
        });
    }, [])

    const sentMessage = async () => {
        console.log('sentMessage sentMessagee');
        let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

        chrome.tabs.sendMessage(tab.id as number, {greeting: "hello"}, function (response) {
            console.log(response?.farewell);
        });
    }
    const addPrompt = () => {
        addNewPrompt().then((prompts) => {
            setPrompts(prompts);
        });
    }
    const remove = (id: string) => {
        removePrompt(id).then((prompts) => {
            setPrompts(prompts);
        })
    }

    const update = (data: Partial<Prompt>) => {
        updatePrompt(data).then((prompts) => {
            setPrompts(prompts);
        })
    }

    return (
        <main>
            <h1>ChatGpt Wizard 🪄</h1>
            <h6>v 0.0.0</h6>
            <h2>Edit your prompts</h2>
            {prompts && <PromptsAccordion data={prompts} updatePrompt={update} removePrompt={remove}/>}
            <button onClick={addPrompt}>Test</button>
        </main>
    )
}

export default App

// chrome-extension://affnpgjnnjpbnbbeeffbnbgngapdlihf/popup.html