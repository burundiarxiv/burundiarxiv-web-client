interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = (props: ContainerProps) => (
    <div {...props} className={`${props.className} layout`}>
        {props.children}
    </div>
);
