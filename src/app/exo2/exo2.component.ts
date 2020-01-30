import { Component, OnInit, Input } from '@angular/core';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component implements OnInit {

  constructor() { }

  ListeFilms :  [

       { Title : ''} 
  ] ; 

  data: Observable<any> ; 
  
  FirstMovieID  ;


  ngOnInit() {

     this.data = new Observable(observer => {

      observer.next(1) ; 

      
    } ) ;

    let myObservable = this.data.subscribe(value =>{
    
      this.getMovies() ;
      
     }, error => {

    console.log(error);
  
   }) ; 



  }


  getMovies(){
     
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=f8fe8f12526e03d58465bd12e1fe4781&fbclid=IwAR1l-8s42DGV2DkAPZP0i_M94vOTLelFED6ete-Ck6tBtqi-27A873wsAIQ' )
    
    .then(response => response.json() )
    
    .then(res => { this.ListeFilms = res.results , this.FirstMovieID = res.results[0].id  }) ;

 
    //.then(liste => console.log(liste.results[0] ) ) ;
    
   }

}
