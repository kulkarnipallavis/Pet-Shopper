import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

export default () => {
	return (
		<div>
			<GridList id='categoryNav' style={styles.gridList} cols={4}>
	          	<Paper zDepth={4} rounded={false} style={styles.gridTile}>
	          		<GridTile
			            title="Edit Products"
			            titleStyle={styles.titleStyle}
			            titleBackground='#FA8072'
			          >
		          	</GridTile>
		         </Paper>
		         <Paper zDepth={4} rounded={false} style={styles.gridTile}>
	          		<GridTile
			            title="Edit Categories"
			            titleStyle={styles.titleStyle}
			            titleBackground='#FA8072'
			          >
		          	</GridTile>
		         </Paper>
		         <Paper zDepth={4} rounded={false} style={styles.gridTile}>
	          		<GridTile
			            title="View Orders"
			            titleStyle={styles.titleStyle}
			            titleBackground='#FA8072'
			          >
		          	</GridTile>
		         </Paper>
		         <Paper zDepth={4} rounded={false} style={styles.gridTile}>
	          		<GridTile
			            title="Manage Users"
			            titleStyle={styles.titleStyle}
			            titlesBackground='#FA8072'
			          >
		          	</GridTile>
		         </Paper>
      		</GridList>
		</div>
	)
}

const styles = {
      root: {
        display: 'flex'
      },
      gridList: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
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
