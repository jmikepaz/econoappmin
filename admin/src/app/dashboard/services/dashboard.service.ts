import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  async getDataDashboard(){
    let respuesta  
    const headers = new HttpHeaders(environment.header_api)
    let body = {}
    const url = `${environment.url_base}pedidos/getPedidosCreados.php`
    await this.http.post(url, body, { headers }).toPromise()
    .then((data:any)=>{
      respuesta = data
    })
    .catch((error)=>{
     
       respuesta = []
      })
      
      return respuesta
  }
}
