export default function reducer(state, action) {
  switch (action.type) {
    case 'DATA_RESPONSE_SUCCESS': {
      const {
        data: { users, messages },
      } = action;

      const usersMap = new Map();

      users.forEach((user) => {
        usersMap.set(user.id, user);
      });

      const messagesWithUsers = messages.map((msg) => {
        const msgWithUser = { 
          ...msg, 
          user: usersMap.get(msg.userId)
        };

        return msgWithUser;
      });

      const newState = {
        ...state,
        ...users,
        messages: messagesWithUsers
      };

      return newState;
    }

    default:
      return state;
  }
}
