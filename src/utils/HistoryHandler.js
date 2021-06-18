class HistoryHandler {    
    static loginUser(history, userId) {
        console.log(`HistoryHandler :: Logging in user ${userId}`);
        history.push(`/user/${userId}`);
    }

    static logoutUser(history) {
        console.log("HistoryHandler :: logging out the user");
        history.push("/");
    }

    static showAppliedJobs(history, userId) {
        console.log("HistoryHandler :: Routing to applied jobs page");
        history.push(`/user/${userId}/appliedJobs`);
    }
}

export default HistoryHandler;