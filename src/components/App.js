import { useState } from "react";
// import Flashcards1 from "./Challenges/Flash  cards1";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import AccordionCompv2 from "../Challenges/AccordionCompv2";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }
  function handleDeleteItem(id) {
    setItems((i) => i.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((i) =>
      i.map((item) => {
        if (item.id !== id) return item;
        return { ...item, packed: !item.packed };
      })
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (!confirmed) return;
    setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
      {/* <Flashcards1 /> */}
      <AccordionCompv2 />
    </div>
  );
}
