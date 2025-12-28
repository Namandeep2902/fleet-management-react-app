import {useState, useCallback} from "react";
import FleetCard from "../components/FleetCard";
const Admin = () => {
    const [fleets, setFleets] = useState([]);
    const addFleet = (fleet) =>
        {
            setFleets([...fleets, fleet]);
        };
    constdeleteFleet = useCallback((id) =>
        {
            if(window.confirm("Delete?"))
            {
                setFleets(prev => prev.filter(f => f.id !== id));
            }
        },[]);
   
    return(
        <>
        {
            fleets.map(fleet => (<FleetCard key ={fleet.id}
            fleet={fleet} onDelete={deleteFleet}/>))
        }
        </>
    );
    };
export default Admin;