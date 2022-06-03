import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITourCard } from '../Models/itour-card';
import { ITourDetails } from '../Models/itour-details';
import { ITourPatch } from '../Models/itour-patch';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { 
    
  };

  //*CRUD : READ
  //* ------ GET REQUESTS

  getAllEvents(): Observable<ITourCard[]>{
    return this.http.get<ITourCard[]>(`${this.apiUrl}/api/tournaments/events`);
  };

  getAllTourCards(): Observable<ITourCard[]>{
    return this.http.get<ITourCard[]>(`${this.apiUrl}/api/tournaments/tour-cards`);
  };

  getTourDetailsWithId(id: number): Observable<ITourDetails>{

    return this.http.get<ITourDetails>(
      `${this.apiUrl}/api/tournaments/with-id?id=${id}`
      );
    
  };

  findToursByContact(contactName:string): Observable<ITourCard[]>{
    return this.http.get<ITourCard[]>(
      `${this.apiUrl}/api/tournaments/by-contact?contact=${contactName}`
      );
  };

  findToursByName(name:string): Observable<ITourCard[]>{
    return this.http.get<ITourCard[]>(
      `${this.apiUrl}/api/tournaments/by-name?tourname=${name}`
      );
  };

  findToursByFormat(formatName:string): Observable<ITourCard[]>{
    return this.http.get<ITourCard[]>(
      `${this.apiUrl}/api/tournaments/by-format?format=${formatName}`
      );
  };

  paginateToPage(pageNumber: number = 0): Observable<ITourCard[]>{
    
    return this.http.get<ITourCard[]>(
      `${this.apiUrl}/api/tournaments/per-page?page=${pageNumber}`
      );
  };

  //* CRUD : UPDATE
  //* ---- PATCH & PUT REQUEST
  
  updateTournament(tournament: ITourPatch): Observable<ITourPatch>{

    const body: ITourPatch = {
     ...tournament,
    }

    return this.http.patch<ITourPatch>(
      `${this.apiUrl}/api/tournaments/update?id=${tournament.id}`,
       body,
       );
  };

  //*CRUD : DELETE
  //* ----- DELETE REQUEST
  deleteTournament(id: number){
    return this.http.delete(`${this.apiUrl}/api/tournaments/${id}`);
    // return this.http.delete(`${this.apiUrl}/api/tournaments/delete-id?id=${id}`);
  };

}
