import { lazy } from 'react';

const AllRecords = lazy(() => import('~/src/containers/AllRecords'));
const CreateRecord = lazy(() => import('~/src/containers/CreateRecord'));
const EditRecord = lazy(() => import('../containers/EditRecord'));

const routes = [
    {
        state: 'records',
        path: '/',
        exact: true,
        name: 'All records',
        component: AllRecords
    },
    {
        state: 'records.create',
        path: '/create',
        exact: true,
        name: 'Create record',
        component: CreateRecord
    },
    {
        state: 'records.edit',
        path: '/edit/:id',
        exact: true,
        name: 'Edit record',
        component: EditRecord
    },
];

export default routes;