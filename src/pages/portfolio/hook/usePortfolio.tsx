import { useEffect, useState } from "react";

export interface PortfolioController {
    checked: boolean;
    setChecked:(checked: boolean) => void;
    items:[]
    githubOnClick: () => void;
    handleNavBarClick:(e:any) => void;
    current:string
}

function usePortfolio(): PortfolioController {

    const [checked, setChecked] = useState<boolean>(localStorage.getItem("theme") === 'DARK' ? true : false)
    const [current, setCurrent] = useState<string>("home");

    const githubOnClick = () => {
        window.open('https://github.com/matheuspedrososeg', '_blank')
    }

    const handleNavBarClick = (e:any) => {
        setCurrent(e.key);
        const section = document.getElementById(e.key);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    useEffect(() => {
        localStorage.setItem("theme", checked ? "DARK" : "LIGHT");
    }, [checked])

    const items = [
        {
            key: 'home',
            label: 'Home'
        },
        {
            key: 'about-me',
            label: 'About me'
        },
        {
            key: 'skills',
            label: 'Skills'
        },
        {
            key: 'contact',
            label: 'Contact'
        },
    ]

    return {
        checked,
        setChecked,
        items,
        githubOnClick,
        handleNavBarClick,
        current
    } as PortfolioController
}

export default usePortfolio;