import { Component, OnInit } from '@angular/core';
import { Graph } from '../models/chart';
import {ChartService} from '../services/chart-service.service';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss']
})
export class LinearChartComponent implements OnInit {
  options: any;
  dataChart: Graph;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.getData().then(data => {
      this.options = {
        title: {
            text: 'Linear graphics'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: this.dataChart.list.map(data => data.title)
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.updateXAxis(this.dataChart)
        },
        yAxis: {
            type: 'value'
        },
        series: this.updateYAxis(this.dataChart)
    }}
      );
    
  }

  getData() {
    return new Promise((resolve, reject) => {
      this.chartService.getGraph()
          .subscribe(data => {
              this.dataChart = {...data};
              resolve(true);
          })
  })
  }

  updateXAxis(dataChart){
    return dataChart.list[0].data.map(data => data[0])
  }

  updateYAxis(dataChart){
    return dataChart.list.map(chart => {
      return {  name: chart.title,
                type: 'line',
                data: chart.data.map(value => value[1])
              }
    }
    )
  }

}
