import { Subject } from 'rxjs';

export class listeService {

  villeSubject = new Subject<any[]>();

     villes = [
        {
          id: 1,
          nom: 'Paris',
          pays: 'France',
          population: 2165423,
          latitude: 48.856614,
          longitude: 2.3522219,
        },
        {
          id: 2,
          nom: 'Madrid',
          pays: 'Espagne',
          population: 3305000,
          latitude: 40.4167754,
          longitude: -3.7037902,
        },
        {
          id: 3,
          nom: 'Bruxelles',
          pays: 'Belgique',
          population: 1222637,
          latitude: 50.850340,
          longitude: 4.351710,
        },
        {
          id: 4,
          nom: 'Rome',
          pays: 'Italie',
          population: 2764000,
          latitude: 41.902784,
          longitude: 12.496366,
        },
        {
          id:5,
          nom: 'Berne',
          pays: 'Suisse',
          population: 141156,
          latitude: 46.9479222,
          longitude: 7.4446085,
        }
      ];

      emitVilleSubject() {
        this.villeSubject.next(this.villes.slice());
      }

      getVilleById(id: number) {
        const ville = this.villes.find(
          (villeObject) => {
            return villeObject.id === id;
          }
        );
        return ville;
      }

      addVille(nom: string, pays: string, population: number, latitude: number, longitude: number) {
        const villeObject = {
          id: 0,
          nom: '',
          pays: '',
          population: 0,
          latitude: 0,
          longitude: 0
        };
        villeObject.nom = nom;
        villeObject.pays = pays;
        villeObject.population = population;
        villeObject.latitude = latitude;
        villeObject.longitude = longitude;
        villeObject.id = this.villes[(this.villes.length - 1)].id + 1;

        this.villes.push(villeObject);
        this.emitVilleSubject();
      }

      editVille(nom: string, pays: string, population: number, latitude: number, longitude: number) {
        const villeUpdate = this.villes.findIndex((ville => ville.id === 1));
        console.log("Before update: ", this.villes[villeUpdate]);
        this.villes[villeUpdate].nom = nom;
        this.villes[villeUpdate].pays = pays;
        this.villes[villeUpdate].population = population;
        this.villes[villeUpdate].latitude = latitude;
        this.villes[villeUpdate].longitude = longitude;
        console.log("After update: ", this.villes[villeUpdate]);

        }


      removeVille(key: number) {
        this.villes.forEach((value, index) => {
          if(value.id==key) this.villes.splice(index,1);
        })
      }

}

