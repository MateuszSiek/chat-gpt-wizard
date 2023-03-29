import './accordion.css'
import {
    ScrollArea,
    Accordion,
    Button,
    Switch,
    Textarea,
    Box,
    TextInput
} from '@mantine/core';
import {ChangeEvent, useEffect, useState} from "react";
import {Prompt} from "../utils/local-storage";

interface AccordionProps {
    data: Prompt[];
    removePrompt: (id: string) => void;
    updatePrompt: (data: any) => void;
}

interface AccordionItemProps extends Prompt {
    removePrompt: (id: string) => void;
    updatePrompt: (data: any) => void;
}

function AccordionItem({id, active, name, prompt, removePrompt, updatePrompt}: AccordionItemProps) {
    const [currentPrompt, setCurrentPrompt] = useState(prompt);
    const [currentName, setCurrentName] = useState(name);
    const [edited, setEdited] = useState(false);

    useEffect(() => {
        setEdited(prompt !== currentPrompt || name !== currentName);
    }, [prompt, currentPrompt, name, currentName])


    const update = () => {
        updatePrompt({id, active, name: currentName, prompt: currentPrompt});
        setEdited(false);
    }

    const remove = () => {
        removePrompt(id);
    }

    const toggleActive = (e: ChangeEvent) => {
        e.stopPropagation();
        updatePrompt({id, active: !active});
    }

    return (
        <Accordion.Item key={id} value={id}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: "12px"}}>
                <Accordion.Control>
                    <div className="accordion-title-content">
                        <Switch checked={active} onChange={toggleActive} label={active ? "Active" : "Disabled"}/>
                        {name}
                    </div>
                </Accordion.Control>
                {edited && <Button variant="filled" onClick={update} compact>Save</Button>}
                <Button variant="outline" onClick={remove} color="red" compact>Remove</Button>
            </Box>
            <Accordion.Panel>
                <TextInput
                    placeholder="Helpful assistant"
                    value={currentName}
                    onChange={e => setCurrentName(e.currentTarget.value)}
                    label="Prompt name"
                />
                <Textarea
                    placeholder="You are a helpful assistant..."
                    label="Prompt"
                    value={currentPrompt}
                    onChange={e => setCurrentPrompt(e.currentTarget.value)}
                    minRows={4}
                    maxRows={8}
                    autosize
                    required
                />
            </Accordion.Panel>
        </Accordion.Item>
    );
}

export function PromptsAccordion({data, removePrompt, updatePrompt}: AccordionProps) {

    const items = data.map((props) => {
        return <AccordionItem {...props} removePrompt={removePrompt} updatePrompt={updatePrompt} key={props.id}/>;
    });

    return (
        <ScrollArea>
            <Accordion
                chevronPosition="left"
                chevronSize={50}
                variant="separated"
                className="prompts-accordion"
            >
                {items}
            </Accordion>
        </ScrollArea>
    );
}