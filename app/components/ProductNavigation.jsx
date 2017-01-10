import React from 'react'

import {GridList, GridTile} from 'material-ui/GridList'
import Paper from 'material-ui/Paper';


export default () => {

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto'
  },
  gridList: {
    justifyContent: 'center',
    cellHeight: 'auto' // this should workkkkk
  },
  gridTile: {// whyyyy height whyyyy
      width: 'auto',
      height: '400px',
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
    img: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/12108231_10156342670650105_8218991482164709564_n.jpg?oh=67f9780ae4aace86d4891616fb84af6e&oe=58DF96BA',
    title: 'Clothing',
    author: 'Anna Brown',
  },
  {
    img: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/12108231_10156342670650105_8218991482164709564_n.jpg?oh=67f9780ae4aace86d4891616fb84af6e&oe=58DF96BA',
    title: 'Accessories',
    author: 'Anna Brown',
  },
  {
    img: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/12108231_10156342670650105_8218991482164709564_n.jpg?oh=67f9780ae4aace86d4891616fb84af6e&oe=58DF96BA',
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