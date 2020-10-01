import 'jquery';
import 'jquery-ui';
import $ from 'jquery';

// EXTERNALS
import 'bootstrap';
import 'bootstrap-datepicker';
import 'datatables.net';
import 'datatables.net-bs4';

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
  TABLESORTER,
} from './js/main';
import { validarFormPerfil } from './js/forms';

// Invocacion de funciones globales
SHOW_PASS();
MENU_DESPLEGABLE();
MENU_PRINCIPAL();
MODALS();
HEADER_MENUES();
DATEPICKER();
TABLESORTER();
