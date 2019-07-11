import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        
    },
    chip: {
        margin: theme.spacing(1),
    },
}));

export default function UTSChip(props) {
    const classes = useStyles();
    const [skills, setSkills] = React.useState(props.skills);

    const ListaSkills = skills.map((data, i) => (
        <Chip
            key={i}
            size="small"
            label={data}
            color="primary"
        />
    ))

    return (
        <div className={classes.root}>
            {ListaSkills}
        </div>
    );
}