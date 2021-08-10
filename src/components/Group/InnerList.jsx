import React from 'react';
import Column from './column';

const InnerList = (props) => {
  const { column, taskMap, index } = props;
  const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
  return (
    <Column column={column} tasks={tasks} index={index} />
  );
};

export default InnerList;
