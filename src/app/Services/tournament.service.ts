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

  private apiUrl: String;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
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

    return this.http.get<ITourDetails>(`${this.apiUrl}/api/tournaments/with-id?id=${id}`);
    
  };

  findToursByContact(contactName:String): Observable<ITourCard[]>{
    return this.http.get<ITourCard[]>(`${this.apiUrl}/api/tournaments/by-contact?contact=${contactName}`);
  };

  findToursByName(name:String): Observable<ITourCard[]>{
    return this.http.get<ITourCard[]>(
      `${this.apiUrl}/api/tournaments/by-name?tourname=${name}`
      );
  };

  findToursByFormat(formatName:String): Observable<ITourCard[]>{
    return this.http.get<ITourCard[]>(
      `${this.apiUrl}/api/tournaments/by-format?format=${formatName}`
      );
  };

  paginateToPage(pageNumber: number): Observable<ITourCard[]>{
    pageNumber = 0;

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
    return this.http.delete(`${this.apiUrl}/api/tournaments/delete-id?id=${id}`);
  };

}
