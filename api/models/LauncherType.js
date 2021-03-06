/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */
  
/**
* LauncherType.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	code:{
  		type:'string',
      unique:true,
  		required:true
  	},

  	name:{
  		type:'string',
  		required:true
  	},

  	description:{
  		type:'string'
  	},

    optionspath:{
      type:'string'
    },

  	launchers:{
        collection: 'Launcher',
        via: 'launcher'
    },

  }
};

