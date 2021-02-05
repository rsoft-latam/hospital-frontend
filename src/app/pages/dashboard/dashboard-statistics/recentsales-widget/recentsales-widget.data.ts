import * as moment from 'moment';

export const recentsalesWidgetData = {
  labels: [],
  datasets: [{
    label: 'Sales',
    backgroundColor: '#DBF6F9',
    borderColor: '#DBF6F9',
    data: [13, 11, 11, 18, 10, 15, 18, 21, 19, 14, 20, 20, 19, 25, 30, 26, 26, 16, 24, 26, 29, 21, 28, 20, 22, 26, 16, 11, 19, 10, 14, 15, 10, 14, 22, 12, 13, 18, 11, 12, 22, 12, 12, 12, 11, 19, 23, 20, 11, 17],
    lineTension: 0.000001
  }]
};

for (let i = 0; i < 50; i++) {
  recentsalesWidgetData.labels.unshift(moment().subtract(i, 'hour').fromNow())
}
