import { Draggable } from "@hello-pangea/dnd";
import { Button, Accordion, Box, Switch, TextInput, Textarea } from "@mantine/core";
import { useState, useEffect, ChangeEvent } from "react";
import { Prompt } from "../../utils/prompts";
import { Icon, IconButton } from "../Icon";

interface DeleteConfirmProps {
    onConfirm: () => void;
    onCancel: () => void;
  }
  
  function DeleteConfirm({onConfirm, onCancel}: DeleteConfirmProps) {
    return (
      <div className="accordion-item-delete-confirm">
        <span>Are you sure?</span>
        <span className="accordion-item-delete-confirm-buttons">
          <Button onClick={onConfirm} color="red" compact>
            Yes
          </Button>
          <Button onClick={onCancel} variant="light" compact>
            No
          </Button>
        </span>
      </div>
    );
  }
  
  interface AccordionItemProps extends Prompt {
    removePrompt: (id: string) => void;
    updatePrompt: (data: Partial<Prompt>) => void;
    idx: number;
  }
  
  export default function AccordionItem({
    id,
    active,
    idx,
    name,
    prompt,
    removePrompt,
    updatePrompt,
  }: AccordionItemProps) {
    const [currentPrompt, setCurrentPrompt] = useState(prompt);
    const [currentName, setCurrentName] = useState(name);
    const [edited, setEdited] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false);
  
    useEffect(() => {
      setEdited(prompt !== currentPrompt || name !== currentName);
    }, [prompt, currentPrompt, name, currentName]);
  
    const update = () => {
      updatePrompt({ id, active, name: currentName, prompt: currentPrompt });
    };
  
    const remove = () => {
      removePrompt(id);
    };
  
    const toggleActive = (e: ChangeEvent) => {
      e.stopPropagation();
      updatePrompt({ id, active: !active });
    };
  
    return (
      <Draggable key={id} index={idx} draggableId={id}>
        {(provided) => (
          <div
            className="accordion-item-draggable"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              className="accordion-item-drag-handler"
              {...provided.dragHandleProps}
            >
              <Icon name="menu-line-horizontal" alt="Drag" />
            </div>
            <Accordion.Item value={id}>
              <Box
                className="accordion-header-wrapper"
                sx={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                {deleteConfirm && (
                  <DeleteConfirm
                    onConfirm={remove}
                    onCancel={() => setDeleteConfirm(false)}
                  />
                )}
                <Accordion.Control>
                  <div className="accordion-title-content">
                    <Switch
                      checked={active}
                      onChange={toggleActive}
                      label={active ? "Active" : "Disabled"}
                    />
                    {name}
                  </div>
                </Accordion.Control>
                {!deleteConfirm && (
                  <div className="accordion-item-edit-actions">
                    {edited && (
                      <IconButton onClick={update} name="disk" alt="Save" />
                    )}
                    <IconButton
                      onClick={() => setDeleteConfirm(true)}
                      name="trash"
                      alt="Remove"
                      color="red"
                    />
                  </div>
                )}
              </Box>
              <Accordion.Panel>
                <TextInput
                  placeholder="Helpful assistant"
                  value={currentName}
                  onChange={(e) => setCurrentName(e.currentTarget.value)}
                  label="Prompt name"
                />
                <Textarea
                  placeholder="You are a helpful assistant..."
                  label="Prompt"
                  value={currentPrompt}
                  onChange={(e) => setCurrentPrompt(e.currentTarget.value)}
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
  