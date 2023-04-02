export const generateMenu = (menu: any) => ({
  type: 'GENERATE_MENU',
  menu
});

export const toggleSideMenu = (isCollapse: boolean) => ({
  type: 'UPDATE_COLLAPSE',
  isCollapse
});
