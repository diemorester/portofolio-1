function Menu(props) {
    return (
        <div className="text-neutral-800 hover:scale-150 duration-150 cursor-default">
            <p>{props.children}</p>
        </div>
    )
}

export default Menu