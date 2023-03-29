import { ref,watch } from "vue";

export const dataBoletas = ref([
  {
 
    name: "Andres Arnulfo",
    telefono: "3000000000",
    direccion: "Calle 1 # 2 - 3",
    boletas: [
      {
        numero: "01",
        estado: "0",
        fecha: "2021/02/28 12:00:00",
      },
      {
        numero: "02",
        estado: "1",
        fecha: "2021/02/28 12:00:00",
      }
    ]
  },

  {
    name: "Jorge Luis Roa Toro de .......",
    telefono: "3100000000",
    direccion: "Calle 1 # 2 - 3",
    boletas: [
      {
        numero: "03",
        estado: "0",
        fecha: "2021/02/28 12:00:00",
      },
      {
        numero: "04",
        estado: "1",
        fecha: "2021/02/28 12:00:00",
      },
      {
        numero: "05",
        estado: "1",
        fecha: "2021/02/28 12:00:00",
      }
    ]
  },
])





