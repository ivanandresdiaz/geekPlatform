import React from 'react';
import { Radar } from 'react-chartjs-2';

const ChartStudent = (props) => {
  const { profileSocialGeek } = props;
  const { html, css, javascript, webpack, reactJs, reactHooks, redux, firebase, testing, sigloXXI, designThinking } = profileSocialGeek;
  const htmlAverage = Math.round(html.reduce((a, b) => a + b, 0) / html.length);
  const cssAverage = Math.round(css.reduce((a, b) => a + b, 0) / css.length);
  const javascriptAverage = Math.round(javascript.reduce((a, b) => a + b, 0) / javascript.length);
  const webpackAverage = Math.round(webpack.reduce((a, b) => a + b, 0) / webpack.length);
  const reactJsAverage = Math.round(reactJs.reduce((a, b) => a + b, 0) / reactJs.length);
  const reactHooksAverage = Math.round(reactHooks.reduce((a, b) => a + b, 0) / reactHooks.length);
  const reduxAverage = Math.round(redux.reduce((a, b) => a + b, 0) / redux.length);
  const firebaseAverage = Math.round(firebase.reduce((a, b) => a + b, 0) / firebase.length);
  const testingAverage = Math.round(testing.reduce((a, b) => a + b, 0) / testing.length);
  const sigloXXIAverage = Math.round(sigloXXI.reduce((a, b) => a + b, 0) / sigloXXI.length);
  const designThinkingAverage = Math.round(designThinking.reduce((a, b) => a + b, 0) / designThinking.length);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>


        <Radar
          data={{
            labels: [
              'Html',
              'Css',
              'Javascript',
              'Webpack',
              'ReactJs',
              'ReactHooks',
              'Redux',
              'Firebase',
              'testing',
              'HabilidadesSigloXXI',
              'DesignThinking',
            ],
            datasets: [
              {
                label: `${profileSocialGeek.fullName}`,
                data: [htmlAverage, cssAverage, javascriptAverage, webpackAverage, reactJsAverage, reactHooksAverage, reduxAverage, firebaseAverage, testingAverage, sigloXXIAverage, designThinkingAverage],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)',
              }],
          }}
          options={{
            maintainAspectRatio: false,
            elements: {
              line: {
                borderWidth: 3,
              },
            },
          }}
          height={200}
          width={200}
        />
      </div>
    </>
  );
};

export default ChartStudent;
