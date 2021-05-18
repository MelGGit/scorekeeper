import { add } from './math'

describe('math', () => {
  describe('add', () => {
    it('returns 5 with arguments 2 and 3', () => {
      const result = add(2, 3)
      expect(result).toBe(5)
    })

    it('return 0 with arguments 0 and 0', () => {
      const result = add(0, 0)
      expect(result).toBe(0)
    })

    it('return 5 with arguments 5', () => {
      expect(add(5)).toBe(5)
    })

    it('return 6 with arguments 1,2,3', () => {
      expect(add(1, 2, 3)).toBe(6)
    })
  })
})
