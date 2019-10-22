/**
 * Created by mp1pro on 9/29/18.
 */

import React from 'react';
import TreeMenu, { defaultChildren, ItemComponent } from 'react-simple-tree-menu';


const treeData = {
  'first-level-node-1': {  
    label: 'Node 1 at the first level',
    index: 0,
    nodes: {
      'second-level-node-1': {
        label: 'Node 1 at the second level',
        index: 0,
        nodes: {
          'third-level-node-1': {
            label: 'Node 1 at the third level',
            index: 0,
            nodes: {} 
          },
        },
      },
    },
  },
  'first-level-node-2': {
    label: 'Node 2 at the first level',
    index: 1,
  }
};

class Nav extends React.Component{
    render() {
        return(
            <TreeMenu data={treeData}>
                {({ search, items }) => (
                    <ul>
                        {items.map(props => (
                            <ItemComponent { ...props } />
                        ))}
                    </ul>
                )}
            </TreeMenu>
        );
    }
}

export default Nav;