import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import homePageStyle from 'assets/jss/containers/homePage.jsx';

// Components - Home
import Sidebar from 'components/Sidebar/Sidebar.jsx';
import Content from 'components/Content/Content.jsx';

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Grid container spacing={40}>
                    <Grid item sm={4}>
                        <Sidebar />
                    </Grid>
                    <Grid item sm={8}>
                        <Grid container spacing={16}>
                            <Grid item>
                                <Content>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum dolores maiores ipsa a molestias, odit incidunt amet aut omnis? Suscipit, facere libero id mollitia explicabo recusandae. Modi error pariatur eveniet fuga vitae, natus suscipit, molestiae, perspiciatis quas neque commodi atque. Quidem vitae placeat numquam aspernatur suscipit cumque aliquam neque deserunt recusandae natus praesentium aut similique, consequatur vel quod tempore asperiores ducimus velit illo? Magnam atque quae illum esse eius accusantium earum quo optio. Debitis aliquid laudantium culpa, beatae quis maiores quisquam non placeat laboriosam. Officia delectus quaerat inventore molestiae architecto autem repellendus qui illum fugiat, eius harum. Doloribus, commodi!</p>
                                </Content>
                            </Grid>
                            <Grid item>
                                <Content>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt libero eligendi ipsum nulla eveniet facilis amet quisquam quibusdam accusamus id blanditiis, laborum doloribus nostrum. Consectetur laborum ex distinctio incidunt cum sequi porro aspernatur, est quas aliquam sint repellat ea! Obcaecati molestias quasi, fugiat nemo tempora unde maxime perferendis quo voluptate.</p>
                                </Content>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(homePageStyle)(Home);