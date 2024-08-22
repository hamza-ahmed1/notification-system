import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function SelectVariants({ program, set_program, dec, set_dec, sem, set_sem, sec, set_sec }) {
  const [programs, setPrograms] = React.useState([]);
  const [decs, setDecs] = React.useState([]);
  const [semesters, setSemesters] = React.useState([]);
  const [sections, setSections] = React.useState([]);
  
  const [selectedProgram, setSelectedProgram] = React.useState('');
  const [selectedDec, setSelectedDec] = React.useState('');
  const [selectedSem, setSelectedSem] = React.useState('');

  React.useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/sections');
        setPrograms(response.data);
      } catch (error) {
        console.error('Error fetching programs:', error);
      }
    };

    fetchPrograms();
  }, []);

  React.useEffect(() => {
    const fetchDecs = async () => {
      if (selectedProgram) {
        try {
          const response = await axios.get(`http://localhost:3001/api/sections/dec/${selectedProgram}`);
          setDecs(response.data);
        } catch (error) {
          console.error('Error fetching decs:', error);
        }
      }
    };

    fetchDecs();
  }, [selectedProgram]);

  React.useEffect(() => {
    const fetchSemesters = async () => {
      if (selectedDec) {
        try {
          const response = await axios.get(`http://localhost:3001/api/sections/get_sem`);
          setSemesters(response.data);
        } catch (error) {
          console.error('Error fetching semesters:', error);
        }
      }
    };

    fetchSemesters();
  }, [selectedDec]);

  React.useEffect(() => {
    const fetchSections = async () => {
      if (selectedSem) {
        try {
          const response = await axios.get(`http://localhost:3001/api/sections/get_sec`);
          setSections(response.data);
        } catch (error) {
          console.error('Error fetching sections:', error);
        }
      }
    };

    fetchSections();
  }, [selectedSem]);

  const handleProgramChange = (event) => {
    const newValue = event.target.value;
    setSelectedProgram(newValue);
    set_program(newValue); // Set the selected program
    set_dec(''); // Reset dec when program changes
    set_sem(''); // Reset semester when program changes
    set_sec(''); // Reset section when program changes
  };

  const handleDecChange = (event) => {
    const newValue = event.target.value;
    setSelectedDec(newValue);
    set_dec(newValue); // Set the selected dec
    set_sem(''); // Reset semester when dec changes
    set_sec(''); // Reset section when dec changes
  };

  const handleSemChange = (event) => {
    const newValue = event.target.value;
    setSelectedSem(newValue);
    set_sem(newValue); // Set the selected semester
    set_sec(''); // Reset section when semester changes
  };

  const handleSecChange = (event) => {
    set_sec(event.target.value); // Set the selected section
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="program-select-label">Select Program</InputLabel>
        <Select
          labelId="program-select-label"
          id="program-select"
          value={program}
          onChange={handleProgramChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {programs.map((program) => (
            <MenuItem key={program.prog_id} value={program.prog_id}>
              {program.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Department Dropdown */}
      {selectedProgram && (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="dec-select-label">Select Dec/Prog</InputLabel>
          <Select
            labelId="dec-select-label"
            id="dec-select"
            value={dec}
            onChange={handleDecChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {decs.map((dec) => (
              <MenuItem key={dec.dec_id} value={dec.dec_id}>
                {dec.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Semester Dropdown */}
      {selectedDec && (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="sem-select-label">Select Semester</InputLabel>
          <Select
            labelId="sem-select-label"
            id="sem-select"
            value={sem}
            onChange={handleSemChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {semesters.map((sem) => (
              <MenuItem key={sem.sem_id} value={sem.sem_id}>
                {sem.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Section Dropdown */}
      {selectedSem && (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="sec-select-label">Select Section</InputLabel>
          <Select
            labelId="sec-select-label"
            id="sec-select"
            value={sec}
            onChange={handleSecChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sections.map((section) => (
              <MenuItem key={section.sec_id} value={section.sec_id}>
                {section.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}
