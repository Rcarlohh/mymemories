import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://www.ticcihmexico.org/wp-content/uploads/2016/06/1-Mina-de-Acosta-MAHB-2-768x576.jpg",
          title: "Mineral del monte",
          description: "Montañas",
        },
        {
          id: "m2",
          image:
            "https://i.pinimg.com/474x/eb/a4/39/eba439ea69746ed229f9e517619cbd7f.jpg",
          title: "Tuzoofari Pachuca",
          description: "Montañas",
        },
        {
          id: "m3",
          image:
            "https://www.jeskat.com.mx/wp-content/uploads/2021/03/207-Villa-del-Carbon-1-768x576.jpg",
          title: "Villa del carbon",
          description: "Montañas",
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };
      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
