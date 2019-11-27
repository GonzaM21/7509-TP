import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';

const styles = theme => ({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    table: {
        '& .ReactVirtualized__Table__headerRow': {
            flip: false,
        },
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },
});

class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
        headerHeight: 60,
        rowHeight: 60,
    };

    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight }}
                align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        gridStyle={{
                            direction: 'inherit',
                        }}
                        headerHeight={headerHeight}
                        className={classes.table}
                        {...tableProps}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={headerProps =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

MuiVirtualizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            dataKey: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            numeric: PropTypes.bool,
            width: PropTypes.number.isRequired,
        }),
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
    ['Cliente 1', "Baja","Producto1 V2.0", "21/10/2019"],
    ['Cliente 2', "Media", "Producto2 V3.1", "22/9/2019"],
    ['Cliente 3', "Alta", "Producto3 V1.0.1", "10/10/2019"],
    ['Cliente 4', "Media" , "Producto4 V1.0.2", "25/10/2019"],
    ['Cliente 5', "Baja" , "Producto2 V3.0", "17/7/2019"],
    ['Cliente 6', "Alta", "Producto1 V1.5", "21/5/2018"],
    ['Cliente 7', "Alta", "Producto5 V5.0.3", "22/11/2019"],
    ['Cliente 8', "Media", "Producto7 V7.0", "21/01/2019"],
    ['Cliente 9', "Media", "Producto6 V2.0", "15/02/2019"],
    ['Cliente 10',"Baja", "Producto8 V1.0", "09/04/2019"],


];

function createData(id, clientes, prioridad,productos, fecha) {
    return { id, clientes, prioridad,productos, fecha };
}

const rows = [];

for (let i = 0; i < 20; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
}

export default function ReactVirtualizedTable() {
    return (
        <Paper style={{ paddingLeft:"10%",paddingRight:"10%",paddingTop:"3%",height: 800, width: '100%' }}>
            <VirtualizedTable
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
                columns={[
                    {
                        width: 100,
                        label: 'Clientes',
                        dataKey: 'clientes',
                    },
                    {
                        width: 400,
                        label: 'Prioridad',
                        dataKey: 'prioridad',
                        numeric: true,
                    },
                    {
                        width: 400,
                        label: 'Productos',
                        dataKey: 'productos',
                        numeric: true,
                    },
                    {
                        width: 400,
                        label: 'Fecha de adquisición',
                        dataKey: 'fecha',
                        numeric: true,
                    },
                ]}
            />
        </Paper>
    );
}