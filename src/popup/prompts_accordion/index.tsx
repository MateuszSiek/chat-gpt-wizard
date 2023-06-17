import "./Accordion.css";
import {Accordion} from "@mantine/core";
import {
  DragDropContext,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { Prompt } from "../../utils/prompts";
import AccordionItem from "./AccordionItem";

function changeOrder<T>(array: T[], from: number, to: number) {
  const newArray = [...array];
  const [removed] = newArray.splice(from, 1);
  newArray.splice(to, 0, removed);
  return newArray;
}

interface AccordionProps {
  data: Prompt[];
  removePrompt: (id: string) => void;
  updatePrompt: (data: Partial<Prompt>) => void;
  setPrompts: (data: Prompt[]) => void;
}

export function PromptsAccordion({
  data,
  removePrompt,
  updatePrompt,
  setPrompts,
}: AccordionProps) {
  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (destination?.index === source.index) return;
    setPrompts(changeOrder(data, source.index, destination?.index || 0));
  };

  const items = data.map((props, idx) => {
    return (
      <AccordionItem
        {...props}
        idx={idx}
        removePrompt={removePrompt}
        updatePrompt={updatePrompt}
        key={props.id}
      />
    );
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
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Accordion>
  );
}
