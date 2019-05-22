import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { AppserviceService } from '../app/appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps-marking';

  zoom: number = 15;
  lat: any;
  lng: any;
  lati:any;
  arrMap: mark[];
  indexke:any;
  showdetail=true;
  infoWindowOpened = null;

  ModelMap=[{idmarker:null,nama:null,lat:null,lng:null,tipe:null}];

  constructor(private mapMarker:AppserviceService){
    if (navigator){
      navigator.geolocation.getCurrentPosition(
        pos=>{
          this.lat = +pos.coords.latitude;
          this.lng = +pos.coords.longitude;
        }
      )
    }
  }

  

  clickedMarker(label: string, infoWindow, index: number) {
    console.log(`clicked the marker: ${label || index}`)
    this.indexke=index;
    this.lati=this.markers[this.indexke].lat
    console.log("indexke",this.indexke);
    console.log("latke",this.lat)
    console.log("model",this.ModelMap)
    
    if( this.infoWindowOpened ===  infoWindow)
    return;
    
  if(this.infoWindowOpened !== null)
    this.infoWindowOpened.close();
    
  this.infoWindowOpened = infoWindow;
}
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    this.mapMarker.addMarker(this.markers).subscribe(
      (res:any)=>{
        console.log("res=>",res)
       
      }
    )
    console.log("thismarker", this.markers)
    
    // this.arrMap.push({idmarker:null,nama:null,lat:$event.coords.lat,lng:$event.coords.lng,tipe:null})
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  hapus(a){
    a=this.indexke;
    this.markers.splice(a, 1);
    console.log("latit",this.lat)
  }

  markers: marker[] = [
	  {
		  lat:  -7.2432,
		  lng: 112.7413,
		  label: 'A',
		  draggable: true
	  },
	  // {
		//   lat: 112.7413,
		//   lng: -7.2432,
		//   label: 'B',
		//   draggable: false
	  // },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
interface mark {
  idmarker:number;
  nama:string;
	lat: number;
	lng: number;
	tipe:string;
	
}
