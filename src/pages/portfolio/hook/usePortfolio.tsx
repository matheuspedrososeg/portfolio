import { useEffect, useState } from "react";

export interface PortfolioController {
    checked: boolean;
    setChecked:(checked: boolean) => void;
    items:[]
    githubOnClick: () => void;
}

function usePortfolio(): PortfolioController {

    const [checked, setChecked] = useState<boolean>(localStorage.getItem("theme") === 'DARK' ? true : false);

    const githubOnClick = () => {
        window.open('https://github.com/matheuspedrososeg', '_blank')
    }


    useEffect(() => {
        localStorage.setItem("theme", checked ? "DARK" : "LIGHT");
    }, [checked])

    const items = [
        {
            key: '1',
            label: 'Home'
        },
        {
            key: '2',
            label: 'About me'
        },
        {
            key: '3',
            label: 'Skills'
        },
        {
            key: '4',
            label: 'Contact'
        },
    ]

    return {
        checked,
        setChecked,
        items,
        githubOnClick
    } as PortfolioController
}

export default usePortfolio;