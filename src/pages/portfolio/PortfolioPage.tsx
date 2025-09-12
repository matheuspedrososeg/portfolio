import usePortfolio from "./hook/usePortfolio";
import Portfolio from "./Portfolio";

export function PortfolioPage() {
    const controller = usePortfolio();
    return <Portfolio controller={controller} />
}