export default function () {
  return [
    {
      title: ' Dashboard',
      to: {
        path: '/admin/dashboard',
      },
      htmlBefore: '<i class="far fa-chart-bar fa-lg"></i>',
      htmlAfter: '',
    },
    {
      title: ' Users',
      htmlBefore: '<i class="fas fa-users-cog fa-lg"></i>',
      items: [
        {
          title: ' List all',
          htmlBefore: '<i class="fas fa-users"></i>',
          to: {
            path: '/admin/users/list/all',
          },
        },
        {
          title: ' Manual import',
          htmlBefore: '<i class="fas fa-file-import"></i>',
          to: {
            path: '/admin/users/manage/import',
          },
        }
      ]
    }
  ];
}
