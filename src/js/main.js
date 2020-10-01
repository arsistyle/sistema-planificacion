/**
 * Datepicker
 */

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

/**
 * TableSorter
 */
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

/**
 * MenuToggle
 */
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

/**
 * Menú desplegable
 */
const MENU_DESPLEGABLE = () => {
  let active = false;
  const menues = $('.menu-desplegable');

  if (menues.length) {
    menues.each((i, el) => {
      $(el).find('ul').addClass('submenu');
      $(el).find('> ul').addClass('submenu--uno');
      $(el)
        .find('.submenu--uno > li')
        .has('ul')
        .each((i, el) => {
          if ($(el).hasClass('abierto')) active = i;
          else active = false;
        });
      let abrirSubmenu0 = $(el).find('.submenu--uno > li:has(ul) > a');
      $(el)
        .find('.submenu--uno')
        .accordion({
          animate: 200,
          active: active,
          collapsible: true,
          heightStyle: 'content',
          header: abrirSubmenu0,
          icons: {
            header: 'open',
            activeHeader: 'opened',
          },
        });
      $(el).find('.submenu--uno > li > ul').addClass('submenu--dos');
      active = false;
      $(el)
        .find('.submenu--dos li')
        .has('ul')
        .each((i, el) => {
          if ($(el).hasClass('abierto')) active = i;
          else active = false;
        });
      let abrirSubmenu1 = $(el).find('.submenu--dos > li:has(ul) > a');
      $(el)
        .find('.submenu--dos')
        .accordion({
          animate: 200,
          active: active,
          collapsible: true,
          heightStyle: 'content',
          header: abrirSubmenu1,
          icons: {
            header: 'open',
            activeHeader: 'opened',
          },
        });
      $(el).find('.submenu--dos > li > ul').addClass('submenu--tres');
      active = false;
      $(el)
        .find('.submenu--tres li')
        .has('ul')
        .each((i, el) => {
          if ($(el).hasClass('abierto')) active = i;
          else active = false;
        });
      let abrirSubmenu2 = $(el).find('.submenu--tres > li:has(ul) > a');
      $(el)
        .find('.submenu--tres')
        .accordion({
          animate: 200,
          active: active,
          collapsible: true,
          heightStyle: 'content',
          header: abrirSubmenu2,
          icons: {
            header: 'open',
            activeHeader: 'opened',
          },
        });
    });
  }
};
MENU_DESPLEGABLE();
