import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import ItemList from "../components/ItemList"

describe("ItemList", () => {

  const mockItems = [
    { id: 1, name: "NovaTech Solutions" },
    { id: 2, name: "BlueWave Systems" },
    { id: 3, name: "Orion Digital" }
  ]

  it("renders the  items list", () => {
    render(<ItemList items={mockItems} />)

    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument()
  })

  it("renders all company names", () => {
    render(<ItemList items={mockItems} />)

    expect(screen.getByText("NovaTech Solutions")).toBeInTheDocument()
    expect(screen.getByText("BlueWave Systems")).toBeInTheDocument()
    expect(screen.getByText("Orion Digital")).toBeInTheDocument()
  })

  it("renders the correct number of items", () => {
    render(<ItemList items={mockItems} />)

    const items = screen.getAllByRole("listitem")
    expect(items).toHaveLength(3)
  })

  it("does not break when the list is empty", () => {
    render(<ItemList items={[]} />)

    const items = screen.queryAllByRole("listitem")
    expect(items).toHaveLength(0)
  })

})