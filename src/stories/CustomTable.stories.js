import React from "react";
import {storiesOf} from '@storybook/react';
import  {CustomTable}  from "../components/Table";
const stories= storiesOf('App Test', module);
stories.add('App',()=>{
    return (      <CustomTable  border="1" rows={9} columns={3}  data={[[1,4,8,9,0],[2,5,6,8],[1,4,8],[2,5,6]]}  />
    )
})