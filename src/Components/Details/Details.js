import { Button, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { TechnicalDetails, NonTechnicalDetails, WorkshopDetails } from '../../Details';
import NavBar from '../NavBar/NavBar'
import './Details.css'
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Details() {
    const [Component, setComponent] = useState({})
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    useEffect(() => {
        DetailsRender()
    })
    function DetailsRender() {
        var a = window.location.pathname.split('/');
        let x;
        if (a[2] === 'Technical') {
            x=TechnicalDetails.find((e) => {
                return (
                    e.id === a[3]
                )
            })
        }
        else if(a[2]=="NonTechnical"){
          x=NonTechnicalDetails.find((e)=>{
            return(
              e.id===a[3]
            )
          })
        }
        else if(a[2]=="Workshop"){
          x=WorkshopDetails.find((e)=>{
            return(
              e.id===a[3]
            )
          })
        }
        setComponent(x);   
    }
    return (
        <div className="Details">
            <NavBar color="white"/>
        <div className="DetailsFlex">
            <h1 className="DetailsTitle">
                {Component.name}
            </h1>
            <div style={{display:"flex",flexDirection:"row",gap:"30px"}}>
             <button className="DetailsButton"  onClick={()=>{window.location.href='#Goto'}}>Know More</button>
             <button className="DetailsButton" onClick={()=>{window.location.href='/Register'}}>Register</button>
            </div>
        </div>
        <div id="Goto">
        <Box sx={{ borderRadius:1,backgroundColor:"white",m:10 }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Description" {...a11yProps(0)} />
    <Tab label="Rules and Regulations" {...a11yProps(1)} />
    <Tab label="Required" {...a11yProps(2)} />
  </Tabs>
  <Box sx={{mx:12}}>
<TabPanel value={value} index={0}>
  {Component.description}
</TabPanel>
<TabPanel value={value} index={1}>
  {Component.rules}
</TabPanel>
<TabPanel value={value} index={2}>
{Component.required}
</TabPanel>
</Box>
</Box>

        </div>
        </div>
    )
}