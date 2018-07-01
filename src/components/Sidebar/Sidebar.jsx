import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// M-Colors
import teal from '@material-ui/core/colors/teal';

// Icons
import Person from '@material-ui/icons/Person';

const primary = teal[500];

const styles = {
    sidebar: {
        textAlign: 'left',
        color: '#ffffff',
        overflow: 'hidden',
        display: 'block',
        '& .heading': {
            position: 'relative',
            '& .feature-img': {
                position: 'relative',
                '& img': {
                    width: '100%',
                }
            },
            '& .title': {
                position: 'absolute',
                right: '11px',
                bottom: '46px',
                color: '#000000',
                '& span': {
                    marginTop: '-5px',
                    fontSize: '10pt',
                    margin: '0px',
                    padding: '0px',
                    lineHeight: '15pt',
                }
            }
        },
    },
    card: {
        backgroundColor: primary,
        color: '#FFF',
        textAlign: 'left',
    },

    content: {
        color: '#FFF',
        padding: 5,
        width: '100%',
    }
};


function Sidebar(props) {
    const { classes } = props;
    return (

        <Card className={classes.card}>
            <div className={classes.sidebar}>
                <div className="heading">
                    <div className="feature-img">
                        <a href="index.html"><img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-9/34557784_1725938770815979_266669623145922560_n.jpg?_nc_cat=0&_nc_eui2=AeG5FPOxirS9zwvBAjtCdo0mcFIKDqWDl4jk2NguWy8Tbc2TNyLDWzDmvcTX1zpFIiMpGjQKp9eBseQDzC9yGkNqGSEiRSpmRUe9P8sKyrEQZg&oh=80c0631306e3a2f013a615ed6ea486ae&oe=5BE6D9B5" alt="me" className="responsive-img" /></a>
                    </div>
                    <div className="title">
                        <h2>Clark Dwain Luna</h2>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                <div className={classes.card}>
                    <List>
                        <ListItem>
                            <Person />
                            <ListItemText primary="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos fuga ratione nobis nulla, sit consectetur. Libero, molestias necessitatibus corrupti vel commodi minus nemo ex, neque ratione nam, modi quaerat voluptates quidem. Fuga, ab vero. Facilis assumenda illo vel laudantium asperiores nesciunt temporibus labore dolorum odit? Unde aspernatur libero id?" />
                        </ListItem>

                        <li>
                            <Divider inset />
                        </li>
                        <ListItem>
                            <Person />
                            <ListItemText secondary="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos fuga ratione nobis nulla, sit consectetur. Libero, molestias necessitatibus corrupti vel commodi minus nemo ex, neque ratione nam, modi quaerat voluptates quidem. Fuga, ab vero. Facilis assumenda illo vel laudantium asperiores nesciunt temporibus labore dolorum odit? Unde aspernatur libero id?" />
                        </ListItem>
                    </List>
                </div>

            </div>
        </Card >

    );

}
Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Sidebar);