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