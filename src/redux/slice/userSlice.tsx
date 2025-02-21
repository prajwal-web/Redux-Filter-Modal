import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import users from '../../utils/users.json';
import { RootState } from '../../hooks/store';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  age: number;
  gender?: string;
  companies?: string;
  jobTitle?: string;
}

type TInitialState = {
  original: IUser[];
  filteredUsers: IUser[];
  searchQuery: string;
};

const initialState: TInitialState = {
  original: users,
  filteredUsers: users,
  searchQuery: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    searchUsers: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase().trim();
      state.searchQuery = action.payload;
      if (query === '') {
        state.filteredUsers = state.original;
      } else {
        state.filteredUsers = state.original.filter((user) => {
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
          return fullName.includes(query);
        });
      }
    },
    updateData: (state, action) => {
      return { ...state, filteredUsers: action.payload };
    },
    actionUsers: (state, action) => {
      const { ageFrom, ageTo, emailEnding, gender, companies, jobTitles } = action.payload;
      let tempState = [...state.filteredUsers];
      console.log(tempState);

      if (gender !== 'All') {
        tempState = tempState.filter((user) => user.gender === gender);
        console.log(gender + ' ' + tempState);
      }
      if (emailEnding !== '') {
        tempState = tempState.filter((user) => user.email.endsWith(emailEnding));
        console.log(emailEnding);
      }
      if (ageFrom !== undefined && ageTo !== undefined) {
        tempState = tempState.filter((user) => user.age >= ageFrom && user.age <= ageTo);
        console.log(ageFrom + ' ' + ageTo);
      }
      if (companies !== 'All') {
        tempState = tempState.filter((user) => user.companies === companies);
        console.log(companies);
      }
      if (jobTitles !== 'All') {
        tempState = tempState.filter((user) => user.jobTitle === jobTitles);
        console.log(jobTitles);
      }
      // state.filteredUsers = tempState;
      return {
        ...state,
        filteredUsers: tempState
      };
    }
  }
});

export const { searchUsers, actionUsers, updateData } = userSlice.actions;
export const selectFilteredUsers = (state: RootState) => state.user.filteredUsers;
export default userSlice.reducer;
