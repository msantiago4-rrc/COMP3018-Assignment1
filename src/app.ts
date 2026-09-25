// import the express application and type definition
import express, { Express } from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

// initialize the express application
const app: Express = express();

// Interface for health check response
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

/**
 * Represents the portfolio performance
 */
interface PortfolioPerformanceResponse {
        /** The initial amount invested */
       initialInvestment: number;

       /** The current value of the portfolio */
       currentValue: number;

       /** The difference between the current value vs the initial investment */
       profitOrLoss: number;

       /** The quotient percent of profit or loss and the initial investment  */
       percentageChange: number;

       /** The string summary of the performance of the portfolio */
       performanceSummary: string;
}

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

/**
 * Health check endpoint that returns server status information
 * @returns JSON response with server health metrics
 */
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

/**
 * Portfolio Performance endpoint that returns the statistics of the portfolio
 * @returns JSON response with portfolio information
 */
app.get("/api/v1/portfolio/performance", (req, res) => {
    const initialInvestment = Number(req.query.initialInvestment)
    const currentValue = Number(req.query.currentValue)
    const portfolio = calculatePortfolioPerformance(initialInvestment, currentValue)
    
    const portfolioResponse: PortfolioPerformanceResponse = {
        initialInvestment: portfolio.initialInvestment,
        currentValue: portfolio.currentValue,
        profitOrLoss: portfolio.profitOrLoss,
        percentageChange: portfolio.percentageChange,
        performanceSummary: portfolio.performanceSummary,
    };

    res.json(portfolioResponse)
})

// export app and server for testing
export default app;