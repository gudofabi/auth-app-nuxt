<template>
  <div class="bg-gray-100 p-8 h-svh">
    <div class="container mx-auto">
      <TaskCreateForm />
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <ul class="mb-4">
          <!-- Example task -->
          <li
            v-for="task in getTasks"
            :key="task?.id"
            class="border-b border-gray-200 flex justify-between items-center py-3"
          >
            <span class="text-gray-700">{{ task?.name }}</span>
            <div>
              <button
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Update
              </button>
              <button
                @click="func_handleDelete(task?.id)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </li>
          <!-- Repeat for each task -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const taskStore = useTaskStore();
const { getTasks } = storeToRefs(taskStore);

onMounted(() => {
  taskStore.fetchList();
});

const func_handleDelete = (id: number) => {
  taskStore
    .destroy(id)
    .then(() => {
      taskStore.fetchList();
    })
    .catch((err: any) => {
      console.log(err);
    });
};
</script>
