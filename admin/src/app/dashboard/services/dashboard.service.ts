import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  async getDataDashboard(){
    Swal.fire({
      title: 'Por favor espere',
      text: 'Consultando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });

    let respuesta  
    const headers = new HttpHeaders(environment.header_api)
    let body = {}
    const url = `${environment.url_base}pedidos/getPedidosCreados.php`
    await this.http.post(url, body, { headers }).toPromise()
    .then((data:any)=>{
      Swal.close()
      respuesta = data
    })
    .catch((error)=>{
      Swal.close()
       respuesta = []
      })
      
      return respuesta
  }

  async getRepartidores(){
    Swal.fire({
      title: 'Por favor espere',
      text: 'Consultando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });

    let respuesta = [] 
    const headers = new HttpHeaders(environment.header_api)
    let body = {}
    const url = `${environment.url_base}pedidos/getRepartidores.php`
    await this.http.post(url, body, { headers }).toPromise()
    .then((data:any)=>{
      Swal.close()
      respuesta = data
    })
    .catch((error)=>{
      Swal.close()
       respuesta = []
      })
      
      return respuesta
  }


  async asignarRepartidor(repartidor , pedido){
 
    let respuesta = [] 
    const headers = new HttpHeaders(environment.header_api)
    let body = {
      id_pedido:pedido,
      id_repartidor:repartidor
    }
    const url = `${environment.url_base}pedidos/asignarPedidoRepartidor.php`
    await this.http.post(url, body, { headers }).toPromise()
    .then((data:any)=>{
 
      respuesta = data
    })
    .catch((error)=>{
 
       respuesta = []
      })
      
      return respuesta
  }


  async getEstadisticas(){
    let respuesta  
    const headers = new HttpHeaders(environment.header_api)
    let body = {}
    const url = `${environment.url_base}pedidos/getEstadisticas.php`
    await this.http.post(url, body, { headers }).toPromise()
    .then((data:any)=>{
      respuesta = data
    })
    .catch((error)=>{
     
       respuesta = {}
      })
      
      return respuesta
  }
}
