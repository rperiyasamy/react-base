import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../globals/authConfig";


/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const LoginButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            //alert(loginType);
            console.log('e');
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return (
        // <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Sign In">
        //     <Dropdown.Item as="button" onClick={() => handleLogin("popup")}>Sign in using Popup</Dropdown.Item>
        //     <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>Sign in using Redirect</Dropdown.Item>
        // </DropdownButton>

        <button
            className="px-5 py-1 rounded bg-primary text-white w-full text-center"
            onClick={() => handleLogin("popup")}
        >      Login
        </button>
    )
}