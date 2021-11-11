import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Items } from "./apiClient/Items";
import { Item } from "./apiClient/data-contracts";

const api = new Items({
  baseUrl: "http://localhost:5000/api/v1",
});

function App(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      const res = await api.getItemsApi();
      setItems(res.data);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListItems items={items} />
        <AddItem items={items} setItems={setItems} />
      </header>
    </div>
  );
}

function ListItems(props: { items: Item[] }): JSX.Element {
  return (
    <>
      <h3>List of items</h3>
      {props.items.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            alignItems: "center",
            border: "thin solid gray",
            padding: "1rem",
          }}
        >
          <div>
            {item.name} (#{item.id})
          </div>
          <div>
            {item.details?.map((detail, idx2) => (
              <div key={idx2}>
                {detail.name} (#{detail.id})
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function AddItem(props: {
  items: Item[];
  setItems: (items: Item[]) => void;
}): JSX.Element {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<number>();

  return (
    <div>
      <input
        placeholder="id of the new item"
        onChange={(event) => {
          setId(parseInt(event.target.value));
        }}
      />
      <input
        placeholder="name of the new item"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={async () => {
          const item: Item = {
            id,
            name,
          };
          await api.postItemsApi(item);
          props.setItems([...props.items, item]);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
