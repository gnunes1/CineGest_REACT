import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {ROUTES} from "./routes";
import {useRecoilState} from "recoil";
import UserStore from "./Stores/User";

const ProtectedRoute = ({component: Component, role, ...rest}) => {
    const [userStore, setUserStore] = useRecoilState(UserStore);

    return (
        <Route {...rest} render={
            props => {
                if (userStore.role === null) return null
                if (role.includes(userStore.role)) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: ROUTES.Login,
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        }
        />
    )
}

export default ProtectedRoute;