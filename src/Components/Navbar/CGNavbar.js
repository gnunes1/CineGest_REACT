import React from "react";
import CGNavbarAnon from "./CGNavbarAnon";
import CGNavbarUser from "./CGNavbarUser";
import CGNavbarAdmin from "./CGNavbarAdmin";
import CGNavbarLoading from "./CGNavbarLoading";
import {useRecoilState} from "recoil";
import UserStore from "../../Stores/User";

const CGNavbar = () => {

    const [userStore, setUserStore] = useRecoilState(UserStore);
    
    return <React.Fragment>
        {userStore.role === "" && <CGNavbarLoading/>}
        {userStore.role === "Anon" && <CGNavbarAnon/>}
        {userStore.role === "User" && <CGNavbarUser name={userStore.name}/>}
        {userStore.role === "Admin" && <CGNavbarAdmin name={userStore.name}/>}
    </React.Fragment>;
};

export default CGNavbar;
