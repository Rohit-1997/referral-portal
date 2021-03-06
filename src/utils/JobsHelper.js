import { applyJob, getAppliedJobs } from "../network/lib/jobsClient";

/**
 * Helper class for Jobs management that implements a singleton pattern
 */
class JobsHelper {

    constructor() {
        if (JobsHelper.instance == null) {
            this.appliedJobsCount = 0;
            JobsHelper.instance = this;
        }
        return JobsHelper.instance;
    }

    static apply(jobData) {
        if (jobData == null) return;
        const status = false;
        applyJob(jobData)
            .then((response) => {
                console.log("JobsHelper :: Success in applying the Job", response);
                if (response.status == 200) {
                    status = true;
                }
            })
            .catch((error) => {
                console.log("JobsHelper :: Exception in applying the Job", error);
            })
    }

    /** To load the jobs applied by the user */
    loadAppliedJobs(userId) {
        return new Promise((resolve, reject) => {
            if (userId == null) reject("user Id passed is null");
            else {
                getAppliedJobs(userId)
                .then((response) => {
                    console.log("JobsHelper :: Loaded jobs successfully ", response);
                    if (response != null && response.data != null) {
                        this.appliedJobsCount = response.data.length;
                        console.log("Testing the counter value: ", this.appliedJobsCount);
                        resolve(response);
                    }
                    else {
                        console.log("JobsHelper :: Loaded Jobs But response is null");
                        reject("Got response null from the api");
                    }
                })
                .catch((error) => {
                    console.log("JobsHelper :: Exception in loading the jobs data: ", error);
                    reject(error);
                })
            }
        })
    }

}

const userJobsData = new JobsHelper();
// Object.freeze(userJobsData);
export default userJobsData;