import React from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import {getCategories} from '../reducers/categories';

const mapStateToProps = (state) => {
  return {
    categories : state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesDispatch : () => {
      dispatch(getCategories());
    }
  }
}

export const ProductNavigation = (props) => { 
  const styles = {
      root: {
        display: 'flex',
        marginTop: '5%'
      },
      gridList: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        cellHeight: 'auto',
        margin: 'auto'
      },
      gridTile: {
          width: 'auto',
          height: '250px',
          margin: '5%'
      },
      titleStyle: {
        color: '#FAFAFA',
        fontSize: '1.2em'
      },
      tileImage: {
        maxHeight: '200px',
        maxWidth: '100%',
        display:'block',
        margin:'auto'
      },
      paperStyle: {
      margin: 'auto'
    }
  }

  const tilesData = props.categories;

  return (
    <div style={styles.root}>
      <GridList id='categoryNav' style={styles.gridList} cols={4}>
        {tilesData.map((tile) => (
          <Paper zDepth={4} key={tile.id} rounded={false} style={styles.gridTile}>
          <GridTile
            title={tile.name}
            titleStyle={styles.titleStyle}
            titleBackground='#FA8072'
          >
          <Link to={`/products/categories/${tile.id}`}>
            <img src={tile.imageURL} style={styles.tileImage}/>
          </Link>
          </GridTile></Paper>
        ))}
      </GridList>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductNavigation);