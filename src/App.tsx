import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import Page404 from './pages/Page404';
class App extends React.Component{
    public render():React.ReactNode{
        return(
            <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage />}/>
                    <Route path="/index.html" element={<IndexPage />}/>
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
            </>
        );
    }
}
export default App;