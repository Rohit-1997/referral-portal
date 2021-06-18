import axiosClient from "../apiClient";

export function getAppliedJobsCountClient(userId) {
    return axiosClient.get(`/jobapplications/jobs/${userId}`);
}

export function getAllJobReferrals() {
    return axiosClient.get("/jobreferrals");
}

export function applyJob(jobData) {
    return axiosClient.post("/jobapplications/apply", jobData);
}