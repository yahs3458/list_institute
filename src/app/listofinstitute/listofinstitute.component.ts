import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listofinstitute',
  templateUrl: './listofinstitute.component.html',
  styleUrls: ['./listofinstitute.component.scss']
})
export class ListofinstituteComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 1, rows: 1 },
          {  cols: 1, rows: 1 },
          {  cols: 1, rows: 1 },
          {  cols: 1, rows: 1 }
        ];
      }

      return [
        {  cols: 2, rows: 1 },
        {  cols: 1, rows: 1 },
        { cols: 1, rows: 2 },
        {  cols: 1, rows: 1 }
      ];
    })
  );
}
