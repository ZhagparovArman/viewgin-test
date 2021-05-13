import { Component, OnInit } from '@angular/core';
import { Donut } from '../models/chart';
import {ChartService} from '../services/chart-service.service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  options: any;
  dataChart: Donut;

  constructor(private chartService: ChartService) { 
  }

  ngOnInit(): void {
    this.getData().then(data =>{
      this.options = {
        title: {
            text: 'Donut',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
            {
                name: 'Donut',
                type: 'pie',
                radius: '70%',
                data: this.updateData(this.dataChart.list),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    });
    
  }

  // getData() {
  //   this.chartService.getDonut().subscribe(data => this.options.series[0].data = this.updateData(data.list));
  // }

  getData() {
    return new Promise((resolve, reject) => {
      this.chartService.getDonut()
          .subscribe(data => {
              this.dataChart = {...data};
              resolve(true);
          })
  })
  }

  updateData(list) { 
    return list.map(value => {
      return {  value: value.views, 
                name: value.title  }
    })
  }

}
