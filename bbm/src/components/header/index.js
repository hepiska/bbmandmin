import React from 'react';
import { Grid } from 'semantic-ui-react';
import Search from './search';

const style = {
  header: {
    height: '70px',
    backgroundColor: 'black',
    color: 'white',
    marginTop: 0,
    padding: 0,
  },
  logo: {
    paddingLeft: 20,
  },
};


const Header = () => (
  <div>
    <Grid style={style.header}>
      <Grid.Column width={5}>
        <h2 style={style.logo}> BBM Admin</h2>
      </Grid.Column>
      <Grid.Column width={10}>
        <Search />
      </Grid.Column>
    </Grid>
  </div>
);

export default Header;
