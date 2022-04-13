import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
// interface Task_Type {
//   username: any;
//   name: any;
//   honor: any;
//   clan: any;
//   leaderboardPosition: any;
//   skills: [any];
//   ranks: {
//     overall: {
//       rank: any;
//       name: any;
//       color: any;
//       score: any;
//     };
//     languages: {
//       javascript: {
//         rank: any;
//         name: any;
//         color: any;
//         score: any;
//       };
//       ruby: {
//         rank: any;
//         name: any;
//         color: any;
//         score: any;
//       };
//       coffeescript: {
//         rank: any;
//         name: any;
//         color: any;
//         score: any;
//       };
//     };
//   };
//   codeChallenges: {
//     totalAuthored: any;
//     totalCompleted: any;
//   };
// }
interface Task_Type {
  user: any;
}

@Injectable({
  providedIn: 'root',
})
export class CodewarService {
  // https://www.codewars.com/api/v1/users/Alen_Andry

  private apiUrl = 'https://www.codewars.com/api/v1/users/{}';

  constructor(private http: HttpClient) {}

  get_tasks(): Observable<Task_Type[]> {
    return this.http.get<Task_Type[]>(this.apiUrl);
  }
  // deleteTask(task: Task_Type): Observable<Task_Type> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.delete<Task_Type>(url);
  // }

  // updateTaskReminder(task: Task_Type): Observable<Task_Type> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.put<Task_Type>(url, task, httpOptions);
  // }

  get_data(task: Task_Type): Observable<Task_Type> {
    return this.http.post<Task_Type>(this.apiUrl, task, httpOptions);
  }
}
