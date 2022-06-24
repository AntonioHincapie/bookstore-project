const CHECKSTATUS = 'bookstore-project/categories/CHECKSTATUS';

export default CateReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'In Progress';
    default:
      return state;
  }
}

export const Check = () => ({
  type: CHECKSTATUS,
});
