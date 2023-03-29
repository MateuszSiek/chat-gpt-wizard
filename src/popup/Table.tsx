import {createStyles, Checkbox, ScrollArea, Accordion, ThemeIcon} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

interface TableSelectionProps {
    data: { prompt: string; name: string; active: boolean; id: string }[];
}

export function TableSelection({ data }: TableSelectionProps) {
    const { classes, cx } = useStyles();

    const items = data.map((item) => {
        return (
            <Accordion.Item value={item.id} className={cx({ [classes.rowSelected]: item.active })}>
                <Accordion.Control>
                    <Checkbox
                        checked={item.active}
                        transitionDuration={0}
                        onChange={() => {}}
                    />
                    {item.name}
                </Accordion.Control>
                <Accordion.Panel>{item.prompt}</Accordion.Panel>
            </Accordion.Item>
        );
    });

    return (
        <ScrollArea>
            <Accordion
                chevronPosition="right"
                defaultValue="reset-password"
                chevronSize={50}
                variant="separated"
                disableChevronRotation
                chevron={
                    <ThemeIcon radius="xl" size={32}>
                        +
                    </ThemeIcon>
                }
            >
                {items}
            </Accordion>
        </ScrollArea>
    );
}