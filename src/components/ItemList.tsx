import React from "react"
import type { Item } from "../types/Firm"

interface ItemListProps {
  items: Item[]
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="border border-primaryText text-gray-100 rounded-md px-4 py-2
          hover:bg-primaryText transition"
        >
          <span className="text-gray-100">{item.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default ItemList