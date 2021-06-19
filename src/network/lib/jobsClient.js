import axiosClient from "../apiClient";

export function getAppliedJobs(userId) {
    return axiosClient.get(`/jobapplications/jobs/${userId}`);
}

export function getAllJobReferrals() {
    return axiosClient.get("/jobreferrals");
}

export function applyJob(jobData) {
    return axiosClient.post("/jobapplications/apply", jobData);
}

export function postJobReferrals(jobData) {
    return axiosClient.post("/jobreferrals", jobData);
}