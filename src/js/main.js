/**
 * Password
 */
export const SHOW_PASS = () => {
  const group = document.querySelectorAll('.show-pass');
  const off = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z"/>
                  <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"/>
                </svg>`;
  const on = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
                <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>`;
  group.forEach((x) => {
    const input = x.querySelector('input');
    const btn = x.querySelector('.show-pass__btn');
    btn.addEventListener('click', (e) => {
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        btn.innerHTML = on;
      } else {
        input.setAttribute('type', 'password');
        btn.innerHTML = off;
      }
    });
  });
};

/**
 * Menú principal
 */
export const MENU_PRINCIPAL = () => {
  const btn = document.querySelector('.abrir-menu');
  const menu = document.querySelector('.menu');
  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('menu--active');
    });
    menu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    document.body.addEventListener('click', (e) => {
      menu.classList.remove('menu--active');
    });
  }
};

/**
 * MenuToggle para los menus del header
 */
export const HEADER_MENUES = () => {
  const btns = document.querySelectorAll('[data-toggle-menu]');
  const menues = document.querySelectorAll('.header__menu');
  // const menuesActivos = document.querySelectorAll('.header__menu--active');
  if (btns.length && menues.length) {
    btns.forEach((x) => {
      x.addEventListener('click', (e) => {
        e.stopPropagation();
        menues.forEach((x) => x.classList.remove('header__menu--active'));
        const menu = document.querySelector(e.currentTarget.getAttribute('data-toggle-menu'));
        // console.log(menu)
        if (menu) {
          menu.classList.contains('header__menu--active')
            ? menu.classList.remove('header__menu--active')
            : menu.classList.add('header__menu--active');
        }
      });
    });
    document.body.addEventListener('click', (e) => {
      menues.forEach((x) => x.classList.remove('header__menu--active'));
    });
    menues.forEach((x) => x.addEventListener('click', (e) => e.stopPropagation()));
  }
};

/**
 * Menú desplegable
 */
export const MENU_DESPLEGABLE = () => {
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
          // console.log($(el).find('> a').hasClass('opened'));
          if ($(el).find('> a').hasClass('opened')) active = i;
          // else active = false;
        });
      let abrirSubmenu0 = $(el).find('.submenu--uno > li:has(ul) > a');
      abrirSubmenu0.append(
        '<svg xmlns="http://www.w3.org/2000/svg" class="menu__icon" width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M1 1L6.1 5.4 11.1 1" style="stroke-width:2;stroke:white"/></svg>'
      );
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
          if ($(el).find('> a').hasClass('opened')) active = i;
          // else active = false;
        });
      let abrirSubmenu1 = $(el).find('.submenu--dos > li:has(ul) > a');
      abrirSubmenu1.append(
        '<svg xmlns="http://www.w3.org/2000/svg" class="menu__icon" width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M1 1L6.1 5.4 11.1 1" style="stroke-width:2;stroke:white"/></svg>'
      );
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
          if ($(el).find('> a').hasClass('opened')) active = i;
          // else active = false;
        });
      let abrirSubmenu2 = $(el).find('.submenu--tres > li:has(ul) > a');
      abrirSubmenu2.append(
        '<svg xmlns="http://www.w3.org/2000/svg" class="menu__icon" width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M1 1L6.1 5.4 11.1 1" style="stroke-width:2;stroke:white"/></svg>'
      );
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

/**
 * Modals
 */
export const MODALS = () => {
  const open = document.querySelectorAll('[data-modal-open]');
  const close = document.querySelectorAll('[data-modal-close]');
  if (open || close) {
    open.forEach((x) => {
      x.addEventListener('click', (e) => {
        const target = $(e.currentTarget.getAttribute('href'));
        let backdrop = target.attr('backdrop') ? target.attr('backdrop') : true;
        let show = target.attr('show') ? Boolean(target.attr('show')) : true;
        target.modal({ backdrop, show });
        return false;
      });
    });
    close.forEach((x) => {
      x.addEventListener('click', (e) => {
        // console.log(e)
        const target = $(e.currentTarget.getAttribute('href'));
        target.modal('hide');
        return false;
      });
    });
  }
};

/**
 * Datepicker
 */

export const DATEPICKER = () => {
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

/**
 * TableSorter
 */
export const DATA_TABLE = () => {
  $('.data-table').DataTable({
    responsive: true,
    dom:
      '<"top"<"row"<"col-sm-12 col-md-5"i><"col-sm-12 col-md-7"f>>>rt<"row"<"col-sm-12 col-md-5"l><"col-sm-12 col-md-7"p>>',
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

/**
 * Filtro
 */

export const FILTRO = () => {
  const btns = document.querySelectorAll('[data-filtro]');
  if (btns.length) {
    btns.forEach((x) => {
      const filtro = document.querySelector(x.getAttribute('data-filtro'));
      const cerrar = filtro.querySelector('[data-filtro-cerrar]');
      x.addEventListener('click', (e) => {
        filtro.classList.toggle('active');
      });
      if (cerrar) {
        cerrar.addEventListener('click', (e) => {
          filtro.classList.remove('active');
        });
      }
    });
  }
};
