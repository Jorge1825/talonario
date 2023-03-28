import { ref } from "vue";

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


export const configTalonario = ref({
  balotas: 99,
  premio: 20000,
  valorBoleta: 500,
  loteria: 'Loteria Nueva',
  fechaSorteo: '2023-02-28',
  boletaGanadora: null,
})


export const cardData = ref([
  {
    label: 'Premio',
    value: configTalonario.value.premio,
    icon: "🏆",
  },
  {
    label: 'Valor Boleta',
    value: configTalonario.value.valorBoleta,
    icon: "$"
  },
  {
    label: 'Loteria',
    value: configTalonario.value.loteria,
    icon: "🏦",
  },
  {
    label: 'Fecha de Sorteo',
    value: configTalonario.value.fechaSorteo,
    icon: "🗓️",
  }
]
)


