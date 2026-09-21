export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): any {

    const profitOrLoss: number = currentValue - initialInvestment;

    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary: string = "";
    
    switch (true) {
        case percentageChange >= 30:
            return performanceSummary = `Excellent performance! Your investments are doing great.`;
        case percentageChange < 30 && percentageChange >= 10: 
            return performanceSummary = `Solid gain. Keep monitoring your investments`;
        case percentageChange < 10 && percentageChange > 0:
            return performanceSummary = "Modest gain. Your portfolio is growing slowly."
        case percentageChange == 0:
            return performanceSummary = "No change. Your portfolio is holding steady."
        case percentageChange < 0 && percentageChange >= -10:
            return performanceSummary = "Minor loss. Stay calm and review your options."
        case percentageChange < -10:
            return performanceSummary = "Significant loss. Review your portfolio strategy."
        
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}

interface PortfolioPerformanceResponse {
       initialInvestment: number;
       currentValue: number;
       profitOrLoss: number;
       percentageChange: number;
       performanceSummary: string;
}