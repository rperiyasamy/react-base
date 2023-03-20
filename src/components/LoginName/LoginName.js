import  {useState} from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../globals/authConfig";
import { callMsGraph } from "../../globals/graph"

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const LoginName = () => {    
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    function RequestProfileData() {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        });
    }
    // console.log(RequestProfileData,graphData) // for clearing warring
  
    return (accounts[0].name      
    )
}