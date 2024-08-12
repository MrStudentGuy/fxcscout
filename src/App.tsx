import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import { Button } from "./components/ui/button";

function App() {
    const { login, register, user } = useKindeAuth();
    
    return (
        <>
            <h1 className={"text-4xl font-bold"}>Logged in: {user ? "yes" : "no"}</h1>
            
            <Button onClick={login}>Login</Button>
            <Button onClick={register}>Register</Button>
        </>
    )
}

export default App
