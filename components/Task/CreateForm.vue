<template>
  <div class="mb-8">
    <h1 class="text-xl font-bold text-gray-700">Tasks List</h1>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="task">
          Task Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="task"
          type="text"
          placeholder="Enter task name"
          v-model="data_form.name"
          required
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="func_handleSubmit"
        >
          Add Task
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const taskStore = useTaskStore();

const data_form = {
  name: "",
};

const func_handleSubmit = () => {
  if (data_form.name == "") {
    alert("Please enter value.");
  } else {
    taskStore.create(data_form).then(() => {
      taskStore.fetchList();
      data_form.name = "";
    });
  }
};
</script>
