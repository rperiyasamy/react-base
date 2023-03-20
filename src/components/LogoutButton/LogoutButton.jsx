import React from "react";
import { useMsal } from "@azure/msal-react";



/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const LogoutButton = () => {
    const { instance } = useMsal();
 
    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    }
    return (
        // <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Sign In">
        //     <Dropdown.Item as="button" onClick={() => handleLogin("popup")}>Sign in using Popup</Dropdown.Item>
        //     <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>Sign in using Redirect</Dropdown.Item>
        // </DropdownButton>
   
        //   <button
        //   className="px-5 py-1 rounded bg-primary text-white w-full text-center"
        //   onClick={() => handleLogout("popup")}
        // >      Logout             
        // </button>   
           <button className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"  onClick={() => handleLogout("popup")}>
           Logout
       </button>
    )
}