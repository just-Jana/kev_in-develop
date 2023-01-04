import Home from "./HomeTest.svelte"
import Login from "./Login.svelte"
import Profile from "./Profile.svelte"
import Error from "./Error.svelte"
import ForgotPassword from "./ForgotPassword.svelte"
import ResetPassword from "./ResetPassword.svelte"
//import ExamplePage from "./Example.svelte"

export default {
    "/": Home,
    "/login": Login,
    "/profile": Profile,
    "/forgot-password": ForgotPassword,
    "/reset-password" : ResetPassword,
    //"/example-path": <ExamplePage>,
    "*": Error
}