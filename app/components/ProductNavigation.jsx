import React from 'react'

import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'


export default () => {

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    width: '100%'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
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
    <GridList style={styles.gridList} cols={4}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.title}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
  )
}