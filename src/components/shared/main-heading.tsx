type Props = {
    children: React.ReactNode;
};

export default function MainHeading({ children }: Props) {
    return (
        <h1 className="font-bold text-3xl lg:text-6xl text-center tracking-tight">{children}</h1>
    );
}
