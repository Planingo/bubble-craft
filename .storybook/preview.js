import '../Theme/antd.customize.less'
// import results from '../.jest-test-results.json';
export const parameters = {
    options: {
        storySort: (a, b) =>
        a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
        isToolshown: true,
    },
}

export const globalTypes = {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'fr',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fr', right: '🇫🇷', title: 'Français' },
        ],
      },
    },
  };
  