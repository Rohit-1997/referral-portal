import {createSlice} from '@reduxjs/toolkit'
import { StaticRouter } from 'react-router';


export const appSlice = createSlice({
    name: 'app',
    initialState: {
        userId_redux: null,
        userName: null,
        postjob: false,
        appliedJobs: 0
    },
    reducers: {
        selectUser: (state, action) => {
            state.userId_redux = action.payload.userId_redux;
            state.userName = action.payload.userName;
            state.postjob = action.payload.postjob;
        },
        applyJob: (state, action) => {
            state.appliedJobs = state.appliedJobs + 1;
        }
    }
});

export const {selectUser, applyJob} = appSlice.actions;
export const selectUserId_redux = state => state.app.userId_redux;
export const selectUserName = state => state.app.userName;
export const selectJobPosting = state => state.app.postjob;
export const selectAppliedJobs = state => state.app.appliedJobs;

export default appSlice.reducer;