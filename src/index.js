import 'jquery';
import 'jquery-ui';
import $ from 'jquery';

// EXTERNALS
import 'bootstrap';
import 'bootstrap-datepicker';
import 'datatables.net';
import 'datatables.net-bs4';
// import "datatables.net-select-dt";
import "datatables.net-fixedheader-dt";
import "datatables.net-rowreorder-dt";
import "datatables.net-colreorder-dt";

// STILES
import './scss/style.scss';

// PAGES
import './pug/index.pug';
import './pug/login.pug';

// ASSETS
import './assets/logo.svg';
import './assets/bg.png';

// JS
import {
  SHOW_PASS,
  MENU_DESPLEGABLE,
  MENU_PRINCIPAL,
  MODALS,
  HEADER_MENUES,
  DATEPICKER,
  DATA_TABLE,
  FILTRO,
  DESTACAR_FILA,
} from './js/main';

// Invocacion de funciones globales
window.SHOW_PASS = SHOW_PASS;
SHOW_PASS();
MENU_DESPLEGABLE();
MENU_PRINCIPAL();
window.MODALS = MODALS;
MODALS();
HEADER_MENUES();
window.DATEPICKER = DATEPICKER;
DATEPICKER();
DATA_TABLE();
FILTRO();
DESTACAR_FILA();
