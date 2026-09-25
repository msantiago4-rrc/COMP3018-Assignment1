export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): any {

    const profitOrLoss: number = currentValue - initialInvestment;

    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;
    
    const getPerformanceSummary = (percentageChange: number): string => {
        switch (true) {
            case initialInvestment <= 0:
                return "Error: Initial investment can not be 0 or less";

            case percentageChange >= 30:
                return "Excellent performance! Your investments are doing great.";
                
            case percentageChange < 30 && percentageChange >= 10: 
                return "Solid gain. Keep monitoring your investments";
                
            case percentageChange < 10 && percentageChange > 0:
                return "Modest gain. Your portfolio is growing slowly.";
                
            case percentageChange < 0 && percentageChange >= -10:
                return "Minor loss. Stay calm and review your options.";
                
            case percentageChange < -10:
                return "Significant loss. Review your portfolio strategy.";

            default:
                return "No change. Your portfolio is holding steady.";

        }
    }
    
    let performanceSummary: string = getPerformanceSummary(percentageChange);
    
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}