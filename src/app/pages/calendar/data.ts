import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
export function createEventId() {
    return String(eventGuid++);
}

const category = [
    {
        name: 'Peligro',
        value: 'bg-danger'
    },
    {
        name: 'Con Exito',
        value: 'bg-success'
    },
    {
        name: 'Principal',
        value: 'bg-primary'
    },
    {
        name: 'Información',
        value: 'bg-info'
    },
    {
        name: 'Oscuro',
        value: 'bg-dark'
    },
    {
        name: 'Advertencia',
        value: 'bg-warning'
    },
];

const calendarEvents: EventInput[] = [
    {
        id: createEventId(),
        title: 'Meeting',
        start: new Date().setDate(new Date().getDate() + 1),
        end: new Date().setDate(new Date().getDate() + 2),
        className: 'bg-warning text-white',
    },
    {
        id: createEventId(),
        title: 'Lunch',
        start: new Date(),
        end: new Date(),
        className: 'bg-success text-white',
    },
    {
        id: createEventId(),
        title: 'Birthday - party',
        start: new Date().setDate(new Date().getDate() + 8),
        className: 'bg-info text-white',
    },
    {
        id: createEventId(),
        title: 'Long Event',
        start: new Date().setDate(new Date().getDate() + 7),
        end: new Date().setDate(new Date().getDate() + 8),
        className: 'bg-primary text-white'
    }
];

export { category, calendarEvents };
