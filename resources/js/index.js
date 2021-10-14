import React, {Component} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {injectStyle} from "react-toastify/dist/inject-style";

const loading = (<div className="pt-3 text-center" >
    <div className="sk-spinner sk-spinner-pulse" > </div> </div>
);

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
    injectStyle();
}

// Containers
const Admin = React.lazy(() => import("./admin/containers/TheLayout"));
class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter >
                    <React.Suspense fallback={loading} >
                        <Switch >
                            <Route path="/admin" name="Admin" render={(props) => < Admin {...props} />} />
                        </Switch>
                    </React.Suspense >
                </BrowserRouter>
                <ToastContainer autoClose={1000} />
            </>
        );
    }
}

export default App;
