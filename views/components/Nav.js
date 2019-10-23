/**
 * Created by mp1pro on 9/29/18.
 */

import React from 'react';
import TreeMenu, { defaultChildren, ItemComponent } from 'react-simple-tree-menu';


const treeData = [
    {
        key: "1",
        label: "HTML5",
        nodes: [
        {
            key: "2",
            label: "Your First HTML Page",
            nodes: []
        },
        {
            key: "3",
            label: "HTM5 Semantics",
            nodes: [
                {
                    key: "4",
                    label: 15.2124281097358,
                    nodes: []
                }
            ]
        }
        ]
    }
]

class Nav extends React.Component{
    render() {
        return(
            
            <TreeMenu data={treeData}>
                {({items}) => (
                    <ul>
                        {items.map(props => (
                        <ItemComponent {...props}  />
                        ))}
                    </ul>
                )}
            </TreeMenu>
        );
    }
}

export default Nav;