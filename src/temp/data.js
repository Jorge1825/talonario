import { ref } from "vue";

export const dataBoletas = ref([
  {
 
    name: "Andres Arnulfo",
    telefono: "3000000000",
    direccion: "Calle 1 # 2 - 3",
    boletas: [
      {
        numero: "01",
        estado: "0"
      },
      {
        numero: "02",
        estado: "1"
      }
    ]
  },

  {
    name: "Andres Arnulfo",
    telefono: "3100000000",
    direccion: "Calle 1 # 2 - 3",
    boletas: [
      {
        numero: "03",
        estado: "0"
      },
      {
        numero: "04",
        estado: "1"
      }
    ]
  },
])


export const cardData = ref([
  {
    label: 'Premio',
    value: '20000',
    icon: "🏆",
  },
  {
    label: 'Valor Boleta',
    value: 500,
    icon: "$"
  },
  {
    label: 'Loteria',
    value: 'Loteria Nueva',
    icon: "🏦",
  },
  {
    label: 'Fecha de Sorteo',
    value: '2023-02-28',
    icon: "🗓️",
  }
]
)