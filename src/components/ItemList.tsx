import React from "react"
import type { Item } from "../types/Firm"

interface ItemListProps {
  items: Item[]
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  if (items.length === 0) {
    return <p>Nenhum item encontrado.</p>
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default ItemList