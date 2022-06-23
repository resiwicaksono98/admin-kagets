import { Navigate } from 'react-router-dom';

const AuthGuard = (props) => {
    const { user, auth } = props
    if (!auth && user ) {
        return <Navigate to={'/auth/login'} />
    }
    return props.children
}

export default AuthGuard;
