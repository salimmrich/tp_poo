import { Moto } from "./Moto";

export class Vehicule {

    private _type: string="";
    private _capacite_du_reservoir: number=0;
    private _niveau_de_carburant : number=0;
    private _klaxon :string="";
    private _consommation:number=0;
    private _vitesse_max :number=0;
    private _distance_parcourue:number=0;
    private _player_name:string="";
        
    



    public constructor(){
        
    }

    // Les getters et les setters

    get player_name() {
        return this._player_name;
      }
    set player_name(player_name:string){
        player_name=this._klaxon;
    }
    get klaxon() {
        return this._klaxon;
      }
    set klax(klax:string){
        klax=this._klaxon;
    }
    get type() {
        return this._type;
      }
    set type(type:string){
        type=this._type;
    }
    
    get niveau_de_carburant() {
        return this._capacite_du_reservoir;
      }
    set ndc(ndc:number){
        ndc=this._capacite_du_reservoir;
    }

    get capacite_du_reservoir() {
        return this._capacite_du_reservoir;
      }
    set cdr(cdr:number){
        cdr=this._capacite_du_reservoir;
    }

    // pour afficher le type de la véhicule
     afficher_Type(): void {
        console.log('type véhcule');
            console.log(`${this.type}`);
          }
        
    // méthode  mettre_carburant dans un véhicule 
     mettre_carburant(k:number): void {
        k=0;
        this.ndc=this.ndc+k;
        if(this.niveau_de_carburant>this.capacite_du_reservoir){
            this._niveau_de_carburant=this._capacite_du_reservoir;
            }

           if(this._niveau_de_carburant==this._capacite_du_reservoir)
           {
               console.log(`${this.klaxon}.`);
           }

         }
         
         
    // méthode rouler 
    
    let intervalID;
    function lancer_rouler() {
        intervalID = setInterval(rouler, 1000);
      }
      
    rouler(): void {
        
    this._distance_parcourue=this._distance_parcourue+this._vitesse_max;
    this._niveau_de_carburant=this.niveau_de_carburant-this._consommation;
    if(this.niveau_de_carburant==0){
        console.log("vous devez faire le plein");
    }
         }

    
         }



        
