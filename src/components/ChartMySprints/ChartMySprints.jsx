import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartMySprints = (props) => {
  const { mySprints } = props;
  console.log(mySprints);
  const mySprintsPaso1 = Object.entries(mySprints);
  const mySprintsPaso2 = mySprintsPaso1.map((item) => item[1]);
  const labels = mySprintsPaso2.map((item) => item.title);
  const calificaciones = mySprintsPaso2.map((item) => item.calificacion);
  console.log('labels', labels);
  console.log('calificaciones', calificaciones);
  return (
    <div>
      <Bar
        data={{
          labels,
          datasets: [{
            label: 'Calificacion de mis sprints',
            data: [...calificaciones],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgb(153, 102, 255)',
            borderWidth: 1,
          }],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          } }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default ChartMySprints;
