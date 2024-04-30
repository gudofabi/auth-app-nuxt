import type { AxiosInstance } from "axios";
import { defineStore } from "pinia";
import { tasks } from "~/utils/repository/tasks";

export const useTaskStore = defineStore("taskStore", () => {
    const { $auth } = useNuxtApp();
    const taskRepo = tasks($auth as AxiosInstance);

    /*** STATE */
    const taskList = ref([])
    const taskData = ref({})

    /*** COMPUTED */
    const getTasks = computed(() => {
        return taskList.value ?? []
    })

    /*** FUNCTIONS */
    const fetchList = () => {
        taskRepo.getTask().then((res: any)=> {
           taskList.value = res.data.tasks.data
        })
        .catch((err: any) => {
            console.log(err)
        })
    }

    const create = async (params: any) => {
       return await taskRepo.createTask(params);
    }

    const destroy = async (id: number) => {
       return await taskRepo.deleteTask(id);
    }

    const completeTask = async (id: number, params: any) => {
       return await taskRepo.completeTask(id, params);
    }

    return {
        fetchList,
        create,
        destroy,
        completeTask,
        getTasks
    }
});