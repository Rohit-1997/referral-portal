import axiosClient from "../apiClient";

export function getAllUsers() {
    return axiosClient.get("/users");
}


export function getUser(userId) {
    return axiosClient.get(`/users/${userId}`);
}