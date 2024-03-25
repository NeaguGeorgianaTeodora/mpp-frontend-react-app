/*import {lazy, Suspense} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';

const AppRouter = () => {
    const Overview = lazy(() => import('./Playlists.tsx'));
    return (
        <BrowserRouter>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate replace to='/playlists' />}
                    />
                    <Route
                        element={
                            <Layout>
                                <Overview />
                            </Layout>
                        }
                        path={'/playlists'}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;*/
