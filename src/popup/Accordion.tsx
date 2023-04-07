import './Accordion.css'
import {
    Accordion,
    Switch,
    Textarea,
    Box,
    TextInput,
    Button
} from '@mantine/core';
import {ChangeEvent, useEffect, useState} from "react";
import {DragDropContext, Draggable, Droppable, DropResult} from "@hello-pangea/dnd";
import {Prompt} from "../utils/prompts";
import {Icon, IconButton} from "./Icon";

interface AccordionProps {
    data: Prompt[];
    removePrompt: (id: string) => void;
    updatePrompt: (data: any) => void;
    setPrompts: (data: any) => void;
}

interface AccordionItemProps extends Prompt {
    removePrompt: (id: string) => void;
    updatePrompt: (data: any) => void;
    idx: number;
}

function DeleteConfirm({onConfirm, onCancel}: { onConfirm: () => void, onCancel: () => void }) {
    return (
        <div className="accordion-item-delete-confirm">
            <span>Are you sure?</span>
            <span className="accordion-item-delete-confirm-buttons">
                <Button onClick={onConfirm} color="red" compact>Yes</Button>
                <Button onClick={onCancel} variant="light" compact>No</Button>
            </span>
        </div>
    )
}

function AccordionItem({id, active, idx, name, prompt, removePrompt, updatePrompt}: AccordionItemProps) {
    const [currentPrompt, setCurrentPrompt] = useState(prompt);
    const [currentName, setCurrentName] = useState(name);
    const [edited, setEdited] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false);

    useEffect(() => {
        setEdited(prompt !== currentPrompt || name !== currentName);
    }, [prompt, currentPrompt, name, currentName])


    const update = () => {
        updatePrompt({id, active, name: currentName, prompt: currentPrompt});
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
                        <Icon name="menu-line-horizontal" alt="Drag"/>
                    </div>
                    <Accordion.Item value={id}>
                        <Box className="accordion-header-wrapper"
                             sx={{display: 'flex', alignItems: 'center', gap: "12px"}}>
                            {deleteConfirm &&
                                <DeleteConfirm onConfirm={remove} onCancel={() => setDeleteConfirm(false)}/>}
                            <Accordion.Control>
                                <div className="accordion-title-content">
                                    <Switch checked={active} onChange={toggleActive}
                                            label={active ? "Active" : "Disabled"}/>
                                    {name}
                                </div>
                            </Accordion.Control>
                            {!deleteConfirm &&
                                <div className="accordion-item-edit-actions">
                                    {edited && <IconButton onClick={update} name="disk" alt="Save"/>}
                                    <IconButton onClick={() => setDeleteConfirm(true)} name="trash" alt="Remove"
                                                color="red"/>
                                </div>
                            }
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

function changeOrder<T>(array: T[], from: number, to: number) {
    const newArray = [...array];
    const [removed] = newArray.splice(from, 1);
    newArray.splice(to, 0, removed);
    return newArray;
}

export function PromptsAccordion({data, removePrompt, updatePrompt, setPrompts}: AccordionProps) {
    const handleDragEnd = ({destination, source}: DropResult) => {
        if (destination?.index === source.index) return;
        setPrompts(changeOrder(data, source.index, destination?.index || 0));
    }

    const items = data.map((props, idx) => {
        return <AccordionItem {...props} idx={idx} removePrompt={removePrompt} updatePrompt={updatePrompt}
                              key={props.id}/>;
    });

    return (
        <Accordion
            chevronPosition="left"
            chevronSize={50}
            variant="separated"
            className="prompts-accordion"
        >
            <DragDropContext onDragEnd={handleDragEnd}>
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