import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect } from "vitest"
import App from "../App"

describe("App", () => {

  it("renders the page title", () => {
    render(<App />)

    const title = screen.getByText("Lista de Empresas")
    expect(title).toBeInTheDocument()
  })

  it("renders the search input", () => {
    render(<App />)

    const input = screen.getByPlaceholderText("Buscar empresa...")
    expect(input).toBeInTheDocument()
  })

  it("filters companies when the user types", async () => {
    render(<App />)

    const input = screen.getByPlaceholderText("Buscar empresa...")

    await userEvent.type(input, "nova")

    const result = await screen.findByText("NovaTech Solutions")
    expect(result).toBeInTheDocument()
  })

  it("shows only companies that match the search", async () => {
    render(<App />)

    const input = screen.getByPlaceholderText("Buscar empresa...")

    await userEvent.type(input, "nebula")

    const nebula = await screen.findByText("NebulaWorks")
    expect(nebula).toBeInTheDocument()
  })

  it("does not show results when the input is empty", () => {
    render(<App />)

    const items = screen.queryAllByRole("listitem")
    expect(items).toHaveLength(0)
  })

})