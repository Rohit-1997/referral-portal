import {createSlice} from '@reduxjs/toolkit'
import { StaticRouter } from 'react-router';
import axios from "axios";


export const appSlice = createSlice({
    name: 'app',
    initialState: {
        userId: null,
        userName: null,
        postjob: false,
        showAppliedJobs : false,
        company: null,
        position: null,
        appliedJobs: 0,
        wishlist: 0,
        experience: 0,
        wishlistedJobIds : []
    },
    reducers: {
        selectUser: (state, action) => {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.postjob = action.payload.postjob;
            state.company = action.payload.company;
            state.experience = action.payload.experience;
            state.position = action.payload.position;
        },
        applyJob: (state, action) => {
            state.appliedJobs = state.appliedJobs + 1;
        },
        wishlistJob: (state, action) => {
            if(!state.wishlistedJobIds.includes(action.payload.JobId)){
                state.wishlistedJobIds.push(action.payload.JobId)
                state.wishlist = state.wishlist + 1;
            }
        },
        clearWishlist : (state, action) => {
            state.wishlistedJobIds = [];
            state.wishlist = 0;
        },
        toggleShowAppliedJobs : (state, action) => {
            state.showAppliedJobs = !state.showAppliedJobs;
        },
        fetchAppliedJobs : async (state, action) => {
            var getAllAppliedJobs = "https://test-referralportal-api20210514150629.azurewebsites.net/api/jobapplications/jobs/" + state.userId;

            const response = await fetch(getAllAppliedJobs)
            const data = await response.json()


            axios.get(getAllAppliedJobs)
                .then(function (res) {
                    if (res.status === 200) {
                        var jobsApplied = res.data;
                        state.appliedJobs = jobsApplied.length
                    }
                });
        }
    }
});

export const {selectUser, applyJob, wishlistJob, clearWishlist, toggleShowAppliedJobs} = appSlice.actions;
export const selectUserId = state => state.app.userId;
export const selectUserName = state => state.app.userName;
export const selectJobPosting = state => state.app.postjob;
export const selectAppliedJobs = state => state.app.appliedJobs;
export const selectCompany = state => state.app.company;
export const selectExperience = state => state.app.experience;
export const selectPosition = state => state.app.position;
export const selectWishlistedJobs = state => state.app.wishlist;
export const selectShowAppliedJobs = state => state.app.showAppliedJobs;


export default appSlice.reducer;