import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import _ from 'lodash';
import 'antd/dist/antd.css';

const { TreeNode } = Tree;

const getKeyArray = (tree) => {
  const newTree = {};
  const keys = Object.keys(tree);
  keys.forEach((key) => {
    newTree[key] = [];
  });
  return newTree;
};

const flatten = (tree) => {
  let keys = [];
  tree.forEach((item) => {
    keys.push(item.key);
    if (item.hasOwnProperty('children')) {
      keys = keys.concat(flatten(item.children));
    }
  });
  return keys;
};

const TreeView = ({ tree, selectedItems = [], onChange }) => {
  const defaultTree = getKeyArray(tree);
  const [treeSelections, setTreeSelections] = useState(defaultTree);

  useEffect(() => {
    let selections = Object.assign({}, treeSelections);
    const categories = Object.keys(tree);
    for (const category of categories) {
      const keys = flatten(tree[category].items);
      keys.forEach((key) => {
        if (selectedItems.indexOf(key) >= 0) {
          selections[category].push(key);
        }
      });
    }
    setTreeSelections(selections);
    onChange(selections);
  }, [selectedItems]);

  const handleTreeClick = (selectedKeys, evt) => {
    let selections = Object.assign({}, treeSelections);
    selections[evt.node.props.name] = selectedKeys;
    setTreeSelections(selections);
    onChange(selections);
  };

  const renderTreeNodes = (data, name) =>
    data.map((item) => {
      item.name = name;

      if (item.children) {
        return (
          <TreeNode
            name={item.name}
            title={item.title}
            key={item.key}
            dataRef={item}
            disableCheckbox={false}
          >
            {renderTreeNodes(item.children, name)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} disableCheckbox={false} />;
    });

  const renderTreeSection = (key) => {
    const subTree = tree[key].items;
    const hasChildren = _.has(subTree[0], 'children');
    const checkedKeyState = treeSelections[key];
    return (
      <Tree
        checkable
        showLine={hasChildren}
        showIcon={false}
        defaultExpandAll={false}
        autoExpandParent={true}
        onCheck={handleTreeClick}
        checkedKeys={checkedKeyState}
      >
        {renderTreeNodes(subTree, key)}
      </Tree>
    );
  };

  return (
    <React.Fragment>
      {Object.keys(tree).map((key) => (
        <fieldset key={key}>
          <legend>{tree[key].title}</legend>
          {renderTreeSection(key)}
        </fieldset>
      ))}
    </React.Fragment>
  );
};

export default TreeView;
