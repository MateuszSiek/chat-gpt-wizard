import './accordion.css'
import {
    Accordion,
    Button,
    Switch,
    Textarea,
    Box,
    TextInput
} from '@mantine/core';
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {DragDropContext, Draggable, Droppable} from "@hello-pangea/dnd";
import {Prompt} from "../utils/prompts";
import {useListState} from '@mantine/hooks';

interface AccordionProps {
    data: Prompt[];
    removePrompt: (id: string) => void;
    updatePrompt: (data: any) => void;
}

interface AccordionItemProps extends Prompt {
    removePrompt: (id: string) => void;
    updatePrompt: (data: any) => void;
    idx: number;
}

function AccordionItem({id, active, idx, name, prompt, removePrompt, updatePrompt}: AccordionItemProps) {
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
        <Draggable key={id} index={idx} draggableId={id}>
            {(provided, snapshot) => (
                <div className="accordion-item-draggable" ref={provided.innerRef} {...provided.draggableProps}>
                    <div className="accordion-item-drag-handler" {...provided.dragHandleProps}>
                        <img src="icons/menu-line-horizontal.svg" alt="Drag"/>
                    </div>
                    <Accordion.Item value={id}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: "12px"}}>
                            <Accordion.Control>
                                <div className="accordion-title-content">
                                    <Switch checked={active} onChange={toggleActive}
                                            label={active ? "Active" : "Disabled"}/>
                                    {name}
                                </div>
                            </Accordion.Control>
                            <div className="accordion-item-edit-actions">
                                {edited && <Button className="icon-button" variant="subtle" onClick={update} compact>
                                    <img src="icons/disk.svg" alt="Save"/>
                                </Button>}
                                <Button className="icon-button" variant="subtle" onClick={remove} color="red" compact>
                                    <img src="icons/trash.svg" alt="Remove"/>
                                </Button>
                            </div>
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
                </div>
            )}
        </Draggable>
    );
}

export function PromptsAccordion({data, removePrompt, updatePrompt}: AccordionProps) {
    const [state, handlers] = useListState(data);

    const items = state.map((props, idx) => {
        return <AccordionItem {...props} idx={idx} removePrompt={removePrompt} updatePrompt={updatePrompt}
                              key={props.id}/>;
    });

    const isFirstRun = useRef(true);
    useEffect (() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        console.log("Effect was run", state);
    }, [state]);


    return (
        <Accordion
            chevronPosition="left"
            chevronSize={50}
            variant="separated"
            className="prompts-accordion"
        >
            <DragDropContext
                onDragEnd={({destination, source}) => {
                    console.log("REORDER",source, destination);
                    handlers.reorder({from: source.index, to: destination?.index || 0})
                }
                }
            >
                <Droppable droppableId="dnd-list" direction="vertical">
                    {(provided: any) => (
                        <div  {...provided.droppableProps} ref={provided.innerRef}>

                            {items}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </Accordion>
    );
}