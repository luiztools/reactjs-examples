type Props = {
    title: string;
}

function Header(props: Props) {
    return (
        <>
            <h1 className="h1-vermelho">
                {props.title}
            </h1>
        </>
    )
}

export default Header;