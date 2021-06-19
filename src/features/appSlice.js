import {createSlice} from '@reduxjs/toolkit'


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
        setAppliedJobsCount: (state, action) => {
            state.appliedJobs = action.payload.appliedJobsCount;
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
        }
    }
});

export const {selectUser, applyJob, wishlistJob, clearWishlist, toggleShowAppliedJobs, setAppliedJobsCount} = appSlice.actions;
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