var date = new Date();
var d = date.getDate(),
    m = date.getMonth(),
    y = date.getFullYear();

export default [{
    id: 0,
    title: 'All Day Event',
    start: new Date(y, m+1, 0),
    end: new Date(y, m+1, 1),
    allDay: true,
    style: {
        backgroundColor: '#f56954',
        borderColor: '#f56954'
    }
}, {
    id: 1,
    title: 'Long Event',
    start: new Date(y, m, d - 5),
    end: new Date(y, m, d - 2),
    style: {
        backgroundColor: '#f39c12',
        borderColor: '#f39c12'
    }
}, {
    id: 2,
    title: 'Meeting',
    start: new Date(y, m, d, 10, 30),
    end: new Date(y, m, d, 12, 30),
    style: {
        backgroundColor: '#0073b7',
        borderColor: '#0073b7'
    }
}, {
    id: 3,
    title: 'Lunch',
    start: new Date(y, m, d, 12, 0),
    end: new Date(y, m, d, 14, 0),
    allDay: false,
    style: {
        backgroundColor: '#00c0ef',
        borderColor: '#00c0ef'
    }
}, {
    id: 4,
    title: 'Birthday Party',
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    style: {
        backgroundColor: '#00a65a',
        borderColor: '#00a65a'
    }
}, {
    id: 5,
    title: 'Open Google',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: '//google.com/',
    style: {
        backgroundColor: '#3c8dbc',
        borderColor: '#3c8dbc'
    }
}];