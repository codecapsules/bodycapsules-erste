import { evenOrOdd } from './playground'

describe("basic math", () => {
  it("basic addition", () => {
    expect(1 + 1).toBe(2)
  })

  it("basic soustraction", () => {
    expect(5 - 3).toBe(2)
  })

  describe("evenOrOdd", () => {
    describe("when the number is even", () => {
      it("result is even", () => {
        expect(evenOrOdd(4)).toBe("even")
      })
    })
    describe("when the number is odd", () => {
      it("result is odd", () => {
        expect(evenOrOdd(5)).toBe("odd")
      })
    })
  })
})