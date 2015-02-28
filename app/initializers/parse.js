import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup ({
     headers: {
       "X-Parse-Application-Id": 'DGT5TriVoZq92Dmsl5D8OycBB3dt1k6pOgIrKIaC',
       "X-Parse-REST-API-Key": 'zthdvGphLgItoFVQ7pAYyVZ0lmlrl8JJhE1fV1oB'
     }
});
}

export default {
  name: 'parse',
  initialize: initialize
};
