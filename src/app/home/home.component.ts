import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  h1 = "Task Process List";
  li:any; 
  lis=[]; 
  constructor(private http : HttpClient){ 
      
} 

ngOnInit(): void { 
  this.http.get('https://run.mocky.io/v3/90892276-9b14-473b-972c-d6df1dfd7582') 
  .subscribe(Response => { 
  
    if(Response){   
      hideloader(); 
    } 
    console.log(Response) ;
    this.li=Response; 
    this.lis=this.li.List; 
  }); 
  function hideloader(){ 
    document.getElementById('loading').style.display = 'none';} 
}

}

