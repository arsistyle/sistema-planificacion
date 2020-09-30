import 'jquery';
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

const DATEPICKER = () => {
  const datepickers = document.querySelectorAll('.datepicker-input');

  (function ($) {
    $.fn.datepicker.dates['es'] = {
      days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      daysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      daysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      months: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthsShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      today: 'Hoy',
      monthsTitle: 'Meses',
      clear: 'Borrar',
      weekStart: 1,
      format: 'dd/mm/yyyy',
    };
  })($);

  datepickers.forEach((x, i) => {
    $(x).datepicker({
      language: 'es',
      autoclose: true,
      todayHighlight: true,
      toggleActive: true,
    });
  });
};
DATEPICKER();

const TABLESORTER = () => {
  $('#example').DataTable({
    language: {
      lengthMenu: 'Registros por página _MENU_',
      zeroRecords: 'Sin resultados',
      info: 'Mostrando página _PAGE_ de _PAGES_',
      infoEmpty: 'Sin registros disponibles',
      infoFiltered: '(filtered from _MAX_ total records)',
      loadingRecords: 'Cargando...',
      processing: 'Procesando...',
      search: 'Buscar:',
      // zeroRecords: 'Sin resultados',
      paginate: {
        first: 'Primero',
        last: 'Último',
        next: 'Siguiente',
        previous: 'Anterior',
      },
      aria: {
        sortAscending: ': activate to sort column ascending',
        sortDescending: ': activate to sort column descending',
      },
    },
  });
};
TABLESORTER();

const MENUTOGGLE = () => {
  const btns = document.querySelectorAll('[data-toggle]');
  const menues = document.querySelectorAll('.header__menu');
  const menuesActivos = document.querySelectorAll('.header__menu--active');
  btns.forEach((x) => {
    x.addEventListener('click', (e) => {
      e.stopPropagation();
      menues.forEach((x) => x.classList.remove('header__menu--active'));
      const menu = document.querySelector(e.currentTarget.getAttribute('data-toggle'));
      menu.classList.contains('header__menu--active')
        ? menu.classList.remove('header__menu--active')
        : menu.classList.add('header__menu--active');
    });
  });
  document.body.addEventListener('click', (e) => {
    menues.forEach((x) => x.classList.remove('header__menu--active'));
  });
  menues.forEach((x) => x.addEventListener('click', (e) => e.stopPropagation()));
};
MENUTOGGLE();
