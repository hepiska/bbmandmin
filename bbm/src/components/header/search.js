import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchProduct } from '../../actions';

const Search = props => (
  <div>
    <Input focus fluid placeholder="Search.." onChange={e => props.setSearchKey(e.target.value)} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  setSearchKey: keyword => dispatch(searchProduct(keyword))
});
export default connect(null, mapDispatchToProps)(Search);
