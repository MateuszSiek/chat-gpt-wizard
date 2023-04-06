import './Popup.css'
import {useEffect, useState} from 'react'
import {addNewPrompt, getPrompts, removePrompt, updatePrompt} from "../utils/local-storage";
import {PromptsAccordion} from "./Accordion";
import {Button} from "@mantine/core";
import {Prompt} from "../utils/prompts";

function App() {
    const [prompts, setPrompts] = useState<Prompt[]>([])

    useEffect(() => {
        getPrompts().then((prompts) => {
            setPrompts(prompts);
        });
    }, [])

    // const sentMessage = async () => {
    //     console.log('sentMessage sentMessagee');
    //     let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    //
    //     chrome.tabs.sendMessage(tab.id as number, {greeting: "hello"}, function (response) {
    //         console.log(response?.farewell);
    //     });
    // }
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
            <div className="editor-title">
                <h2>Edit your prompts</h2>
                <Button variant="outline" onClick={addPrompt} color="blue" >Add</Button>
            </div>
            {prompts?.length > 0 && <PromptsAccordion data={prompts} updatePrompt={update} removePrompt={remove}/>}
        </main>
    )
}

export default App

// chrome-extension://affnpgjnnjpbnbbeeffbnbgngapdlihf/popup.html