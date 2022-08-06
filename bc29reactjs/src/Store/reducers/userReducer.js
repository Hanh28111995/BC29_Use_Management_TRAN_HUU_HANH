const DEFAULT_STATE = {
  userList: [
    {
      id: 1,
      username: 'man.nguyen',
      fullName: 'Man Ng',
      email: 'man.nguyen@gmail.com',
      password: '123',
      phoneNumber: '085512123123',
      type: 'Client',
    },
    {
      id: 2,
      username: 'khai.tran',
      fullName: 'Khai Tran',
      password: '123',
      email: 'khai.tran@gmail.com',
      phoneNumber: '085512123123',
      type: 'Admin',
    },
  ],
  selectedUser: null,
};

// trong reducer nếu mà cái giá trị bên trong state là 1 mảng hoặc
// object thì cần phải copy ra 1 cải mảng hoặc object mới
export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case 'ADD_USER': {
      const data = [...state.userList];

      data.push({ ...payload, id: Date.now() });

      state.userList = data;

      return { ...state };
    }

    case 'SET_SELECTED_USER': {
      // state.selectedUser = payload;

      return { ...state, selectedUser: payload };
    }

    default:
      return state;
  }
};
