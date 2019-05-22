import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL="http://localhost:7070/api"

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) { }

  getAllMarker(){
    return this.http.get(API_URL+"/tb_marker");
  }
  getAllMarkerById(id){
    return this.http.get(API_URL+"/tb_marker/"+id);
  }
  updateMarker(obj){
    return this.http.put(API_URL+"/tb_marker/"+obj.id,obj);
  }
  deleteMarker(id){
    return this.http.delete(API_URL+"/tb_marker/"+id);
  }
  addMarker(obj){
    return this.http.post(API_URL+"/tb_marker",obj);
  }
}
