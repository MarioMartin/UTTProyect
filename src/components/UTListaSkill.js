import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function UTListaSkill(props) {
    const classes = useStyles();
    const lista = props.skills.map((data, i) => (
        <ListItem button key={i}>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={data.Skill} />
        </ListItem>
    ));

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="Main mailbox folders">
                {lista}
            </List>

        </div>
    );
}