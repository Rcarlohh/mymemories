import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {id: 'm1', image:'../public/images/cruzaxul.jpg',
        title:'Cruz Azul Campeon', description:'Simplemente Cruz AZUL Campeon'},
        
        {id: 'm2', image:'../public/images/conoci.jpg', 
        title:'El Dia Que Te Conoci', description:'Podria ser este mi ser amado'},
        
        {id: 'm3', image:'../public/images/santo.jpg', 
        title:'Mi Ultimo Cumple', description:'MI Santo'},
        
        {id: 'm4', image:'../public/images/folk.jpg', 
        title:'Presentacion Folklor', description:'Zapateado Endiablado'},

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
