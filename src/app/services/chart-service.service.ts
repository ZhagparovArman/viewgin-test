import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {rests} from '../rests'
import { Donut, Graph } from '../models/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getGraph(){
    return this.http.get<Graph>(rests.rest_graph)
  }

  getDonut(){
    return this.http.get<Donut>(rests.rest_donut)
  }
}
