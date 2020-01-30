import { Component, OnInit, ViewChild , ElementRef } from '@angular/core';


import {Observable} from 'rxjs';




@Component({
     
    selector : 'app-exo1' ,

    templateUrl: './exo1.component.html',
    styleUrls: ['./exo1.component.css']

}) 

export class Exo1Component implements OnInit {

    // J'ai Utiliser Deux type d'horloge numérique et analogique 


    constructor() { }

    data : Observable<any> ; 
   
    /*
    seconde = 0   ; 

    minute = 0   ; 

    heure = 0   ; 
   
    */
    getDate : Date ;

   @ViewChild('heureAnalogique' , {static: false }) heureAnalogique : ElementRef ; 
   @ViewChild('minuteAnalogique' , {static: false }) minuteAnalogique : ElementRef ;
   @ViewChild('secondeAnalogique' , {static: false }) secondeAnalogique : ElementRef ;

    ngOnInit() {

      this.data = new Observable(observer => {

        setInterval(() => {
              
              observer.next(1) ; 

            }, 1000);

          

            /*setTimeout(() => {
              
                observer.complete() ; 
  
              }, 2000); */ 

    } ) ;

   let myObservable = this.data.subscribe(value =>{
 
         this.updateClock(new Date() ) ; 
         
         /*  this.getDate = new Date() ; 

         this.seconde == this.getDate.getSeconds() ;

         this.minute == this.getDate.getMinutes() ;

         this.heure == this.getDate.getHours () ;
         */


         // this.Test( value )  ; 

   }, error => {

     console.log(error);
   
    }) ; 

  } ;


  updateClock(date){

    this.secondeAnalogique.nativeElement.style.transform = 'rotate('+date.getSeconds() * 6  + 'deg)' ; 
    
    this.minuteAnalogique.nativeElement.style.transform = 'rotate('+date.getMinutes() * 6  + 'deg)' ; 

    this.heureAnalogique.nativeElement.style.transform = 'rotate('+ ( date.getHours () * 30 + date.getMinutes() * 0.5 )   + 'deg)' ;
    
  
}


    
    
  


}