import { useState } from "react";

const ToDo = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Order grocery" },
        { id: 2, text: "Pay utilities bill" },
        { id: 3, text: "Take out trash" },
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);

    const onMyChange = (e) => setInputText(e.target.value);

    const onMyClick = () => {
        const nextItems = items.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId + 1);
        setItems(nextItems);
        setInputText("");
    };

    const onMyRemove = (id) => {
        const nextItems = items.filter((item) => item.id !== id);
        setItems(nextItems);
    };

    const itemsList = items.map((item) => (
        <li
            key={item.id}
            onDoubleClick={() => {
                onMyRemove(item.id);
            }}
        >
            {item.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onMyChange} />
            <button onClick={onMyClick}>Add</button>
            <h4>Double click on items to delete them</h4>
            <ul>{itemsList}</ul>
        </>
    );
};

export default ToDo;
