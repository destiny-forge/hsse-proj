import React, { Component } from 'react';

// Datatables
require('datatables.net-bs')
require('datatables.net-bs4/js/dataTables.bootstrap4.js')
require('datatables.net-bs4/css/dataTables.bootstrap4.css')
require('datatables.net-buttons')
require('datatables.net-buttons-bs')
require('datatables.net-responsive')
require('datatables.net-responsive-bs')
require('datatables.net-responsive-bs/css/responsive.bootstrap.css')
require('datatables.net-buttons/js/buttons.colVis.js') // Column visibility
require('datatables.net-buttons/js/buttons.html5.js') // HTML 5 file export
require('datatables.net-buttons/js/buttons.flash.js') // Flash file export
require('datatables.net-buttons/js/buttons.print.js') // Print view button
require('datatables.net-keytable');
require('datatables.net-keytable-bs/css/keyTable.bootstrap.css')
require('jszip/dist/jszip.js');
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');

require('datatables.net-select-bs');
require('datatables.net-select-bs/css/select.bootstrap.css');

require('datatables.net-buttons-bs/css/buttons.bootstrap.css');


export default class Datatable2 extends Component {

    componentDidMount() {
        
    }

    componentWillUnmount() {
        $(this.tableElement).dataTable({destroy: true});
    }

    setRef = node => this.tableElement = node;

    render() {
        return (
            <table className="table table-striped my-4 w-100" ref={el => this.el = el} />
        )
    }
}
