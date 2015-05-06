import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AppConstants from '../constants/AppConstants.jsx';
import { EventEmitter } from 'events';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

var employees = [];
var employee  = {};

function searchHandler(key) {
  employeeService.findByName(key).done(function(result) {
    employees = result;
  });
}

function findById(empId) {
  employeeService.findById(empId).done(function(result) {
    employee = result;
  });
}

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addAppListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeAppListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAll: function() {
    return employees;
  },
  getOne: function() {
    return employee;
  }
});

AppStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AppConstants.APP_SEARCH_HANDLER:
      searchHandler(action.key);
      AppStore.emitChange();
      break;
      
    case AppConstants.APP_FIND_BY_ID:
      findById(action.empId);
      AppStore.emitChange();
      break;
      
    default:
      
  }
});

export default AppStore;