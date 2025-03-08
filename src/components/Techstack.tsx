interface TechstackProps {
    label: string;
    ic: string
}

export default function Techstack({ label, ic }: TechstackProps) {
    return (
        <span className="tech-item">
            <img className="tech-icon" src={`icons/${ic}.png`} />
            {label}
        </span>
    );
}