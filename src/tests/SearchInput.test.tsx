import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import SearchInput from "../components/SearchInput"

describe("SearchInput", () => {

  it("renders the search input", () => {
    render(<SearchInput value="" onChange={() => {}} />)

    const input = screen.getByPlaceholderText("Buscar empresa...")
    expect(input).toBeInTheDocument()
  })

  it("displays the value passed via props", () => {
    render(<SearchInput value="Skyline Dynamics" onChange={() => {}} />)

    const input = screen.getByDisplayValue("Skyline Dynamics")
    expect(input).toBeInTheDocument()
  })

  it("calls onChange when the user types", async () => {
    const handleChange = vi.fn()

    render(<SearchInput value="" onChange={handleChange} />)

    const input = screen.getByPlaceholderText("Buscar empresa...")

    await userEvent.type(input, "Quantum Bridge")

    expect(handleChange).toHaveBeenCalled()
  })

  it("has accessibility via aria-label", () => {
    render(<SearchInput value="" onChange={() => {}} />)

    const input = screen.getByLabelText("Buscar empresa")
    expect(input).toBeInTheDocument()
  })

})