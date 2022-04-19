import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import AccessDenied from '../../pages/access-denied';
import NotFound from '../../pages/not-found';

const NavGuard = (props) => {
    return (
        <Routes>
                {props.routes.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            {/* render common component */}
                            {
                                item.access === "common" && <Route exact path={item.path} element={<item.component />} /> 
                            }

                            {/* if route is auth protected, require auth */}
                            {
                                item.access === "auth" && props.auth ?
                                    <Route exact path={item.path} element={<item.component />} />
                                :
                                    null
                            }

                            {/* if route is admin protected, require admin auth */}
                            {
                                item.access === "admin" && props.adminAuth ?
                                    <Route exact path={item.path} element={<item.component />} />
                                :
                                    null
                            }
                        </Fragment>
                    )})
                }
        </Routes>
    )
}

export default NavGuard;
