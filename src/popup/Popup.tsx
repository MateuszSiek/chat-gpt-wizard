import './Popup.css'
import {useEffect, useState} from 'react'
import {addNewPrompt, getPrompts, removePrompt, setPrompts, updatePrompt} from "../utils/local-storage";
import {PromptsAccordion} from "./Accordion";
import {Button} from "@mantine/core";
import {Prompt} from "../utils/prompts";

function App() {
    const [promptsState, setPromptsState] = useState<Prompt[]>([])

    useEffect(() => {
        getPrompts().then((prompts) => {
            setPromptsState(prompts);
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
            setPromptsState(prompts);
        });
    }
    const remove = (id: string) => {
        removePrompt(id).then((prompts) => {
            setPromptsState(prompts);
        })
    }

    const update = (data: Partial<Prompt>) => {
        updatePrompt(data).then((prompts) => {
            setPromptsState(prompts);
        })
    }

    const set = (data: Prompt[]) => {
        setPromptsState(data);
        setPrompts(data).then(() => {
        });
    }

    return (
        <main>
            <h1>ChatGpt Wizard 🪄</h1>
            <h6>v 0.0.0</h6>
            <div className="editor-title">
                <h2>Edit your prompts</h2>
                <Button variant="outline" onClick={addPrompt} color="blue">Add</Button>
            </div>
            {promptsState?.length > 0 &&
                <PromptsAccordion data={promptsState} updatePrompt={update} removePrompt={remove} setPrompts={set}/>}
        </main>
    )
}

export default App

// chrome-extension://affnpgjnnjpbnbbeeffbnbgngapdlihf/popup.html