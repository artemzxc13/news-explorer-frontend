import BaseEventsHandler from '../../../scripts/components/BaseEventsHandler';
import Button from '../../../scripts/components/Button';

import { getAuthState, cleanRootSection } from '../../../scripts/utils/helpers';

import { buttonsLazyEventList } from './base-events-handler-settings';


export const headerScreenNavigationOptions = {
  rootSectionClass: 'navigation_place_header',
  navigationItemList: [
    {
      needAuthorization: false,
      itemClassList: [
        'navigation__item',
        'navigation__item_place_header',
      ],
      linkClassList: ['navigation__link', 'navigation__link_theme_dark'],
      href: './index.html',
      linkText: 'Главная',
    },
    {
      needAuthorization: false,
      itemClassList: [
        'navigation__item',
        'navigation__item_place_header',
        'navigation__item_border_dark',
      ],
      linkClassList: ['navigation__link', 'navigation__link_theme_dark'],
      href: './articles.html',
      linkText: 'Сохраненные статьи',
    },
  ],
  loginButton: {
    itemClassList: ['navigation__item', 'navigation__item_place_header'],
    buttonClassList: [
      'button',
      'button__text',
      'button_type_screen-main-action',
      'button_border_dark',
    ],
    buttonId: 'button-login-screen',
    buttonInnerContent: 'Авторизоваться',
  },
  logoutButton: {
    itemClassList: ['navigation__item', 'navigation__item_place_header'],
    buttonClassList: [
      'button',
      'button__text',
      'button_type_screen-main-action',
      'button_border_dark',
    ],
    buttonId: 'button-logout-screen',
    buttonInnerContent: 'Грета&nbsp;<svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H2v12h4v2H2a2 2 0 01-2-2V2a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459L9.293 2.94l4.293 4.134H4V9h9.586z" fill="#1A1B22"/></svg>',
  },
  getAuthState,
  cleanRootSection,
  observerConfig: {
    childList: true,
    subtree: true,
  },
  observer: new BaseEventsHandler(buttonsLazyEventList, Button),
};

export const headerMobileNavigationOptions = {
  rootSectionClass: 'navigation_place_mobile-menu',
  navigationItemList: [
    {
      needAuthorization: false,
      itemClassList: [
        'navigation__item',
        'navigation__item_place_mobile-menu',
      ],
      linkClassList: ['navigation__link', 'navigation__link_theme_dark'],
      href: './index.html',
      linkText: 'Главная',
    },
    {
      needAuthorization: true,
      itemClassList: [
        'navigation__item',
        'navigation__item_place_mobile-menu',
        'navigation__item_underline',
      ],
      linkClassList: ['navigation__link', 'navigation__link_theme_dark'],
      href: './articles.html',
      linkText: 'Сохраненные статьи',
    },
  ],
  loginButton: {
    itemClassList: ['navigation__item', 'navigation__item_place_mobile-menu'],
    buttonClassList: [
      'button',
      'button__text',
      'button_type_mobile-main-action',
      'button_border_dark',
    ],
    buttonId: 'button-login-mobile',
    buttonInnerContent: 'Авторизоваться',
  },
  logoutButton: {
    itemClassList: ['navigation__item', 'navigation__item_place_mobile-menu'],
    buttonClassList: [
      'button',
      'button__text',
      'button_type_mobile-main-action',
      'button_border_dark',
    ],
    buttonId: 'button-logout-mobile',
    buttonInnerContent: 'Грета&nbsp;<svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H2v12h4v2H2a2 2 0 01-2-2V2a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459L9.293 2.94l4.293 4.134H4V9h9.586z" fill="#1A1B22"/></svg>',
  },
  getAuthState,
  cleanRootSection,
  observerConfig: {
    childList: true,
    subtree: true,
  },
  observer: new BaseEventsHandler(buttonsLazyEventList, Button),
};