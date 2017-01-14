import React from 'react'

import {GridList, GridTile} from 'material-ui/GridList'
import Paper from 'material-ui/Paper';


export default () => {

  const styles = {
      root: {
        display: 'flex'
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
          height: '100%',
          margin: '5%'
      },
      titleStyle: {
        color: '#FAFAFA',
        fontSize: '1.2em'
      },
      paperStyle: {
      margin: 'auto'
    }
  }

  const tilesData = [
    {
      img: 'images/santahat.jpg',
      title: 'Clothing',
      author: 'Anna Brown',
    },
    {
      img: 'images/santahat.jpg',
      title: 'Accessories',
      author: 'Anna Brown',
    },
    {
      img: 'images/santahat.jpg',
      title: 'Food',
      author: 'Anna Brown',
    }
  ];

  return (
    <div style={styles.root}>
      <GridList id='categoryNav' style={styles.gridList} cols={4}>
        {tilesData.map((tile) => (
          <Paper zDepth={4} key={tile.title} rounded={false} style={styles.gridTile}><GridTile
            title={tile.title}
            titleStyle={styles.titleStyle}
            titleBackground='#FA8072'
          >
            <img src={tile.img} />
          </GridTile></Paper>
        ))}
      </GridList>
    </div>
    )
}