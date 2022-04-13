import { Injectable } from '@angular/core';
import ui_data from './ui-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  get_data(): any {
    let data = ui_data;
    let sorted_by_date_data_new_last: any = data.sort((a, b) => {
      var dateA = new Date(a.date).getTime();
      var dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
    let add_num_data = sorted_by_date_data_new_last.map((a: any, i: any) => {
      return {
        num: i.toString(),
        date: a.date,
        title: a.title,
        content: a.content,
        category: a.category,
      };
    });
    // console.log(add_num_data);

    let sorted_by_date_data_new_frist: any = data.sort((a: any, b: any) => {
      var dateA = new Date(a.date).getTime();
      var dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    return sorted_by_date_data_new_frist;
  }
}
