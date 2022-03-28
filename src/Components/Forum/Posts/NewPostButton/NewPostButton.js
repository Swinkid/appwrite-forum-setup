import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";

export function NewPostButton(props) {
    const user = useSelector((state) => state.user);

    const [isLoggedIn, setIsLoggedIn] = useState(user.isLoggedIn);

    useEffect(() => {
        setIsLoggedIn(user.isLoggedIn);
    });

    return isLoggedIn ? <Button style={{marginTop: '1rem'}} variant="contained" color="primary" disableElevation>New Post</Button> : null;
}
