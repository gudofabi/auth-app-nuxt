import type { AxiosInstance } from "axios";

export const tasks = (axios: AxiosInstance) => ({
    async getTask(): Promise<any> {
        return axios.get("/tasks");
    },

    async createTask(params: any): Promise<any> {
        return axios.post("/tasks", params);
    },
    
    async updateTask(id: number, params: any): Promise<any> {
        return axios.patch(`/tasks/${id}`, params);
    },
    
    async deleteTask(id: number): Promise<any> {
        return axios.delete(`/tasks/${id}`);
    },

    async completeTask(id: number, params: any): Promise<any> {
        return axios.patch(`/tasks/${id}/complete`, params);
    },
})