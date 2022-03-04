const contenedorBarChart = document
.querySelector("#bar-chart")
.getContext("2d");

const barChart = new Chart(contenedorBarChart,{
    type: "bar",
    data:{
        labels: [
            "lunes",
            "martes",
            "miercoles",
            "jueves",
            "viernes",
            "sabado",
            "domingo",
        ],
        datasets:[{
            label:"numero de usuarios por dia",
            data:[20,40,10,100,50,75,200],
            borderWidth:3,
            borderColor:"red",
            backgroundColor: [
                "#1565C0",
                "#C6FFDD",
                "#8E2DE2",
                "#f7797d",
                "#ffff1c",
                "#00c3ff",
                "#b92b27",
                
            ],
        },
    ],
    },
});



const containerDoughnutChart = document
  .querySelector("#doughnut-chart")
  .getContext("2d");

const dataForChart = {
  labels: ["Computadoras", "Celulares", "Refrigeradoras", "Parlantes"],
  datasets: [
    {
      label: "PRODUCTOS ELECTRONICOS",
      data: [100, 230, 520, 267],
      backgroundColor: [ "#1565C0",
      "#C6FFDD",
      "#8E2DE2",
      "#f7797d",],
    },
  ],
};

const config = {
  type: "doughnut",
  data: dataForChart,
};

const donutChart = new Chart(containerDoughnutChart, config);




const containerLineChart=document.querySelector("#lineal-chart").getContext("2d");
const configLineal = {
    type: "line",
    data: dataForChart,
};
const lineChart = new Chart(containerLineChart, configLineal);



const containerBubleChart=document.querySelector("#bubble-chart").getContext("2d");
dataForChart.datasets[0].data=[
{
    x:20,
    y:30,
    r:15,
},
{
    x:40,
    y:10,
    r:10,
},

{
    x:70,
    y:30,
    r:40,
},

{
    x:90,
    y:30,
    r:20,
},

];


const configBubble={
    type: "bubble",
    data: dataForChart,
} ;
const bubbleChart= new Chart (containerBubleChart, configBubble);




const containerPolarChart=document.querySelector("#polar-chart").getContext("2d");
dataForChart.datasets[0].data=[300,123,157,390];

const configPolar={
    type: "polarArea",
    data: dataForChart,
} ;
const polarChart= new Chart (containerPolarChart, configPolar);



const containerRadarChart=document.querySelector("#radar-chart").getContext("2d");
dataForChart.datasets[0].data=[200,103,107,290];

const configRadar={
    type: "radar",
    data: dataForChart,
} ;
const radarChart= new Chart (containerRadarChart, configRadar);





const containerScattereChart=document.querySelector("#scatter-chart").getContext("2d");
dataForChart.datasets[0].data=[
{
    x:-10,
    y:30,
    
},
{
    x:40,
    y:10,
    
},

{
    x:70,
    y:30,
    
},

{
    x:90,
    y:30,
    
},

];


// dataForChart.datasets[0].data=[
//     {
//         x:20,
//         y:30,
//         r:15,
//     },
//     {
//         x:40,
//         y:10,
//         r:10,
//     },
    
//     {
//         x:70,
//         y:30,
//         r:40,
//     },
    
//     {
//         x:90,
//         y:30,
//         r:20,
//     },
    
//     ];




const configScatter={
    type: "scatter",
    data: dataForChart,
} ;
const scatterChart= new Chart (containerScattereChart, configScatter);
