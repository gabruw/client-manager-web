//#region Imports

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Fork from 'assets/images/fork-icon.png';
import React from 'react';
import useStyles from './styles';

//#endregion

const InfoTable = ({ content }) => {
    const styles = useStyles();

    return (
        <Table size='small'>
            <TableHead>
                <TableRow>
                    <TableCell align='center'>
                        <Tooltip
                            arrow
                            placement='top'
                            title={<Typography variant='h6'>Quantia de visualizações</Typography>}
                        >
                            <VisibilityIcon className={styles.views} />
                        </Tooltip>
                    </TableCell>

                    <TableCell align='center'>
                        <Tooltip title={<Typography variant='h6'>Quantia de fork's</Typography>} placement='top' arrow>
                            <img src={Fork} alt='fork' />
                        </Tooltip>
                    </TableCell>

                    <TableCell align='center'>
                        <Tooltip
                            arrow
                            placement='top'
                            title={<Typography variant='h6'>Quantia de favoritos</Typography>}
                        >
                            <StarIcon className={styles.favorites} />
                        </Tooltip>
                    </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                <TableRow>
                    <TableCell align='center'>{content.watchers_count}</TableCell>
                    <TableCell align='center'>{content.forks_count}</TableCell>
                    <TableCell align='center'>{content.stargazers_count}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default InfoTable;
