import React from "react"

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar item..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchInput