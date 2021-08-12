import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  pedidos:Array<any> = []
  repartidores:Array<any> = []
  estadisticas:any = {}

  constructor(
    private dashboardService:DashboardService
  ) {
    this.subtitle = 'This is some text within a card block.';
  }
  
  async ngOnInit() {
    await this.getPedidosCreados()
  }
  
    async getPedidosCreados(){
      await this.getRepartidores()
      this.pedidos = await this.dashboardService.getDataDashboard()
      await this.getEstadisticas()
      console.log('pedidos' , this.pedidos);
      
    }
  
    async getEstadisticas(){
      this.estadisticas = await this.dashboardService.getEstadisticas()
    }

    async getRepartidores(){
      this.repartidores = await this.dashboardService.getRepartidores()
    }

    async asignarRepartidor(repartidor , pedido){
      await this.dashboardService.asignarRepartidor(repartidor , pedido)
      await this.getPedidosCreados()
    }



  // lineChart
  public lineChartData: Array<any> = [
    { data: [0, 5, 6, 8, 25, 9, 8], label: 'Pedidos'},
    { data: [0, 3, 1, 2, 8, 1, 5], label: 'Entregados' }
  ];
  public lineChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',

  ];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(41, 98, 255,0.1)',
      borderColor: '#2962FF',
      pointBackgroundColor: '#2962FF',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2962FF'
    },
    {
      // dark grey
      backgroundColor: 'rgba(116, 96, 238,0.1)',
      borderColor: '#7460ee',
      pointBackgroundColor: '#7460ee',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#7460ee'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  ngAfterViewInit() {}
}
