// @ts-nocheck
//#region Imports

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

//#endregion

const UserInfoTable = ({ content }) => (
    <Table size='small'>
        <TableBody>
            <TableRow>
                <TableCell align='left'>Id</TableCell>
                <TableCell align='center'>{content.id}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left'>Login</TableCell>
                <TableCell align='center'>{content.login}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left'>Tipo</TableCell>
                <TableCell align='center'>{content.type}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export default UserInfoTable;
