import React from "react";
import CGNavbarUser from "./CGNavbarUser";
import CGNavbarAdmin from "./CGNavbarAdmin";
import CGNavbarLoading from "./CGNavbarLoading";
import {useRecoilState} from "recoil";
import UserStore from "../../Stores/User";
import CGNavbarAnon from "./CGNavbarAnon";

const CGNavbar = () => {

    const [userStore, setUserStore] = useRecoilState(UserStore);
    return <React.Fragment>
        {userStore.role === "noUser" && <CGNavbarAnon/>}
        {userStore.role === null && <CGNavbarLoading/>}
        {userStore.role === "User" && <CGNavbarUser name={userStore.name} avatar={userStore.avatar}/>}
        {userStore.role === "Admin" && <CGNavbarAdmin name={userStore.name} avatar={userStore.avatar}/>}
    </React.Fragment>;
};

export default CGNavbar;
