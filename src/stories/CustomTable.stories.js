import React from "react";
import {storiesOf} from '@storybook/react';
import  {CustomTable}  from "../components/Table";
const stories= storiesOf('App Test', module);
stories.add('App',()=>{
    return (      <CustomTable rows={3} columns={3} headers={['Head1', "head2", "head3"]} data={[[1,4,8],[2,5,6]]}  />
    )
})