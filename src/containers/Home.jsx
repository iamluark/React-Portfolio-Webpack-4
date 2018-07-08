import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";

import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import Timeline from "@material-ui/icons/Timeline";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";

import homePageStyle from 'assets/jss/containers/homePage.jsx';

// Components - Home
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';
import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.jsx';

// modal test
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import javascriptStyles from 'assets/jss/containers/javascript/javascriptStyles.jsx';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classicModal: false,
            openLeft: false,
            openTop: false,
            openBottom: false,
            openRight: false
        };
    }
    handleClickOpen(modal) {
        var x = [];
        x[modal] = true;
        this.setState(x);
    }
    handleClose(modal) {
        var x = [];
        x[modal] = false;
        this.setState(x);
    }
    handleClosePopover(state) {
        this.setState({
            [state]: false
        });
    }
    handleClickButton(state) {
        this.setState({
            [state]: true
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <GridContainer>
                <GridItem md={4}>
                    <Card>
                        <CardHeader>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vitae?</p>
                        </CardHeader>
                        <CardBody>
                            <SnackbarContent
                                message={
                                    <span>
                                        <b>SUCCESS ALERT:</b> You've got some friends nearby, stop looking
                                        at your phone and find them...</span>
                                }
                                close
                                color="success"
                                icon={Check}
                            />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia cum iste temporibus ipsa dolorem veniam impedit atque aut reprehenderit suscipit obcaecati possimus molestias est sint, odio, aliquid nulla nam facilis. Sit fugiat voluptates similique, eaque possimus voluptatem harum consequatur repudiandae obcaecati? Vitae, similique libero perspiciatis laborum impedit repellat cum voluptatibus.</p>
                            <Button color="facebook">
                                Select
                    </Button>
                            <CustomInput
                                labelText="First Name..."
                                id="first"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "text",
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <People className={classes.inputIconsColor} />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </CardBody>
                        <CardFooter>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, nisi!</p>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem md={8}>
                    <Card>
                        <CardHeader>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vitae?</p>
                        </CardHeader>
                        <CardBody>
                            <InfoArea
                                title="Marketing"
                                description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                                icon={Timeline}
                                iconColor="rose"
                            />
                            <Button
                                color="primary"
                                block
                                onClick={() => this.handleClickOpen("classicModal")}
                            >
                                <LibraryBooks className={classes.icon} />Classic
                  </Button>

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia cum iste temporibus ipsa dolorem veniam impedit atque aut reprehenderit suscipit obcaecati possimus molestias est sint, odio, aliquid nulla nam facilis. Sit fugiat voluptates similique, eaque possimus voluptatem harum consequatur repudiandae obcaecati? Vitae, similique libero perspiciatis laborum impedit repellat cum voluptatibus.</p>
                            <CustomInput
                                id="regular"
                                inputProps={{
                                    placeholder: "Regular"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                            <Button color="google">
                                Select
                    </Button>
                            <CustomLinearProgress
                                variant="determinate"
                                color="danger"
                                value={25}
                                style={{ width: "100%", display: "inline-block" }}
                            />
                        </CardBody>

                        <CardFooter>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, nisi!</p>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(homePageStyle)(Home);