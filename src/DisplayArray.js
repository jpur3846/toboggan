const DisplayArray = ({ array }) => {
    return (
        <>
            {array.map((subArray) => {
                return (<p>{subArray}</p>);
            })}
        </>
    );
}

export default DisplayArray;