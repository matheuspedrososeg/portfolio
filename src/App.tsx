import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider, theme } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { PortfolioPage } from './pages/portfolio/PortfolioPage';

function App() {

  return (
    <>
      <ConfigProvider wave={{ disabled: true }} theme={{algorithm: localStorage.getItem("theme") === 'DARK' ? theme.darkAlgorithm : theme.defaultAlgorithm}}>
        <Routes>
          <Route path='/' element={<PortfolioPage />} />
        </Routes>
        </ConfigProvider>
      </>
      )
}

      export default App
