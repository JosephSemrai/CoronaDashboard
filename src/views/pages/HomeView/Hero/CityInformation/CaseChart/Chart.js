import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line, Bar } from 'react-chartjs-2';
import { fade, makeStyles, useTheme } from '@material-ui/core';
import { red, green, yellow } from '@material-ui/core/colors/';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  }
}));

function Chart({ className, data: dataProp, labels, ...rest }) {
  const classes = useStyles();
  const theme = useTheme();

  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const yellowGradient = ctx.createLinearGradient(0, 0, 0, 400);
    const redGradient = ctx.createLinearGradient(0, 0, 0, 400);
    const greenGradient = ctx.createLinearGradient(0, 0, 0, 400);

    yellowGradient.addColorStop(0, fade(yellow[800], 0.9));
    yellowGradient.addColorStop(1, fade(yellow[800], 0.1));
    // yellowGradient.addColorStop(0.9, 'rgba(255,255,255,0)');
    // yellowGradient.addColorStop(1, 'rgba(255,255,255,0)');

    redGradient.addColorStop(0, fade(red[800], 0.9));
    redGradient.addColorStop(1, fade(red[800], 0.1));
    // redGradient.addColorStop(0.9, 'rgba(255,255,255,0)');
    // redGradient.addColorStop(1, 'rgba(255,255,255,0)');

    greenGradient.addColorStop(0, fade(green[800], 0.9));
    greenGradient.addColorStop(1, fade(green[800], 0.1));
    // greenGradient.addColorStop(0.9, 'rgba(255,255,255,0)');
    // greenGradient.addColorStop(1, 'rgba(255,255,255,0)');

    return {
      datasets: [
        {
          data: dataProp,
          backgroundColor: [yellowGradient, redGradient, greenGradient],
          borderColor: theme.palette.secondary.main,
          pointBorderColor: theme.palette.background.default,
          pointBorderWidth: 3,
          pointRadius: 6,
          pointBackgroundColor: theme.palette.secondary.main
        }
      ],
      labels
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 7,
            callback: value => (value > 999 ? `${value / 1000}K` : value)
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.background.default,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        title: () => {},
        label: tooltipItem => {
          const label = `${tooltipItem.xLabel} Cases: ${tooltipItem.yLabel}`;

          return label;
        }
      }
    }
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Bar data={data} options={options} />
    </div>
  );
}

Chart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired
};

export default Chart;
