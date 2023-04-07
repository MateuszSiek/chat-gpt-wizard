import './Icon.css'
import {Button} from "@mantine/core";


interface IconProps {
    name: string,
    alt: string,
}

interface IconButtonProps extends IconProps {
    onClick: () => void,
    color?: string
}

export function Icon({name, alt}: IconProps) {
    const src = `icons/${name}.svg`;
    return (
        <img src={src} alt={alt}/>
    )
}

export function IconButton({onClick, name, alt, color}: IconButtonProps) {
    return (
        <Button className="icon-button" variant="subtle" color={color} onClick={onClick} compact>
            <Icon name={name} alt={alt}/>
        </Button>
    )
}
