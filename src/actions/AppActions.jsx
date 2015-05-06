import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AppConstants from '../constants/AppConstants.jsx';

export default {
  searchHandler(key) {
    AppDispatcher.dispatch({
      actionType: AppConstants.APP_SEARCH_HANDLER,
      key: key
    });
  },
  findById(empId) {
    AppDispatcher.dispatch({
      actionType: AppConstants.APP_FIND_BY_ID,
      empId: empId
    });
  },
};