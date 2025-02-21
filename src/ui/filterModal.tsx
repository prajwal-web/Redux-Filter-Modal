import { Modal, Box, Button, Typography, TextField, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../hooks/useStore';
import { actionUsers } from '../redux/slice/userSlice';

const FilterModal = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(78);
  const [emailEnding, setEmailEnding] = useState('');
  const [gender, setGender] = useState('All');
  const [companies, setCompanies] = useState('All');
  const [jobTitles, setJobTitles] = useState('All');

  const dispatch = useAppDispatch();

  const filters = {
    ageFrom: minAge,
    ageTo: maxAge,
    emailEnding,
    gender,
    companies,
    jobTitles
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: 500,
          gap: 2
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: 'absolute',
            right: 20,
            top: 10,
            width: '30px',
            textAlign: 'center',
            borderRadius: '5px',
            border: '1px solid black',
            fontWeight: 500,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#848484',
              transition: 'ease-in-out'
            }
          }}
          onClick={handleClose}
        >
          X
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" gutterBottom sx={{ width: '90px' }}>
            Age :
          </Typography>
          <TextField
            label="Age From"
            type="number"
            name="ageFrom"
            value={filters.ageFrom}
            onChange={(e) => {
              const value = Number(e.target.value);
              setMinAge(value >= 18 && value <= 78 ? value : 18);
            }}
            margin="dense"
            sx={{ marginLeft: 2, width: 170 }}
          />
          <TextField
            label="Age To"
            type="number"
            name="ageTo"
            value={filters.ageTo}
            onChange={(e) => {
              const value1 = Number(e.target.value);
              setMaxAge(value1 >= 18 && value1 <= 78 ? value1 : 78);
            }}
            margin="dense"
            sx={{ marginLeft: 2, width: 170 }}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" gutterBottom sx={{ width: '90px' }}>
            Email :
          </Typography>
          <TextField
            label="Email ending with"
            name="emailEnding"
            margin="dense"
            value={emailEnding}
            onChange={(e) => setEmailEnding(e.target.value)}
            sx={{ width: 170, marginLeft: 2 }}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" gutterBottom sx={{ width: '90px' }}>
            Genders :
          </Typography>
          <Select
            name="gender"
            value={filters.gender}
            onChange={(e) => setGender(e.target.value)}
            margin="dense"
            sx={{ width: 170, marginLeft: 2 }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" gutterBottom sx={{ width: '90px' }}>
            Companies :
          </Typography>
          <Select
            name="gender"
            value={companies}
            onChange={(e) => setCompanies(e.target.value)}
            margin="dense"
            sx={{ width: 170, marginLeft: 2 }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Appstec-1">Appstec-1</MenuItem>
            <MenuItem value="Appstec-2">Appstec-2</MenuItem>
            <MenuItem value="Appstec-3">Appstec-3</MenuItem>
          </Select>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" gutterBottom sx={{ width: '90px' }}>
            Job Titles :
          </Typography>
          <Select
            name="gender"
            value={filters.jobTitles}
            onChange={(e) => setJobTitles(e.target.value)}
            margin="dense"
            sx={{ width: 170, marginLeft: 2 }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Developer-1"> Developer-1</MenuItem>
            <MenuItem value="Developer-2">Developer-2</MenuItem>
            <MenuItem value="Developer-3">Developer-3</MenuItem>
          </Select>
        </Box>

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => {
            dispatch(actionUsers(filters));
            handleClose();
          }}
        >
          Apply
        </Button>
      </Box>
    </Modal>
  );
};

export default FilterModal;
