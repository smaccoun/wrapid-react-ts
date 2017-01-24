const routes = [
    { name: 'Login', path: '/Login'},
    { name: 'ExtraPortal', path: '/ExtraPortal', children: [
        { name: 'DailyTasks', path: '/DailyTasks'},
        { name: 'ProfileWizard', path: '/ProfileWizard'}
    ]}
];

export default routes
