import React, { useState, useEffect } from "react"
import { items as initialItems } from "./data/firms"
import type { Item } from "./types/Firm"
import SearchInput from "./components/SearchInput"
import ItemList from "./components/ItemList"

const App: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("")
  const [filteredItems, setFilteredItems] = useState<Item[]>([])

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredItems([])
      return
    }

    const filtered = initialItems.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )

    setFilteredItems(filtered)
  }, [searchText])

    return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-4xl bg-primaryBg rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-normal text-primaryText mb-6">
          Lista de Empresas
        </h1>

        <SearchInput value={searchText} onChange={setSearchText} />

        <ItemList items={filteredItems} />
      </div>
    </div>
  )

}

export default App