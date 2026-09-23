interface Props {
    children: React.ReactNode;
}

export default function Container({ children }: Props) {
    return <div className="flex flex-col bg-white/2 m-auto max-w-7xl min-h-screen">{children}</div>;
}
