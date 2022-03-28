import React, {useEffect, useState} from "react";
import {PostItem} from "./PostItem/PostItem";
import {NewPostButton} from "./NewPostButton/NewPostButton";
import Grid from "@mui/material/Grid";
import {BackButton} from "./BackButton/NewPostButton";
import {useNavigate, useSearchParams} from "react-router-dom";
import api from "../../../Services/api";
import {Query} from "appwrite";


export function Posts(props){
    const {REACT_APP_POSTS_COLLECTION} = process.env;

    let [posts, setPosts] = useState([]);

    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <NewPostButton />
                </Grid>
                <Grid item xs={6} style={{textAlign: 'right'}}>
                    <BackButton />
                </Grid>
            </Grid>

            <PostItem title={'Test PostItem'} />
        </>
    );
}
