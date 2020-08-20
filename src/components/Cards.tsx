import React from "react";

interface ICardsData {
    title: string,
    renderItems: Function
}

function Cards(props: ICardsData) {
    const {title, renderItems} = props;

    return (
        <>
            <h2>{title}</h2>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                {renderItems()}
            </div>

        </>
    )
}

export default Cards
