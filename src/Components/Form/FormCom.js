import {
  Button,
  Checkbox,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Form.css";
export default function FormCom() {
  const [Event, setEvent] = React.useState([]);
  const [Name,setName]=React.useState('')
  const [Number,setNumber]=React.useState('')
  const [Email,setEmail]=React.useState('')
  const [Price,setPrice]=React.useState('')
  const [College,setCollege]=React.useState('')
  const theme = useTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  React.useEffect(()=>{
    if(Event.length==0){
      setPrice(0)
    } 
    else if(Event.length<=2){
       setPrice(350)
     }
     else{
       setPrice(750)
     }
  },[Event])
  const names = [
    "Paper presentation",
    "Cook without fire",
    "Gaming",
    "Mobile App development",
    "Treasure Hunt",
  ];
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEvent(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleName=(event)=>{
    setName(event.target.value)
  }
  const handleNumber=(event)=>{
    setNumber(event.target.value)
  }
  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handleCollege=(event)=>{
    setCollege(event.target.value)
  }
  const handleSubmit=()=>{
    let NameStyle=document.getElementById("Name")
    let NumberStyle=document.getElementById("Number")
    let CollegeStyle=document.getElementById("College")
    let EmailStyle=document.getElementById("Email")
    let EventsStyle=document.getElementById("Events")
    if(Name!=""){
       NameStyle.style.display="none"
       if(/^\d{10}$/.test(Number)){
          NumberStyle.style.display="none"
          if(College!=""){
            CollegeStyle.style.display="none"
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)){
              EmailStyle.style.display="none"
              if(Event.length>1){
              EventsStyle.style.display="none"
              console.log(`${Name} ${College} ${Number} ${Email} ${Event} ${Price}`)
              }
              else{
                EventsStyle.style.display="block"
              }
            }
            else{
              EmailStyle.style.display="block"
            }
          }
          else{
            CollegeStyle.style.display="block"
          }
       }
       else{
         NumberStyle.style.display="block"
       }
    }
    else{
        console.log('s')
        NameStyle.style.display="block"
    }
  }
  return (
    <div>
      <NavBar color="white"/>
    <div className="FormOuterFlex">
      <h1 style={{ textAlign: "center" }}>Registration </h1>
      <div className="FormFlex">
        <TextField fullWidth label="Enter the Name" onChange={handleName} id="fullWidth" />
        <p className="hidden" id="Name">Enter the Name</p>
        <TextField
          sx={{ mt: 3 }}
          fullWidth
          label="Enter the PhoneNumber"
          onChange={handleNumber}
          id="fullWidth"
        />
        <p className="hidden" id="Number">Enter the proper Number</p>
        <TextField
          sx={{ mt: 3 }}
          fullWidth
          onChange={handleCollege}
          label="Enter the College Name"
          id="fullWidth"
        />
        <p className="hidden" id="College">Enter the College Name</p>
        <TextField
        onChange={handleEmail}
          sx={{ mt: 3 }}
          fullWidth
          
          label="Enter the EmailId"
          id="fullWidth"
        />
        <p className="hidden" id="Email">Enter the proper MailId</p>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel id="demo-multiple-checkbox-label">Events</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={Event}
            fullWidth
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={Event.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          <p className="hidden" id="Events">Select Minimum 2 Events</p>
        </FormControl>
        <TextField
          sx={{ mt: 2 }}
          id="filled-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">&#8377;</InputAdornment>
            ),
          }}
          default
          value={Price}
          fullWidth
          label="price"
        />
        <center>
          <Button onClick={handleSubmit} sx={{ mt: 2, width: "160px" }} variant="contained">
            Submit
          </Button>
        </center>
      </div>
    </div>
    </div>
  );
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
