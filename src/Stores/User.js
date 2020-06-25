import {atom} from "recoil";

const UserStore = atom({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: {role: null, name: null, avatar: null}, // default value (aka initial value)
});

export default UserStore;