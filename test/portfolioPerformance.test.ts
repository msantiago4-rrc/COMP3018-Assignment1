import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("Should return the correct string when percentChange is > 30", () => {
        // ARRANGE: Set up conditions
        const initialInvestment = 10000;
        const currentValue = 16000

        // ACT: Call the function
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT: Verify the results
        expect(result).not.toBeNull();
        expect(result?.percentageChange).toBe(60)
        expect(result?.performanceSummary).toBe("Excellent performance! Your investments are doing great.")
    })
})

describe("calculatePortfolioPerformance", () => {
    it("Should return the correct string when percentChange is < 30 & >= 10 ", () => {
        // ARRANGE: Set up conditions
        const initialInvestment = 10000;
        const currentValue = 12999.9

        // ACT: Call the function
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT: Verify the results
        expect(result).not.toBeNull();
        expect(result?.percentageChange).toBe(29.999)
        expect(result?.performanceSummary).toBe("Solid gain. Keep monitoring your investments")
    })
})

describe("calculatePortfolioPerformance", () => {
    it("Should return the correct string when percentChange is 0.", () => {
        // ARRANGE: Set up conditions
        const initialInvestment = 10000;
        const currentValue = 10000;

        // ACT: Call the function
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT: Verify the results
        expect(result).not.toBeNull();
        expect(result?.percentageChange).toBe(0)
        expect(result?.performanceSummary).toBe("No change. Your portfolio is holding steady.")
    })
})

describe("calculatePortfolioPerformance", () => {
    it("Should return the correct string when percentChange is in between 0 and -10", () => {
        // ARRANGE: Set up conditions
        const initialInvestment = 10000;
        const currentValue = 9000;

        // ACT: Call the function
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT: Verify the results
        expect(result).not.toBeNull();
        expect(result?.percentageChange).toBe(-10)
        expect(result?.performanceSummary).toBe("Minor loss. Stay calm and review your options.")
    })
})

describe("calculatePortfolioPerformance", () => {
    it("Should return the correct string when percentChange is less than -10", () => {
        // ARRANGE: Set up conditions
        const initialInvestment = 10000;
        const currentValue = 1000;

        // ACT: Call the function
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT: Verify the results
        expect(result).not.toBeNull();
        expect(result?.percentageChange).toBe(-90)
        expect(result?.performanceSummary).toBe("Significant loss. Review your portfolio strategy.")
    })
})