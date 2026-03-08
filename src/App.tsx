import React, { useState, useEffect } from "react"
import { items as initialItems } from "./data/items"
import type { Item } from "./types/Firm"
import SearchInput from "./components/SearchInput"
import ItemList from "./components/ItemList"

const App: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("")
  const [filteredItems, setFilteredItems] = useState<Item[]>(initialItems)

  useEffect(() => {
    const filtered = initialItems.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )

    setFilteredItems(filtered)
  }, [searchText])

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Empresas</h1>

      <SearchInput value={searchText} onChange={setSearchText} />

      <ItemList items={filteredItems} />
    </div>
  )
}

export default App