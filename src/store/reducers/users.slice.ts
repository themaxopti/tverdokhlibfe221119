import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
const users = [
  {
    id: 1,
    phone: "902-738-3242",
    name: "Geordan Aaryn",
    nickname: "@geordanaaryn",
    email: "geordan.aaryn@fallinhay.com",
    position: "Chief Executive Officer",
    photo: "1.jpg",
  },
  {
    id: 2,
    phone: "902-782-3286",
    name: "Brazil Izair",
    nickname: "@brazilizair",
    email: "brazil.izair@fallinhay.com",
    position: "Managing Director",
    photo: "2.jpg",
  },
  {
    id: 3,
    phone: "902-739-3333",
    name: "Selman Winston",
    nickname: "@selmanwinston",
    email: "selman.winston@fallinhay.com",
    position: "Chief Visionary Officer",
    photo: "3.jpg",
  },
  {
    id: 4,

    phone: "902-784-3378",
    name: "Kaine Dutch",
    nickname: "@kainedutch",
    email: "kaine.dutch@fallinhay.com",
    position: "Chief Financial Officer",
    photo: "4.jpg",
  },
  {
    id: 5,

    phone: "902-740-3426",
    name: "Kerby Linton",
    nickname: "@kerbylinton",
    email: "kerby.linton@fallinhay.com",
    position: "IT Guy",
    photo: "5.jpg",
  },
  {
    id: 6,

    phone: "902-786-3472",
    name: "Gilad Delvon",
    nickname: "@giladdelvon",
    email: "gilad.delvon@fallinhay.com",
    position: "Workless",
    photo: "6.jpg",
  },
  {
    id: 7,

    phone: "902-741-3521",
    name: "Augusto Castor",
    nickname: "@augustocastor",
    email: "augusto.castor@fallinhay.com",
    position: "Manager",
    photo: "7.jpg",
  },
  {
    id: 8,

    phone: "902-788-3568",
    name: "Zian Khyre",
    nickname: "@ziankhyre",
    email: "zian.khyre@fallinhay.com",
    position: "General worker/Works for food",
    photo: "8.jpg",
  },
  {
    id: 9,
    phone: "902-742-3618",
    name: "Sheldon Neiko",
    nickname: "@sheldonneiko",
    email: "sheldon.neiko@fallinhay.com",
    position: "Security Guy",
    photo: "9.jpg",
  },
  {
    id: 10,
    phone: "902-790-3666",
    name: "Berenger Altay",
    nickname: "@berengeraltay",
    email: "berenger.altay@fallinhay.com",
    position: "Unknown person",
    photo: "10.jpg",
  },
];

export interface User {
  id: number;
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
}

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // findUser(state, action: PayloadAction<number>) {
    //   state.users = action.payload;
    // },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
