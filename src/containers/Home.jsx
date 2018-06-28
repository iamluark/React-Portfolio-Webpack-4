import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';

import homePageStyle from 'assets/jss/containers/homePage.jsx';

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Grid container spacing={40}>
                    <Grid item sm={3}>
                        <Card>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed quisquam eum dolor consequatur facilis id voluptatum. Adipisci laboriosam odit consequatur nisi maxime corrupti repudiandae provident itaque. Vel iste ipsam consequuntur excepturi provident temporibus! Iusto, illum molestiae ab delectus accusamus laboriosam, quae veritatis earum animi numquam illo praesentium eveniet rerum quidem provident eos? Optio beatae delectus incidunt, eveniet enim ab adipisci hic nisi illo, nam molestiae consectetur velit, quibusdam maiores doloribus nobis neque rem maxime exercitationem iste assumenda vitae. Quod facere incidunt impedit similique nobis rem perferendis ipsum saepe. Dignissimos reprehenderit vero tempore placeat molestiae corporis quos doloribus expedita fuga!</p>
                        </Card>
                    </Grid>
                    <Grid item sm={9}>
                        <Card>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique, aspernatur sed culpa veniam distinctio quod delectus accusantium id eaque reiciendis nostrum nesciunt voluptates beatae ducimus consequatur assumenda sequi ut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed quisquam eum dolor consequatur facilis id voluptatum. Adipisci laboriosam odit consequatur nisi maxime corrupti repudiandae provident itaque. Vel iste ipsam consequuntur excepturi provident temporibus! Iusto, illum molestiae ab delectus accusamus laboriosam, quae veritatis earum animi numquam illo praesentium eveniet rerum quidem provident eos? Optio beatae delectus incidunt, eveniet enim ab adipisci hic nisi illo, nam molestiae consectetur velit, quibusdam maiores doloribus nobis neque rem maxime exercitationem iste assumenda vitae. Quod facere incidunt impedit similique nobis rem perferendis ipsum saepe. Dignissimos reprehenderit vero tempore placeat molestiae corporis quos doloribus expedita fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed quisquam eum dolor consequatur facilis id voluptatum. Adipisci laboriosam odit consequatur nisi maxime corrupti repudiandae provident itaque. Vel iste ipsam consequuntur excepturi provident temporibus! Iusto, illum molestiae ab delectus accusamus laboriosam, quae veritatis earum animi numquam illo praesentium eveniet rerum quidem provident eos? Optio beatae delectus incidunt, eveniet enim ab adipisci hic nisi illo, nam molestiae consectetur velit, quibusdam maiores doloribus nobis neque rem maxime exercitationem iste assumenda vitae. Quod facere incidunt impedit similique nobis rem perferendis ipsum saepe. Dignissimos reprehenderit vero tempore placeat molestiae corporis quos doloribus expedita fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed quisquam eum dolor consequatur facilis id voluptatum. Adipisci laboriosam odit consequatur nisi maxime corrupti repudiandae provident itaque. Vel iste ipsam consequuntur excepturi provident temporibus! Iusto, illum molestiae ab delectus accusamus laboriosam, quae veritatis earum animi numquam illo praesentium eveniet rerum quidem provident eos? Optio beatae delectus incidunt, eveniet enim ab adipisci hic nisi illo, nam molestiae consectetur velit, quibusdam maiores doloribus nobis neque rem maxime exercitationem iste assumenda vitae. Quod facere incidunt impedit similique nobis rem perferendis ipsum saepe. Dignissimos reprehenderit vero tempore placeat molestiae corporis quos doloribus expedita fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed quisquam eum dolor consequatur facilis id voluptatum. Adipisci laboriosam odit consequatur nisi maxime corrupti repudiandae provident itaque. Vel iste ipsam consequuntur excepturi provident temporibus! Iusto, illum molestiae ab delectus accusamus laboriosam, quae veritatis earum animi numquam illo praesentium eveniet rerum quidem provident eos? Optio beatae delectus incidunt, eveniet enim ab adipisci hic nisi illo, nam molestiae consectetur velit, quibusdam maiores doloribus nobis neque rem maxime exercitationem iste assumenda vitae. Quod facere incidunt impedit similique nobis rem perferendis ipsum saepe. Dignissimos reprehenderit vero tempore placeat molestiae corporis quos doloribus expedita fuga!</p>
                        </Card>
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