export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): any {

    const profitOrLoss: number = currentValue - initialInvestment;

    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary: string = "";
    
    switch (true) {
        case percentageChange >= 30:
            performanceSummary = `Excellent performance! Your investments are doing great.`;
        case percentageChange < 30 && percentageChange >= 10: 
            performanceSummary = `Solid gain. Keep monitoring your investments`;
        case percentageChange < 10 && percentageChange > 0:
            performanceSummary = "Modest gain. Your portfolio is growing slowly."
        case percentageChange == 0:
            performanceSummary = "No change. Your portfolio is holding steady."
        case percentageChange < 0 && percentageChange >= -10:
            performanceSummary = "Minor loss. Stay calm and review your options."
        case percentageChange < -10:
            performanceSummary = "Significant loss. Review your portfolio strategy."
        
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}