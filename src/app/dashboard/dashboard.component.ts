import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  ngOnInit() {
    this.initBudgetChart();
  }

  initBudgetChart() {
    const element = document.querySelector('#budgetChart') as HTMLElement;

    const budgetChart = echarts.init(element).setOption({
      title: {
        left: 'center',
        top: 20,
        textStyle: {
          color: '#333',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'horizontal',
        left: 5,
        data: ['Category A', 'Category B', 'Category C', 'Category D'],
      },
      series: [
        {
          name: 'Doughnut Chart',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 335, name: 'Category A' },
            { value: 310, name: 'Category B' },
            { value: 234, name: 'Category C' },
            { value: 135, name: 'Category D' },
          ],
        },
      ]
    });
  }
}
