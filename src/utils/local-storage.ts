import {getBucket} from '@extend-chrome/storage'


export interface Prompt {
    id: string;
    name: string;
    prompt: string;
    active: boolean;
}

const DefaultPrompts = [
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

const EmptyPrompt = {
    "id": "",
    "name": "Helpful assistant",
    "prompt": "You are a helpful assistant...",
    "active": true
}


const getRandomId = () => Math.floor(Math.random() * 1000000000).toString();

export interface Store {
    prompts: Prompt[]
}

export const localStorage = getBucket<Store>('store')

export async function initialiseLocalStorage() {
    console.log('initialiseLocalStorage');
    return localStorage.set({prompts: DefaultPrompts})
}

export async function getPrompts(): Promise<Prompt[]> {
    return localStorage.get('prompts').then(({prompts}) => prompts)
}

export async function addNewPrompt() {
    const prompts = await getPrompts();
    const newPrompt = {...EmptyPrompt, id: getRandomId()};

    return localStorage.set({prompts: [...prompts, newPrompt]}).then(({prompts}) => prompts)
}

export async function removePrompt(id: string) {
    const prompts = await getPrompts();
    const newPrompts = prompts.filter(prompt => prompt.id !== id);

    return localStorage.set({prompts: newPrompts}).then(({prompts}) => prompts);
}
export async function updatePrompt(data: Partial<Prompt>): Promise<Prompt[]> {
    const prompts = await getPrompts();
    const newPrompts = prompts.map(prompt => {
        if (prompt.id === data.id) {
            return {...prompt, ...data}
        }
        return prompt
    });

    return localStorage.set({prompts: newPrompts}).then(({prompts}) => prompts);
}