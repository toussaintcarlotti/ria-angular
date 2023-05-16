import {Component, Input} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() events: any = [];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    editable: true,
    droppable: true,
    timeZone: 'UTC',
    locale: 'fr',
    headerToolbar: {
      start: "prev,today,next",
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    buttonText: {
      today:    'Aujourd\'hui',
      month:    'Mois',
      week:     'Semaine',
      day:      'Jour',
      list:     'Liste'
    },
    eventClick: function (info) {
      var eventObj = info.event;
      $('#modalTitle1').html(eventObj.title);
      // @ts-ignore
      $('#modalBody1').html(eventObj._def.extendedProps.description);
      $('#eventUrl').attr('href', eventObj.url);
      // @ts-ignore
      $('#fullCalModal').modal("show");
    },
  };


}
