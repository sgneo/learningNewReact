import React from "react";


export interface ICardItem {
    title: string | null,
    imagePath: string | null,
    description?: string
}

function Card(props : ICardItem) {
    const { title, imagePath, description } = props;

    return (
        <div style={{
            width: "calc(50% - 4rem)",
            margin: "1rem",
            border: "1px solid #f3f3f3",
            padding: "0.5rem"
        }}>
            <img
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
            }}
                src={imagePath || ""}
                alt=""
            />

            <h2>{title}</h2>

            <p>{description}</p>
        </div>
    )
}

export default Card
