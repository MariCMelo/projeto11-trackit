import React, { useContext, useState, createContext } from 'react';

export const AuthContext = createContext({});

export default function AuthData({children}){
    const [userData, setUserData] = useState({});
    const [finished, setFinished] = useState ([]);
    const [activitiesDev, setActivitiesDev] = useState (0)

return(
    <AuthContext.Provider value={{
        userData, setUserData,
        finished, setFinished,
        activitiesDev, setActivitiesDev
    }}>
        {children}
    </AuthContext.Provider>

)};