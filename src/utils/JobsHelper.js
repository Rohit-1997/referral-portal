import { applyJob } from "../network/lib/jobsClient";

/**
 * Helper class for Jobs management that implements a singleton pattern
 */
class JobsHelper {
    

    constructor() {
        if (JobsHelper.instance == null) {
            this.appliedJobsCount = 0;
            loadAppliedJobs();
        }
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

    
}