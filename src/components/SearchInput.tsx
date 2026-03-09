import React from "react"
import { FiSearch } from "react-icons/fi"

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4 relative">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-primaryText text-sm" />
      <input
        type="text"
        placeholder="Buscar empresa..."
        aria-label="Buscar empresa"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
        w-full
        border border-primaryText
        placeholder-gray-100
        text-gray-100
        rounded-md
        pl-9 pr-3 py-2
        text-sm
        focus:outline-none
        focus:ring-2
        focus:ring-primaryText
        focus:border-transparent
        transition
        "
      />
    </div>
  )
}

export default SearchInput